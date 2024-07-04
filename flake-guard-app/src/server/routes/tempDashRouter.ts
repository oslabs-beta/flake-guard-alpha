import express from 'express';
import {Request, Response} from 'express';
import cacheController from '../controllers/cacheController';

const router = express.Router();

router.get(
  '/:id',
  cacheController.retrieveResults,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.tempCachedResults.metrics);
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
