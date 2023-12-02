export default (s) => {
  return s
    .trim()
    .split(' ')
    .pop().length;
};
