// base error class
export class BaseError extends Error {
  status: number;
  isOperational: boolean;
  constructor(message: string, status: number, isOperational = true) {
    super(message);
    this.status = status;
    this.isOperational = isOperational;
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

// 404 error class
export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

// validation error class
export class ValidationError extends BaseError {
  errorData: Record<string, string>[];
  constructor(data: Record<string, string>[]) {
    super('Validation Error', 400);
    this.errorData = data;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
