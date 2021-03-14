export const inputData = {
  case1: { numCourses: 2, prerequisites: [[1, 0]] },
  case2: { numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] },
  case3: { numCourses: 1, prerequisites: [] }
};

export const expected = {
  case1: [0, 1],
  case2: [0, 2, 1, 3],
  case3: [0]
};
