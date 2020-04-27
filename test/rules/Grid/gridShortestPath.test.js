import getShortPathSteps from "../../../src/rules/aATestUnstable/grid/shortestPath";


const rows = 5
const cols = 7

let data = Array(rows).fill(0).map(x => Array(cols).fill('.'));
const block = [
  [0, 3],
  [1, 1],
  [1, 5],
  [2, 1],
  [3, 2],
  [3, 3],
  [4, 0],
  [4, 2],
  [4, 5]
];
block.map((b) => {
  const [r, c] = b;
  data[r][c] = "#";
});
data[0][0] = "S";
data[4][3] = "E";



// const data1 = [];
// const a = [1, 2, 3, 4, 5, 6];
// const b = [11, 12, 13, 14, 15, 16];
// data1.push(a);
// data1.push(b);
// data1[0][0] = 999;

test("shortest path will return the smallest steps from S to E", () => {
  const result = getShortPathSteps(data);
  expect(result).toEqual(10);
});
