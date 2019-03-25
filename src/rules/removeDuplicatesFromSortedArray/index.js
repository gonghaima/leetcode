export default nums => {
  const result = nums.reduce(
    (i, c) => {
      if (c !== i.prevItem) {
        i.counter += 1;
        i.prevItem = c;
        return i;
      } else {
        return i;
      }
    },
    { prevItem: null, counter: 0 }
  );
  return result.counter;
};
