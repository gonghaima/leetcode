/************************************************************************************************
 * Runtime: 80 ms, faster than 85.37% of JavaScript online submissions for Keys and Rooms.      *
 * Memory Usage: 40.5 MB, less than 66.67% of JavaScript online submissions for Keys and Rooms. *
 ************************************************************************************************/

const canVisitAllRooms = (rooms) => {
  const uniqueKeys = new Set([0]);
  const availableKeys = [0];

  while (availableKeys.length) {
    let currentKey = availableKeys.pop();
    rooms[currentKey].forEach(key => {
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        availableKeys.push(key);
      }
    });
  }

  return uniqueKeys.size === rooms.length;
}
export default canVisitAllRooms;

