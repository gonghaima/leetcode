/**
 * @param {number[]} piles
 * @return {boolean}
 */

/**
 * greedy:
 * assume: each time choosing a larger number, will lead to win
 * aliceStones  bobStones
 * for each turn, find the larger value, add to Alice or Bob.
 * In the end, aliceStones>bobStones?true:false;
 * No, actually, the best choice for each step does not always lead to best choice.
 * 
 * dp:
 * if only one item [i], alice can only take one item Alice wins
 * if two items [a,b], Alice take bigger one, Alice wins
 * 
 * if three items [1,8,2], Alice take bigger ones, or smaller ones, lose
 * if three items [1,2,2],Alice still take bigger ones in the beginning.
 * 
 * if four items [4,8,2,1], Alice has to take smaller number in the beginning
 * 
 * 
 * bfs
alice [3,7,2,3]
3 [7,2,3]
3 [3,2,7]

bob [7,2,3] [3,2,7]
7 [2,3]
2 [7,2]

3 [2,7]
7 [3,2]

alice [2,3] [7,2] [2,7] [3,2]

                               [3,7,2,3]
                    a3[7,2,3]                          a3[3,7,2]
        a3b7[2,3]        a3b3[7,2]           a3b3[7,2]      a3b2[3,7]
a5b7[3]    a6b7[2]  a10b3[2]  a5b3[7]   a10b3[2]  a5b3[7] a6b2[7]  a10b2[3]
a5b10      a6b9     a10b5     a5b10     a10b5     a5b10   a6b9     a10b5
 * 
 */

var stoneGame = function(piles) {
  return null;
};

export default stoneGame;
