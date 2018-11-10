import numJewelsInStones from '../../src/rules/JewelsAndStones';

test('numJewelsInStones should calculate the number of the jewels out of stones', () => {
  const result = numJewelsInStones('aA', 'aAAbbbb');
  expect(result).toBe(3);
});
