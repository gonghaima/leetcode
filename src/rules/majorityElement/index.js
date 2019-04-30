export default nums => {
  const stats = nums.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const result = Object.entries(stats).reduce((acc, val) => {
    if (!acc) return val;
    return acc[1] > val[1] ? acc : val;
  });
  return Number(result[0]);
};
