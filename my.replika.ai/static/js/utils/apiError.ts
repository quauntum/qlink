export class ApiError extends Error {
  name = 'ApiError';
  statusCode: number;
  stack: string | undefined;
  message: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.stack = new Error().stack;
    this.message = message;
  }
}
