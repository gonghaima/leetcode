export default (bits) => {
  while (bits.length > 1) {
    if (bits.shift() === 1) bits.shift();
  }
  return bits.length === 1;
};
