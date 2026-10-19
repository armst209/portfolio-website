'use client';

import { useState } from 'react';
import { z } from 'zod';
import { CircleCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import Button from '@shared-components/Button';
import Input from '@shared-components/Input';
import { cn } from '@/utils/cn';
import { artistInquirySchema, type ArtistInquiry } from '../schemas';

type FieldErrors = Partial<Record<keyof ArtistInquiry, string[]>>;

/**
 * UI + validation only. The original posted to a Mailchimp list; wire
 * `handleSubmit` to a server action or mailing-list API to receive inquiries.
 */
const ArtistInquiryForm = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = artistInquirySchema.safeParse({
      email: String(data.get('email') ?? ''),
      artistName: String(data.get('artistName') ?? ''),
      message: String(data.get('message') ?? ''),
    });

    if (!parsed.success) {
      setErrors(z.flattenError(parsed.error).fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    form.reset();
    toast.success('Thanks! We’ll be in touch ASAP.');
  };

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4">
        <p className="flex items-center gap-2 text-lg font-bold">
          <CircleCheck
            aria-hidden
            className="size-6 text-groovy-yellow"
          />
          Success!
        </p>
        <p className="text-subdued">
          Someone from our team will be reaching out to you shortly! Thank you!
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-4">
      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Ex: your@email.com"
        required
        errors={errors.email}
      />
      <Input
        label="Artist Name"
        name="artistName"
        placeholder="Artist Name"
        required
        errors={errors.artistName}
      />
      <div className="flex flex-col gap-2">
        <label
          htmlFor="artist-message"
          className="text-sm font-bold">
          Message
        </label>
        <textarea
          id="artist-message"
          name="message"
          rows={5}
          placeholder="Tell us about your music and your next release"
          required
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? 'artist-message-error' : undefined}
          className={cn(
            'resize-y rounded-md border border-muted bg-base px-3.5 py-3 text-white placeholder:text-muted outline-none hover:border-white focus:border-white focus:shadow-[inset_0_0_0_1px_white] focus-visible:outline-none',
            errors.message && 'border-danger hover:border-danger',
          )}
        />
        {errors.message && (
          <p
            id="artist-message-error"
            className="text-sm text-danger">
            {errors.message[0]}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="mt-2 self-start">
        Submit Artist Info
      </Button>
    </form>
  );
};

export default ArtistInquiryForm;
