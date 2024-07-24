const tempCache = new Map<string, object>();

export function setCache(key: string, value: object): void {
  tempCache.set(key, value);
}

export function getCache(key: string): object | undefined {
  return tempCache.get(key);
}

export function deleteCache(key: string): void {
  tempCache.delete(key);
}

export function clearCache(): void {
  tempCache.clear();
}

export {tempCache};
