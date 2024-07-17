import {Request, Response, NextFunction} from 'express';
import tempCache from '../tempCache';
import CustomError from '../errors/CustomError';

interface CacheController {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => void;
  retrieveResults: (req: Request, res: Response, next: NextFunction) => void;
  evictViewedResults: (req: Request, res: Response, next: NextFunction) => void;
}

const cacheController: CacheController = {
  cacheTempResults: (req: Request, res: Response, next: NextFunction) => {
    try {
      tempCache.set(res.locals.randomString, {
        metrics: res.locals.metrics,
        verbose: res.locals.verbose,
      });
      next();
    } catch (error: unknown) {
      const customError = new CustomError(
        'Failed to cache results',
        500,
        'Error in cacheTempResults',
        error
      );
      return next(customError);
    }
  },

  retrieveResults: (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id} = req.params;
      if (tempCache.get(id)) {
        res.locals.tempCachedResults = tempCache.get(id);
      } else {
        console.error(`no data with id ${id} in cache`);
      }
      next();
    } catch (error) {
      const customError = new CustomError(
        'Failed to retrieve cached results',
        500,
        'Error in retrieveResults',
        error
      );
      return next(customError);
    }
  },

  evictViewedResults: (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id} = req.params;
      tempCache.delete(id);
      return next();
    } catch (error) {
      const customError = new CustomError(
        'Failed to evict cached results',
        500,
        'Error in evictViewedResults',
        error
      );
      return next(customError);
    }
  },
};

export default cacheController;
