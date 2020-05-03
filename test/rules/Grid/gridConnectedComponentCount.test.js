import getConnectedComponentCount from "../../../src/rules/aATestUnstable/grid/connectedComponentCount";

const data = [
  [6, 11],
  [11, 7],
  [7, 6],

  [4, 0],
  [4, 8],
  [0, 8],
  [8, 4],
  [14, 0],
  [14, 13],
  [13, 0],

  [12],

  [1, 5],
  [5, 17],
  [5, 16],

  [3, 9],
  [9, 15],
  [15, 2],
  [2, 9],
  [15, 10]
];

test("connectedComponentCount path will return the number of connected compents", () => {
  const result = getConnectedComponentCount(data);
  expect(result).toEqual(5);
});
