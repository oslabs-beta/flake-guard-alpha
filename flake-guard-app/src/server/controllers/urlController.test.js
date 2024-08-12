import urlController from '../../server/controllers/urlController';
import CustomError from '../../server/errors/CustomError';

describe('urlController', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {};
    res = {
      locals: {},
    };
    next = jest.fn();
  });

  describe('generateRandomString method', () => {
    it('should generate a random string, store it in res.locals, and call next', () => {
      urlController.generateRandomString(req, res, next);
      expect(res.locals.randomString).toHaveLength(10);
      expect(next).toHaveBeenCalled();
    });
    it('should call next with a CustomError on failure', () =>{
      // Mock Math.random to throw an error
      const originalRandom = Math.random;
      Math.random = jest.fn(() => {
        throw new Error('Test error');
      });
      urlController.generateRandomString(req, res, next);
      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
      // Restore original Math.random
      Math.random = originalRandom;
    });
  });

  describe('buildCustomUrl method', () => {
    it('should generate a url and call next', () => {
      res.locals.randomString = 'abcdefghij';
      urlController.buildCustomUrl(req, res, next);
      expect(res.locals.tempUrl).toBe('https://flakeguard.com/npm/abcdefghij')
      expect(next).toHaveBeenCalled();
    });
    it('should call next with a CustomError on failure', () => {
      // cause an error
      res.locals = null; 
      urlController.buildCustomUrl(req, res, next);
      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
    });
  });
});
