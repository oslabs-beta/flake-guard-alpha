// src/errors/CustomError.ts
class CustomError extends Error {
  public status: number;
  public log: string;

  constructor(
    message: string,
    status: number,
    log: string,
    originalError: Error
  ) {
    super(message);
    this.status = status;
    this.log = log + originalError.message; // Append the original error message to the log

    // Set the prototype explicitly to maintain proper instance of CustomError
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
