'use client';

import { useEffect, useState } from 'react';
import { Camera, LoaderCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Avatar from '@/components/ui/Avatar';
import { createSupabaseClient } from '@/lib/supabase/client';
import logger from '@/lib/logger';
import { updateAvatarAction } from '../actions';

type AvatarUploadProps = {
  uid: string;
  path: string | null;
  name: string | null;
};

const AvatarUpload = ({ uid, path, name }: AvatarUploadProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!path) return;
    let objectUrl: string | null = null;

    const downloadImage = async () => {
      const { data, error } = await createSupabaseClient()
        .storage.from('avatars')
        .download(path);
      if (error) {
        logger.error(`Error downloading image: ${error.message}`);
        return;
      }
      objectUrl = URL.createObjectURL(data);
      setAvatarUrl(objectUrl);
    };

    void downloadImage();
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [path]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${uid}-${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await createSupabaseClient()
        .storage.from('avatars')
        .upload(filePath, file);
      if (uploadError) throw uploadError;

      const { errorMessage } = await updateAvatarAction(filePath);
      if (errorMessage) throw new Error(errorMessage);

      setAvatarUrl(URL.createObjectURL(file));
      toast.success('Avatar updated!');
    } catch (error) {
      logger.error(`Error uploading avatar: ${error}`);
      toast.error('Error uploading avatar!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <label className="group relative block size-36 shrink-0 cursor-pointer rounded-full shadow-[0_4px_60px_rgb(0_0_0/0.5)] md:size-48">
      <Avatar
        src={avatarUrl}
        name={name}
        className="size-full text-6xl"
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-full bg-black/60 text-sm font-bold opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
        {uploading ? (
          <LoaderCircle
            aria-hidden
            className="size-8 animate-spin"
          />
        ) : (
          <Camera
            aria-hidden
            className="size-8"
          />
        )}
        {uploading ? 'Uploading ...' : 'Choose photo'}
      </span>
      <input
        type="file"
        accept="image/*"
        onChange={uploadAvatar}
        disabled={uploading}
        className="sr-only"
        aria-label="Upload avatar"
      />
    </label>
  );
};

export default AvatarUpload;
