export const captureError = (error: unknown, context?: string) => {
  console.error(`[Error Capture] ${context ? `${context}: ` : ''}`, error);
  // Here you would typically send to Sentry or similar
};

export const wrapAsync = <T,>(promise: Promise<T>, context?: string): Promise<T> => {
  return promise.catch((err) => {
    captureError(err, context);
    throw err;
  });
};
