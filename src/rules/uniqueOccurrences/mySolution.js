export default arr => {
  /*********************************************************
   * group each item as object literal ,   value:occurance *
   *********************************************************/
  let result = {};
  [...arr].map(d => {
    const k = d.toString();
    if (!result[k]) {
      result[k] = 1;
    } else {
      result[k] += 1;
    }
  });

  /********************************************************************
   * iterate through each occurance, if find dupolicate, return false *
   ********************************************************************/
  let compareArr = [];
  for (const i in result) {
    const v = result[i];
    if (!compareArr.includes(v)) {
      compareArr.push(v)
    } else {
      return false
    }
  }
  return true;
};
