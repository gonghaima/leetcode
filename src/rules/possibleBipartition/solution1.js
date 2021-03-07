
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */

/******************************************************************************************************
 * Runtime: 128 ms, faster than 90.48% of JavaScript online submissions for Possible Bipartition.     *
 * Memory Usage: 46.1 MB, less than 98.81% of JavaScript online submissions for Possible Bipartition. *
 ******************************************************************************************************/

var possibleBipartition = function (N, dislikes) {
  const map = new Uint16Array(N + 1).fill(2047);
  let counter = 0;
  const len = dislikes.length;
  for (let i = 0; i < len; i++) {
    const A = map[dislikes[i][0]], B = map[dislikes[i][1]];
    const AP = A + (A % 2 ? -1 : 1), BP = B + (B % 2 ? -1 : 1);
    if (A === 2047) {
      if (B === 2047) {
        map[dislikes[i][0]] = counter++;
        map[dislikes[i][1]] = counter++;
      } else {
        map[dislikes[i][0]] = BP;
      }
    } else if (B === 2047) {
      map[dislikes[i][1]] = AP;
    } else {
      if (A === B) return false;
      if (A === BP) continue;
      for (let j = 1; j <= N; j++) {
        map[j] === B ? map[j] = AP :
          map[j] === BP ? map[j] = A :
            null;
      }
    }
  }
  return true;
};

export default possibleBipartition;


// https://leetcode.com/problems/possible-bipartition/discuss/655384/Javascript-Straight-Thinking-(100ms)

/**
 * My idea is give every person a group number, where follow these step:

Prepare an array map for recording everyone's group number. Since 1 <= N<= 2000, I used an Uint16Array and initialized with a greater number which never be used. Also prepare a group number counter from 0.

For all dislikes pair (i, j)

If both i & j are UNGROUPED
  Give them a new paired group number and rise the counter.
  ex: Got first dislikes pair (1, 2), map[1] = 0 (means Group 0), map[2] = 1 (means Group 1), and counter goes to 2.
If i or j is GROUPED
  Give another one a paired group number.
  ex: Next dislikes pair is (1,3), since map[1] already assigned as Group 0, so assign map[3] as a paired group, Group 1.
If both i & j are GROUPED
  We have 3 situations.
  (i) map[i] === map[j]
    Unacceptable. Return false.
    ex: Following next pair as (2, 3). Since both of them are Group 1, return false.
  (ii) They are alerady a pair
    Nothing to do. Continue.
  (iii) The others
    The concept is combining two group pairs together. Move whole group pair to the the other's opposite.
    ex:
    Paired Group A { Group 0 : 1, 2 / Group 1 : 3, 4 } with Paired Group B { Group 4 : 11, 12 / Group 5 : 13, 14}
    Now we got a dislikes pair (1, 11), so Group 4's members will join Group 1 and Group 5 goes to Group 0.

After passing all tests, Return true.

 */