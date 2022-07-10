/**
 * @param {string} dominoesturn
 * @return {string}
 */

/*************
 * Thoughts:
 * O(n) , for each char,
 * if L or R, keep it as it is, keep next interation*
 * if ".", check left and right char, hash for four possible combinations
 *    LL LR RL RR
 *************/

var pushDominoes = function(dominoes) {
  let result = '';
  const dominoesChars = dominoes.split('');
  for (let i = 0; i < dominoesChars.length; i++) {
    const currentChar = dominoesChars[i];
    const prev = i - 1 >= 0 ? dominoesChars[i - 1] : null;
    const next =
      i + 1 <= dominoesChars.length - 1 ? dominoesChars[i + 1] : null;

    if (currentChar === 'L' || currentChar === 'R') {
      result += currentChar;
      continue;
    }

    // R.L , keep it as .
    if (prev && next && prev === 'R' && next === 'L') {
      result += '.';
      continue;
    }

    // L.R , keep it as .
    if (prev && next && prev === 'L' && next === 'R') {
      result += '.';
      continue;
    }

    // ... , keep it as .
    if (prev && next && prev === '.' && next === '.') {
      result += '.';
      continue;
    }

    if (prev && prev === 'R') {
      result += 'R';
      continue;
    }

    if (next && next === 'L') {
      result += 'L';
      continue;
    }

    result += currentChar;
  }
  return result;
};

export default pushDominoes;
