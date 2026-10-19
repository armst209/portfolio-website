import { z } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

export const signInSchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email must be less than 100 characters.' }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters.',
    })
    .max(50, { message: 'Password must be less than 50 characters.' }),
});

export const signUpSchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email address.' })
    .max(100, { message: 'Email must be less than 100 characters.' }),
  password: z
    .string()
    .regex(
      passwordRegex,
      'Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.',
    ),
});

export type Credentials = z.infer<typeof signInSchema>;
