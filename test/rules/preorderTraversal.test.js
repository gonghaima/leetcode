import TreeNode from '../../src/models/treeNode';
import preorderTraversal from '../../src/rules/binaryTree/preorderTraversal';

const threeN = new TreeNode(3);
const twoN = new TreeNode(2);
twoN.left = threeN;
const rootN = new TreeNode(1);
rootN.right = twoN;

test('preorderTraversal should return expected value', () => {
  const result = preorderTraversal(rootN);
  expect(result[0]).toBe(1);
  expect(result[1]).toBe(2);
  expect(result[2]).toBe(3);
});
