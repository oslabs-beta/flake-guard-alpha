import {Request, Response, NextFunction} from 'express';
import tempCache from '../tempCache';

interface CacheController {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => void;
  retrieveResults: (req: Request, res: Response, next: NextFunction) => void;
  evictViewedResults: (req: Request, res: Response, next: NextFunction) => void;
}

const cacheController: CacheController = {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => {
    tempCache.set(res.locals.randomString, {
      metrics: res.locals.metrics,
      verbose: res.locals.verbose,
    });

    next();
  },

  retrieveResults: (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    if (tempCache.get(id)) {
      res.locals.tempCachedResults = tempCache.get(id);
    } else {
      console.error(`no data with id ${id} in cache`);
    }
    next();
  },

  evictViewedResults: (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    tempCache.delete(id);
    return next();
  },
};

export default cacheController;
