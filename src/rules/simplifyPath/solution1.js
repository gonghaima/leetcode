export default nums => {
  return nums.reduce((i, c) => i ^ c, 0);
};
