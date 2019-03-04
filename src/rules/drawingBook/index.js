export default (n, p) => {
  const n1 = countHelper(n);
  const p1 = countHelper(p);

  const diff = n1 - p1;
  const result = diff > p1 ? p1 : diff;
  return result;
};

export const countHelper = n => {
  if (n === 0 || n === 1) return 0;
  const r1 = n / 2;
  const r2 = n % 2;
  if (r2 === 0) return r1;
  if (r2 === 1) return Math.floor(r1);
};
