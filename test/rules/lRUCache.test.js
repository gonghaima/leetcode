// import LRUCache from '../../src/rules/LRUCache';
import { LRUCache } from '../../src/rules/lRUCache';
// src/rules/lRUCache/index.js
// import { inputData, expected } from '../data/LRUCacheData';

test('LRUCache should return expected result for case1', () => {
  const lRUCache = new LRUCache(2);
  // lRUCache.put(1, 1); // cache is {1=1}
  // lRUCache.put(2, 2); // cache is {1=1, 2=2}
  // lRUCache.get(1); // return 1
  // lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  // lRUCache.get(2); // returns -1 (not found)
  // lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  // lRUCache.get(1); // return -1 (not found)
  // lRUCache.get(3); // return 3
  // lRUCache.get(4); // return 4

  // lRUCache.put(1, 1); // cache is {1=1}
  expect(lRUCache.put(1, 1)).toEqual(null);

  // lRUCache.put(2, 2); // cache is {1=1, 2=2}
  expect(lRUCache.put(2, 2)).toEqual(null);

  // lRUCache.get(1); // return 1
  expect(lRUCache.get(1)).toEqual(1);


  // lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  expect(lRUCache.put(3, 3)).toEqual(null);


  // lRUCache.get(2); // returns -1 (not found)
  expect(lRUCache.get(2)).toEqual(-1);


  // lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  expect(lRUCache.put(4, 4)).toEqual(null);


  // lRUCache.get(1); // return -1 (not found)
  expect(lRUCache.get(1)).toEqual(-1);


  // lRUCache.get(3); // return 3
  expect(lRUCache.get(3)).toEqual(3);


  // lRUCache.get(4); // return 4
  expect(lRUCache.get(4)).toEqual(4);



  expect(result).toEqual(expected.case1);
});
