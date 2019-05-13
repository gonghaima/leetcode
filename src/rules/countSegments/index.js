export default s => {
  if (!s) return 0;
  const sArr = s.split(/ +/g).filter(c => c);
  return sArr.length;
};
