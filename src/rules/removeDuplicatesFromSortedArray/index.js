export default nums => {
  const result = nums.reduce(
    (i, c) => {
      if (c !== i.prevItem) {
        i += c;
        return c;
      } else {
        return c;
      }
    },
    { prevItem: null, counter: 0 }
  );
  return result.counter;
};
