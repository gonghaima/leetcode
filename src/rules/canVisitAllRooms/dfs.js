/************************************************************************************************
 * Runtime: 80 ms, faster than 85.37% of JavaScript online submissions for Keys and Rooms.      *
 * Memory Usage: 40.5 MB, less than 66.67% of JavaScript online submissions for Keys and Rooms. *
 ************************************************************************************************/

const canVisitAllRooms = (rooms) => {
  if (!rooms || rooms.length === 0 || (rooms.length === 1 && rooms[0].length === 0)) return true;
  if (rooms.length > 1 && rooms[0].length === 0) return false;
  // traversing each value (for unvisited), keep track of the room number as visited

  let visited = new Set();
  //get initial key set
  let next = rooms[0];
  visited.add(0);

  const dfs = (rm) => {
    if (visited.has(rm)) return;
    visited.add(rm);
    if (rooms[rm] && rooms[rm].length > 0) {
      rooms[rm].map(k => {
        if (!visited.has(k)) visited.add(k) && rooms[k].map(key => dfs(key));
      })
    }
  }

  //dfs to get all rooms
  next.map(key => {
    if (!visited.has(key)) visited.add(key) && rooms[key].map(k => dfs(k))
  });

  // if visited size is the same as rooms length, it is true
  return visited.size === rooms.length;
}
export default canVisitAllRooms;

