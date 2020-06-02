/************************************************************
 * list all possible combiniation, loop through & get total *
 ************************************************************/

export default s => {
  let total = 0;
  let remaining = s;
  const splitPair = { "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900 };
  const standardPair = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };

  Object.entries(splitPair).map(([key, val]) => {
    const tmp = remaining.split(key);
    total += (tmp.length - 1) * val;
    remaining = tmp.join("");
  });
  Object.entries(standardPair).map(([key, val]) => {
    const tmp = remaining.split(key);
    total += (tmp.length - 1) * val;
    remaining = tmp.join("");
  });
  return total;
};
