export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = 'Something went wrong',
) => {
  if (error instanceof Error && error.message.length < 100) {
    return error.message;
  }
  return defaultMessage;
};
