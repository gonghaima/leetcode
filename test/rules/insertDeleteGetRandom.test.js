import insertDeleteGetRandom from '../../src/rules/insertDeleteGetRandom';

test('insertDeleteGetRandom should return correct result for case1', () => {
  const randomizedSet = new insertDeleteGetRandom();
  //randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
  expect(randomizedSet.insert(1)).toEqual(true);
  //randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
  expect(randomizedSet.remove(2)).toEqual(false);
  //randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
  expect(randomizedSet.insert(2)).toEqual(true);
  //randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
  expect([1, 2]).toContain(randomizedSet.getRandom());
  //randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
  expect(randomizedSet.remove(1)).toEqual(true);
  //randomizedSet.insert(2); // 2 was already in the set, so return false.
  expect(randomizedSet.insert(2)).toEqual(false);
  //randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
  expect(randomizedSet.getRandom()).toEqual(2);
});
