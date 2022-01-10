/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
  /**
   * change current array with only remainers
   * [5,1,2,4,3]
   * to
   * [2,1,2,1,0]
   *
   * construct a map containing key (0, 1, 2) value is counts, in this case
   * {0:1, 1:2, 2:2}
   *
   * keep track of removedTotal, start with 0, only keeps remainer value, instead of actual value
   * for each turn, avoid the option of 3 - removedTotal, then try the dp of the other two options.
   *
   * whoever has no other options but only choose the option of 3 - removedTotal, Alice/Bob lose the game.
   * if no options left, but removedTotal is not 0, Alice loose the game
   */
  return null;
};

export default stoneGameIX;
