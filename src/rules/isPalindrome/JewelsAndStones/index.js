const numJewelsInStones = (J, S) => {
  const jewels = J.split('');
  const stones = S.split('');
  let counter = 0;
  jewels.forEach(j =>
    stones.forEach(s => {
      if (j === s) counter += 1;
      return counter;
    })
  );
  return counter;
};

module.exports = numJewelsInStones;
