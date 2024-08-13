import {Request, Response, NextFunction} from 'express';
import CustomError from './CustomError';

// Error handler middleware
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.error(err.log, err.error);
    return res.status(err.status).json({error: err.message});
  } else {
    console.error('Unknown middleware error encountered', err);
    return res.status(500).json({error: 'Server error occurred'});
  }
};

export default errorHandler;
