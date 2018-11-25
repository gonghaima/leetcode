export default (pushed, popped) => {
  let valid = true;
  let arrPushed = [].concat(pushed);
  let arrPoped = [].concat(popped);

  //if length does not match, return false directly
  if (arrPushed.length !== arrPoped.length) return false;

  let state = [];

  let keepLooping = true;

  while (arrPushed.length > 0) {
    const elePush = arrPushed.shift();

    const elePop = arrPoped[0];

    if (elePush === elePop) {
      // if match, remove first value in popped
      arrPoped.shift();

      // keep checking the rest of state
      while (keepLooping && state.length > 0) {
        if (state[state.length - 1] === arrPoped[0]) {
          //if state value equal to popped value, remove value out of state, remove value out of popped
          state.pop();
          arrPoped.shift();
        } else if (arrPushed[0] === arrPoped[0]) {
          // if pushed value is equal to popped value, remove value out of pushed, remove value out of popped
          arrPushed.shift();
          arrPoped.shift();
        } else if (arrPushed[0] !== arrPoped[0]) {
          // if pushed value doesn't match popped value

          // and if no more value in pushed, set valid to false and return
          if (arrPushed.length === 0) {
            valid = false;
            arrPushed = [];
            break;
          } else {
            // otherwise, put pushed value into state, carry on the rest of the process
            state.push(arrPushed.shift());
          }
        }
      }
    } else {
      state.push(elePush);
    }
  }
  return valid;
};
