import {Request, Response, NextFunction} from 'express';
import sql from '../db/db';
import CustomError from '../errors/CustomError';

interface DBController {
  retrieveResults: (req: Request, res: Response, next: NextFunction) => void;
  saveResults: (req: Request, res: Response, next: NextFunction) => void;
}

const dbController: DBController = {
  retrieveResults: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.userId;
      const results = await sql`SELECT * FROM results WHERE user_id=${userId}`;
      res.locals.results = results;
      return next();
    } catch (error) {
      const customError = new CustomError(
        'Failed to retrieve results',
        500,
        'Database query in retrieveResults failed: ',
        error
      );
      return next(customError);
    }
  },

  saveResults: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.userId;
      const results = req.body.results;
      await sql`INSERT INTO results(user_id, results) VALUES (${userId}, ${results})`;
      return next();
    } catch (error) {
      const customError = new CustomError(
        'Failed to save results to database',
        500,
        'Database query in saveResults failed',
        error
      );
      return next(customError);
    }
  },
};

export default dbController;
