import {Request, Response, NextFunction} from 'express';
import sql from '../db/db.js';

interface DBController {
  retrieveDashboard: (req: Request, res: Response, next: NextFunction) => void;
}

const dbController: DBController = {
  retrieveDashboard: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // userID = req.body;
      // const results = await sql`SELECT "table" WHERE id=${userID}`;
      // res.locals.dbResults = results;
      return next();
    } catch (error) {
      console.log('ERROR', error);
    }
  },
};

export default dbController;
