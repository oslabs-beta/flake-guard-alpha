import {Request, Response, NextFunction} from 'express';
import CustomError from '../errors/CustomError';

interface UrlController {
  generateRandomString: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
  buildCustomUrl: (req: Request, res: Response, next: NextFunction) => void;
}

const urlController: UrlController = {
  generateRandomString: (req: Request, res: Response, next: NextFunction) => {
    try {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 10; i++) {
        randomString += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      res.locals.randomString = randomString;
      next();
    } catch (error) {
      const customError = new CustomError(
        'Failed generate random string',
        500,
        'Error in generateRandomString',
        error
      );
      return next(customError);
    }
  },

  buildCustomUrl: (req: Request, res: Response, next: NextFunction) => {
    try {
      const tempUrl: string = `https://flakeguard.com/${res.locals.randomString}`;
      res.locals.tempUrl = tempUrl;
      next();
    } catch (error) {
      const customError = new CustomError(
        'Failed to build URL',
        500,
        'Error in buildCustomURL',
        error
      );
      return next(customError);
    }
  },
};

export default urlController;
