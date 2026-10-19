import { z } from 'zod';

export const artistInquirySchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email must be less than 100 characters.' }),
  artistName: z
    .string()
    .trim()
    .min(1, { message: 'Please enter your artist name.' })
    .max(100, { message: 'Artist name must be less than 100 characters.' }),
  message: z
    .string()
    .trim()
    .min(1, { message: 'Please enter a message.' })
    .max(2000, { message: 'Message must be less than 2000 characters.' }),
});

export type ArtistInquiry = z.infer<typeof artistInquirySchema>;
