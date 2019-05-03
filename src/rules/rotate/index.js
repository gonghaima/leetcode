export default (nums, k) => {
  const s = nums.splice(0, nums.length - k);
  const r = nums.concat(s);
  return r;
};
