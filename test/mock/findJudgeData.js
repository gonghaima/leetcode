export default {
  case1: { input: { N: 2, trust: [[1, 2]] }, expected: 2 },
  case2: { input: { N: 3, trust: [[1, 3], [2, 3]] }, expected: 3 },
  case3: { input: { N: 3, trust: [[1, 3], [2, 3], [3, 1]] }, expected: -1 },
  case4: { input: { N: 3, trust: [[1, 2], [2, 3]] }, expected: -1 },
  case5: { input: { N: 4, trust: [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]] }, expected: 3 },
  case6: { input: { N: 1, trust: [] }, expected: 1 }
}