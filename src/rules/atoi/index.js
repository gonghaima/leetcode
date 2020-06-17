export default str => {

  return Math.max(Math.min(parseInt(str, 10) || 0, 2147483647), -2147483648);
};
