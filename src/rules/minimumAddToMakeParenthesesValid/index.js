const removeApprenthesis = inputString => {
  if (inputString.indexOf('()') >= 0) {
    return removeApprenthesis(inputString.slice().replace('()', ''));
  }
  return inputString.length;
};
export default str => {
  const NumberOfParenthesesRequried = removeApprenthesis(str);
  return NumberOfParenthesesRequried;
};
