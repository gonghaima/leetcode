export default n => {
  let result = 0;
  while (n > 0) {
    result += n / 5;

    n /= 5;
  }
  return Math.floor(result);
};
