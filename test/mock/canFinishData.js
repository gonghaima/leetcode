export const inputData = {
  case1: { numCourses: 2, prerequisites: [[1, 0]] },
  case2: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }
};

export const expected = {
  case1: true,
  case2: false
};
