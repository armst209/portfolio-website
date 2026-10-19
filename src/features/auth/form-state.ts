export type AuthFormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: { email?: string[]; password?: string[] };
  values?: { email: string };
};

export const initialAuthFormState: AuthFormState = { status: 'idle' };
