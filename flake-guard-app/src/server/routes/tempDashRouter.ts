import express from 'express';
import {Request, Response} from 'express';
import cacheController from '../controllers/cacheController';

const router = express.Router();

router.get(
  '/:id',
  cacheController.retrieveResults,
  cacheController.parseResults,
  (req: Request, res: Response) => {
    console.log(
      'tempCached results after parsing',
      res.locals.cacheParsedResults
    );
    // console.log('simple result object', tempCache[req.params.id]);
    return res.status(200).json(res.locals.cacheParsedResults);
  }
);

router.delete(
  '/:id',
  cacheController.evictViewedResults,
  (req: Request, res: Response) => {
    return res.status(200).send();
  }
);

export default router;
