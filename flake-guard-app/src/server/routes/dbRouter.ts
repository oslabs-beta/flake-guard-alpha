import express from 'express';
import {Request, Response} from 'express';
import dbController from '../controllers/dbController';

const router = express.Router();

router.get(
  '/retrieveDashboard',
  dbController.retrieveDashboard,
  (req: Request, res: Response) => {
    console.log('Retrieved user dashboard', res.locals.dbResults);
    return res.status(200).json(res.locals.dbResults);
  }
);

export default router;
