export default (states, days) => {
  let result = states;
  for (let i = 0; i < days; i++) {
    result = result.map((currentVal, idx) => {
      if (idx === 0) {
        if (result[1] === 0) return 0;
        return 1;
      }
      if (idx === result.length - 1) {
        if (result[idx - 1] === 0) return 0;
        return 1;
      }
      if (result[idx - 1] === result[idx + 1]) {
        return 0;
      } else {
        return 1;
      }
    });
  };
  return result;
};
