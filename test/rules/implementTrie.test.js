import Trie from '../../src/rules/implementTrie';
import implementTrie from '../../src/rules/implementTrie';
import { inputData, expected } from '../data/implementTrieData';

test('implementTrie should return correct result for case1', () => {
  const size = inputData.case1[0].length;

  let trie;

  for (let i = 0; i < size; i++) {
    if (inputData.case1[0][i] === 'Trie') {
      trie = new Trie();
    }
    if (inputData.case1[0][i] === 'insert') {
      const res = trie.insert(inputData.case1[1][i]);
      expect(res).toEqual(expected.case1[i]);
    }
    if (inputData.case1[0][i] === 'search') {
      const res = trie.search(inputData.case1[1][i]);
      expect(res).toEqual(expected.case1[i]);
    }
    if (inputData.case1[0][i] === 'startsWith') {
      res = trie.startsWith(inputData.case1[1][i]);
      expect(res).toEqual(expected.case1[i]);
    }
  }
});
