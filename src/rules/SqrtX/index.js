export default x => {
  let result;
  for (let i = 0; i <= x; i++) {
    const val = i * i;
    if (val > x) {
      result = i - 1;
      break;
    } else if (val === x) {
      result = i;
      break;
    }
  }
  return result;
};
``;
