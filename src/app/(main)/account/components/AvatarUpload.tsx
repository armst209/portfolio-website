'use client';

import { useState } from 'react';
import { Camera, LoaderCircle } from 'lucide-react';

import Avatar from '@shared-components/Avatar';

type AvatarUploadProps = {
  uid: string;
  path: string | null;
  name: string | null;
};

const AvatarUpload = ({ uid, path, name }: AvatarUploadProps) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

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
        // onChange={uploadAvatar}
        disabled={uploading}
        className="sr-only"
        aria-label="Upload avatar"
      />
    </label>
  );
};

export default AvatarUpload;
