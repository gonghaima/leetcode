export default n => {
  let s = 0;
  while (n > 4) s += Math.floor((n /= 5));
  return s;
};
