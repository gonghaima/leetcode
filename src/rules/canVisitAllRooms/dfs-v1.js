
/************************************************************************************************
 * Runtime: 84 ms, faster than 69.38% of JavaScript online submissions for Keys and Rooms.      *
 * Memory Usage: 40.7 MB, less than 53.66% of JavaScript online submissions for Keys and Rooms. *
 ************************************************************************************************/

const canVisitAllRooms = (rooms) => {
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

