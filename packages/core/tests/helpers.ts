import { ZodSafeParseResult, ZodError } from "zod";

export const getErrorMessage = (
  parsed: ZodSafeParseResult<unknown>
): string => {
  if (parsed.error) {
    return parsed.error.issues[0].message;
  }
  throw new Error();
};

export const getErrorMessageFromZodError = (callback: () => void) => {
  try {
    callback();
  } catch (e) {
    if (e instanceof ZodError) {
      return e.message;
    }
    throw e;
  }
};
