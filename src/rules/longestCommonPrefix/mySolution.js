export default strs => {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  const first = strs[0].split('') || 0;

  let commonPrefix = true;
  let prefixIndex = 0;
  for (let i = 1; i < first.length + 1 && commonPrefix === true; i++) {
    [...strs].reduce((a, c) => {
      if (a === '') a = c;
      if (a.substring(0, i) !== c.substring(0, i)) {
        commonPrefix = false;
        prefixIndex = i;
      }
      return a;
    }, '');
    prefixIndex = i;
  }
  if (commonPrefix === true) return strs[0].substring(0, prefixIndex);
  if (prefixIndex === 1 && commonPrefix === false) return '';
  return strs[0].substring(0, prefixIndex - 1);
};
