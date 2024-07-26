export const inputData = {
  case1: '/home/',
  case2: '/home//foo/',
  case3: '/home/user/Documents/../Pictures',
  case4: '/../',
  case5: '/.../a/../b/c/../d/./',
};

export const expected = {
  case1: '/home',
  case2: '/home/foo',
  case3: '/home/user/Pictures',
  case4: '/',
  case5: '/.../b/d',
};
