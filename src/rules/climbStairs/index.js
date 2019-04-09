export default n => {
  let counter = 0;

  let step1 = 2;
  let step2 = 1;
  let allSteps = 0;

  const keepCal = nm => {
    if (nm <= 0) {
      return 0;
    }
    if (nm === 1) {
      return 1;
    }
    if (nm === 2) {
      return 2;
    }
    for (let i = 2; i < nm; i++) {
      allSteps = step1 + step2;
      step2 = step1;
      step1 = allSteps;
    }

    return allSteps;
  };

  counter = keepCal(n);
  return counter;
};
