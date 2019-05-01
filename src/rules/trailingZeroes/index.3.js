export default n => {
  let finalCount = 0;

  let nn = n.toString().split("");
  while (nn[nn.length - 1] === "0") {
    nn.pop();
    finalCount += 1;
  }

  let m = n;
  let total = nn[nn.length - 1];
  m = m - 1;
  while (m > 1) {
    total *= m;
    let strT = total.toString().split("");
    while (strT[strT.length - 1] === "0") {
      strT.pop();
      finalCount += 1;
    }
    total = Number(strT[strT.length - 1]);

    m = m - 1;
  }

  return finalCount;
};
