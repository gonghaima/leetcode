import WordDictionary from '../../src/rules/wordDictionary';
import { inputData, expected } from '../data/wordDictionaryData';

test('WordDictionary should return expected result for case1', () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord('bad');
  wordDictionary.addWord('dad');
  const result1 = wordDictionary.addWord('mad');
  expect(result1).toEqual(false);

  const result2 = wordDictionary.search('pad'); // return False
  expect(result2).toEqual(false);

  const result3 = wordDictionary.search('bad'); // return True
  expect(result3).toEqual(true);

  const result4 = wordDictionary.search('.ad'); // return True
  expect(result4).toEqual(true);

  const result5 = wordDictionary.search('b..'); // return True
  expect(result5).toEqual(true);
});
