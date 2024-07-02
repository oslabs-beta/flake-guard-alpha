import {Request, Response, NextFunction} from 'express';

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
    if (res.locals.user === 'temp') {
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
    }
    next();
  },

  buildCustomUrl: (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.user === 'temp') {
      const tempUrl: string = `http://localhost:8080/dashboard/${res.locals.randomString}`;
      res.locals.tempUrl = tempUrl;
    }
    next();
  },
};

export default urlController;
