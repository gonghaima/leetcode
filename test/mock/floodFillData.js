export const inputData = {
  case1:
  {
    image: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]],
    sr: 1, sc: 1, newColor: 2
  },
  case2:
  {
    image: [[0, 0, 0], [0, 1, 0]],
    sr: 1, sc: 1, newColor: 2
  },
  case3:
  {
    image: [[0, 0, 0], [0, 1, 1]],
    sr: 1, sc: 1, newColor: 1
  }
};

export const expected = {
  case1: [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1]],
  case2: [[0, 0, 0], [0, 2, 0]],
  case3: [[0, 0, 0], [0, 1, 1]],
};