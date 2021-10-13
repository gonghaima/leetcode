export const inputData = {
  case1: { numCourses: 2, prerequisites: [[1, 0]] },
  case2: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] },
  case3: { numCourses: 3, prerequisites: [[1, 0], [1, 2], [0, 1]] },
  case4: { numCourses: 4, prerequisites: [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]] },
};

export const expected = {
  case1: true,
  case2: false,
  case3: false,
  case4: false,
};
