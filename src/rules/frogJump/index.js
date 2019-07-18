export default stones => {
  let canC = true;
  let currentCapacity = 1;
  for (let i = 0; i < stones.length && canC; i++) {
    const requiredCapacity = stones[i + 1] - stones[i];
    const l = currentCapacity - 1 < 0 ? 0 : currentCapacity - 1;
    const c = currentCapacity;
    const h = currentCapacity + 1;
    if (
      requiredCapacity === l ||
      requiredCapacity === c ||
      requiredCapacity === h
    ) {
      currentCapacity = requiredCapacity;
    } else {
      canC = false;
    }
  }
  return canC;

  // declare flags - complete(false)  - options-array of index []   -end(boolean)

  //
};
