import {Request, Response, NextFunction} from 'express';

const controller = {
  // Receives and parses the results from the user via NPM package
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {user, runTimes, simple, verbose} = req.body;

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

      if (user === 'temp') {
        res.locals.metrics = metrics;
        res.locals.verbose = verbose;
        res.locals.user = user;
      }

      return next();
    } catch (error) {
      console.log('ERROR parsing npm metrics', error);
    }
  },
};

export default controller;
