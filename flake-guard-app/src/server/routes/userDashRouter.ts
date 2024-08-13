import express from 'express';
import {Request, Response} from 'express';
import dbController from '../controllers/dbController';

const router = express.Router();

router.get(
  '/:userId',
  dbController.retrieveResults,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.results);
  }
);

router.post(
  '/:userId',
  dbController.saveResults,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.results);
  }
);

export default router;
