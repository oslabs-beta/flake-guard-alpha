import {Request, Response, NextFunction} from 'express';
import CustomError from '../errors/CustomError';
// import CustomError from '../errors/CustomError';
interface NPMController {
  npmMetrics: (req: Request, res: Response, next: NextFunction) => void;
}

const npmController: NPMController = {
  // Receives and parses the results from the user via NPM package
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      if (!req.body) throw new Error('No data found in req.body');
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
    } catch (error) {
      const customError = new CustomError(
        'Failed to parse NPM metrics',
        500,
        'Error in npmMetrics',
        error
      );
      return next(customError);
    }
  },
};

export default npmController;
