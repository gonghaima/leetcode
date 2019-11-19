export default arr => {
  const map = new Map();
  const set = new Set();
  arr.forEach(val => { map.set(val, map.get(val) ? map.get(val) + 1 : 1) });
  map.forEach(val => set.add(val));
  return set.size === map.size;
};
