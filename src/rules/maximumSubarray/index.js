export default (n, ar) => {
  let r = {};

  ar.map(c => {
    if (r[c]) {
      r[c] += 1;
    } else {
      r[c] = 1;
    }
  });

  let total = 0;

  Object.keys(r).map(c => {
    total += Math.floor(r[c] / 2);
  });

  return total;
};
