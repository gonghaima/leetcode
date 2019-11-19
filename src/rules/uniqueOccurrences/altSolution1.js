export default arr => {
  const result = {};
  for (const x of arr) {
    if (x in result) {
      result[x]++;
    } else {
      result[x] = 1;
    }
  }
  const all = Object.values(result);
  return new Set(all).size === Object.keys(result).length;
};
