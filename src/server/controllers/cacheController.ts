import {Request, Response, NextFunction} from 'express';
import tempCache from '../tempCache';

interface CacheController {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => void;
}

const cacheController: CacheController = {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.user === 'temp') {
      tempCache[res.locals.randomString] = res.locals.simple;
    }
    next();
  },
};

export default cacheController;
