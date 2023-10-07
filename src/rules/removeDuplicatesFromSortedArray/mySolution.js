export default nums => {
  const result = nums.reduce(
    (i, c) => {
      if (c !== i.prevItem) {
        i.counter += 1;
        i.allUnique.push(c);
        i.prevItem = c;
        return i;
      } else {
        return i;
      }
    },
    { prevItem: null, counter: 0, allUnique: [] }
  );
    nums.splice(0)
  result.allUnique.map(n=>nums.push(n))
  return result.counter;
};
