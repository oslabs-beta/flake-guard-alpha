import {Request, Response, NextFunction} from 'express';
import CustomError from '../errors/CustomError';

const controller = {
  // Receives and parses the results from the user via NPM package
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {runTimes, simple, verbose} = req.body;

      // Parse the simple results into an array of results objects for front-end dashboard
      const metrics = [];
      for (const key in simple) {
        const fullName = key;
        const passed = simple[key].passed;
        const failed = simple[key].failed;
        const skipped = simple[key].skipped;

        metrics.push({
          fullName: fullName,
          passed: passed,
          failed: failed,
          totalRuns: runTimes,
          skipped: skipped,
        });
      }

      res.locals.metrics = metrics;
      res.locals.verbose = verbose;

      return next();
    } catch (e) {
      const error = new CustomError(
        'A server error occurred',
        500,
        'An error occurred in the npmMetrics middleware: ',
        e instanceof Error ? e : new Error(String(e))
      );
      next(error);
    }
  },
};

export default controller;
