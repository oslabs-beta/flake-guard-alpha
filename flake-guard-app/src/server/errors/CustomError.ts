class CustomError {
  constructor(
    public message: string,
    public status: number,
    public log: String,
    public error: unknown
  ) {
    this.message = message;
    this.status = status;
    this.log = `ERROR---> ${log}: \n`;
    this.error = error;
  }
}

export default CustomError;
