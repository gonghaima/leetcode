/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Set();

  const dfs = (rm) => {
    if (visited.has(rm)) return;
    visited.add(rm) && rooms[rm].map(k => dfs(k))
  }

  //dfs to get all rooms
  dfs(0);

  // if visited size is the same as rooms length, it is true
  return visited.size === rooms.length;
}

export default canVisitAllRooms;