import { setCache, getCache, deleteCache, clearCache, tempCache } from '../../server/tempCache';

describe('tempCache module', () => {
  afterEach(() => {
    clearCache();
  });

  describe('setCache', () => {
    it('should set a value in the cache', () => {
      setCache('testKey', { data: 'testData' });
      expect(tempCache.get('testKey')).toEqual({ data: 'testData' });
    });
  });

  describe('getCache', () => {
    it('should retrieve a value from the cache', () => {
      tempCache.set('testKey', { data: 'testData' });
      expect(getCache('testKey')).toEqual({ data: 'testData' });
    });

    it('should return undefined if the key does not exist', () => {
      expect(getCache('nonExistentKey')).toBeUndefined();
    });
  });

  describe('deleteCache', () => {
    it('should delete a value from the cache', () => {
      tempCache.set('testKey', { data: 'testData' });
      deleteCache('testKey');
      expect(tempCache.has('testKey')).toBe(false);
    });
  });

  describe('clearCache', () => {
    it('should clear the cache', () => {
      tempCache.set('testKey1', { data: 'testData1' });
      tempCache.set('testKey2', { data: 'testData2' });
      clearCache();
      expect(tempCache.size).toBe(0);
    });
  });
});
