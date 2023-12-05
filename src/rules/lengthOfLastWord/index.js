export default (s) => {
  let cnt = 0;

  for (const i = s.length - 1; i >= 0; i--) {
    if (s[i] == ' ') {
      if (cnt > 0) {
        return cnt;
      }
      continue;
    }

    cnt += 1;
  }
  return cnt;
};
