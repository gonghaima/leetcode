const valLookup = ["{}", "[]", "()"];

export const isValid = s => {
  let valid = true;
  let prevLength = s.length;
  while (s.length > 2 && valid) {
    s = s.replace(/\{\}|\[\]|\(\)/g, "");
    if (prevLength === s.length) {
      valid = false;
      break;
    } else {
      prevLength = s.length;
    }
  }
  if (s.length === 1) valid = false;
  if (s.length === 2 && !valLookup.includes(s)) valid = false;
  return valid;
};
