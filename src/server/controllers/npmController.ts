import {Request, Response, NextFunction} from 'express';

const controller = {
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {simple, user} = req.body;
      if (user === 'temp') {
        res.locals.simple = simple;
        res.locals.user = user;
      }
      return next();
    } catch (error) {
      console.log('ERROR', error);
    }
  },
};

export default controller;
