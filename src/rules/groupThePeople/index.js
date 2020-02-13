export default groupSizes => {
  const container = {};
  let result = [];
  groupSizes.map((val, idx) => {
    if (container[val]) {
      container[val].push(idx);
      if (val === container[val].length) {
        result.push(container[val]);
        delete container[val];
      }
    } else {
      container[val] = [];
      container[val].push(idx);
      if (val === container[val].length) {
        result.push(container[val]);
        delete container[val];
      }
    }
  });
  return result;
};
