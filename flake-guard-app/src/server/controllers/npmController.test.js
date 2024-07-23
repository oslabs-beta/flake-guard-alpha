import npmController from '../../server/controllers/npmController';
import CustomError from '../../server/errors/CustomError';

describe('npmController', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      body: {
        runTimes: 5,
        simple: {
          'testPackage1': { passed: 10, failed: 2, skipped: 3 },
          'testPackage2': { passed: 15, failed: 1, skipped: 0 },
        },
        verbose: true,
      },
    };
    res = {
      locals: {},
    };
    next = jest.fn();
  });

  describe('npmMetrics', () => {
    it('should parse metrics and call next', async () => {
      await npmController.npmMetrics(req, res, next);

      expect(res.locals.metrics).toEqual([
        {
          fullName: 'testPackage1',
          passed: 10,
          failed: 2,
          totalRuns: 5,
          skipped: 3,
        },
        {
          fullName: 'testPackage2',
          passed: 15,
          failed: 1,
          totalRuns: 5,
          skipped: 0,
        },
      ]);
      expect(res.locals.verbose).toBe(true);
      expect(next).toHaveBeenCalled();
    });

    it('should call next with a CustomError on failure', async () => {
      req.body = null;

      await npmController.npmMetrics(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
    });
  });
});
