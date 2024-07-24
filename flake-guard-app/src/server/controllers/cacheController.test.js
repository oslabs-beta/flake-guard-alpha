import cacheController from '../../server/controllers/cacheController';
import CustomError from '../../server/errors/CustomError';
import { setCache, getCache, deleteCache } from '../../server/tempCache';

jest.mock('../../server/tempCache');

describe('cacheController', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      params: {},
    };
    res = {
      locals: {},
    };
    next = jest.fn();
  });

  describe('cacheTempResults', () => {
    it('should cache results and call next', () => {
      res.locals.randomString = 'testString';
      res.locals.metrics = 'testMetrics';
      res.locals.verbose = 'testVerbose';

      cacheController.cacheTempResults(req, res, next);

      expect(setCache).toHaveBeenCalledWith('testString', {
        metrics: 'testMetrics',
        verbose: 'testVerbose',
      });
      expect(next).toHaveBeenCalled();
    });

    it('should call next with a CustomError on failure', () => {
      setCache.mockImplementationOnce(() => {
        throw new Error('Test error');
      });

      cacheController.cacheTempResults(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
    });
  });

  describe('retrieveResults', () => {
    it('should retrieve cached results and call next', () => {
      req.params.id = 'testId';
      getCache.mockReturnValueOnce('testResults').mockReturnValueOnce('testResults');

      cacheController.retrieveResults(req, res, next);

      expect(getCache).toHaveBeenCalledWith('testId');
      expect(res.locals.tempCachedResults).toBe('testResults');
      expect(next).toHaveBeenCalled();
    });

    it('should log an error and call next if no data is found in cache', () => {
      console.error = jest.fn();
      req.params.id = 'testId';
      getCache.mockReturnValueOnce(null);

      cacheController.retrieveResults(req, res, next);

      expect(getCache).toHaveBeenCalledWith('testId');
      expect(console.error).toHaveBeenCalledWith('no data with id testId in cache');
      expect(next).toHaveBeenCalled();
    });

    it('should call next with a CustomError on failure', () => {
      getCache.mockImplementationOnce(() => {
        throw new Error('Test error');
      });

      cacheController.retrieveResults(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
    });
  });

  describe('evictViewedResults', () => {
    it('should evict cached results and call next', () => {
      req.params.id = 'testId';

      cacheController.evictViewedResults(req, res, next);

      expect(deleteCache).toHaveBeenCalledWith('testId');
      expect(next).toHaveBeenCalled();
    });

    it('should call next with a CustomError on failure', () => {
      deleteCache.mockImplementationOnce(() => {
        throw new Error('Test error');
      });

      cacheController.evictViewedResults(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
    });
  });
});
