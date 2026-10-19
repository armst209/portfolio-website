import { z } from 'zod';

const optionalText = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, { message: `${label} must be less than ${max} characters.` })
    .transform((value) => value || null);

export const profileSchema = z.object({
  full_name: optionalText(100, 'Full name'),
  username: optionalText(50, 'Username'),
  website: z
    .union([
      z.literal(''),
      z.url({ message: 'Please enter a valid URL (https://…).' }),
    ])
    .transform((value) => value || null),
});

export type Profile = {
  full_name: string | null;
  username: string | null;
  website: string | null;
  avatar_url: string | null;
};
