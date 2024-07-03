import express from 'express';
import npmController from '../controllers/npmController';
import urlController from '../controllers/urlController';
import cacheController from '../controllers/cacheController';
import {Request, Response} from 'express';

const router = express.Router();

router.post(
  '/',
  npmController.npmMetrics,
  urlController.generateRandomString,
  cacheController.cacheTempResults,
  urlController.buildCustomUrl,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.tempUrl);
  }
);

export default router;
