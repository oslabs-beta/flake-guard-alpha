// src/middleware/errorHandler.ts
import {Request, Response} from 'express';
import CustomError from '../errors/CustomError';

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response
) => {
  const defaultErr = {
    message: {err: 'An error occurred in the server'},
    status: 500,
    log: 'Express error handler caught unknown middleware error',
  };

  const errorObj = {
    message: {error: error.message || defaultErr.message.err},
    status: error.status || defaultErr.status,
    log: error.log || defaultErr.log,
  };

  console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
};
