/************************************************************************************************
 * Runtime: 80 ms, faster than 85.37% of JavaScript online submissions for Keys and Rooms.      *
 * Memory Usage: 39.9 MB, less than 97.02% of JavaScript online submissions for Keys and Rooms. *
 ************************************************************************************************/

const canVisitAllRooms = (rooms) => {
  if (!rooms || rooms.length === 0 || (rooms.length === 1 && rooms[0].length === 0)) return true;
  if (rooms.length > 1 && rooms[0].length === 0) return false;
  // traversing each value (for unvisited), keep track of the room number as visited

  let visited = new Set();
  let next = rooms[0];
  visited.add(0);
  next.map(r => visited.add(r));
  while (next.length > 0 && visited.size <= rooms.length) {
    const nextRoom = next.pop();
    const keysInNextRoom = rooms[nextRoom];
    if (keysInNextRoom.length > 0) {
      keysInNextRoom.map(key => {
        if (!visited.has(key)) {
          next.push(key)
          visited.add(key);
        }
      })
    }
  };
  // if visited size is the same as rooms length, it is true
  return visited.size === rooms.length;
}
export default canVisitAllRooms;

