import {Request, Response, NextFunction} from 'express';
import tempCache from '../tempCache';

interface CacheController {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => void;
  retrieveResults: (req: Request, res: Response, next: NextFunction) => void;
  parseResults: (req: Request, res: Response, next: NextFunction) => void;
  evictViewedResults: (req: Request, res: Response, next: NextFunction) => void;
}

const cacheController: CacheController = {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.user === 'temp') {
      tempCache.set(res.locals.randomString, res.locals.metrics);
    }
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

  parseResults: (req: Request, res: Response, next: NextFunction) => {
    const cache = res.locals.tempCachedResults;
    // add temporary data placeholder for "skipped" key
    for (let i = 0; i < cache.length; i += 1) {
      cache[i].skipped = 0;
    }
    res.locals.cacheParsedResults = cache;
    return next();
  },

  evictViewedResults: (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    console.log('before', tempCache);
    console.log('id', id);
    tempCache.delete(id);
    console.log('after', tempCache);
    return next();
  },
};

export default cacheController;
