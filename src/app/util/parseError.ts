import { Category, Message } from '@/types/Message';

export default function parseError(
  error: any,
  customErrorMessage: string | undefined | null | ''
): Message {
  return {
    code: error.code,
    message:
      customErrorMessage && customErrorMessage != ''
        ? customErrorMessage
        : error.message,
    category: Category.ERROR,
  };
}
