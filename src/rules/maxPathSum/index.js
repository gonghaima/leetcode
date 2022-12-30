/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/***********
 * Runtime *
 * 88 ms   *
 * Beats   *
 * 84.38%  *
 * Memory  *
 * 51.9 MB *
 * Beats   *
 * 31.86%  *
 ***********/

var maxPathSum = function(root) {
  let max = -Infinity;

	const findSums = (node) => {
		// Base case / hit a null
		if (!node) return 0;

		let left = findSums(node.left),
			right = findSums(node.right),
			allSum = left + right + node.val,
			leftNodeSum = left + node.val,
			rightNodeSum = right + node.val;

		// Max is all possible combinations
		max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);
		
		// Return the MAX path, which can be node.val, left + node.val, or right + node.val
		return Math.max(leftNodeSum, rightNodeSum, node.val);
	};

	findSums(root);

	return max;
};

export default maxPathSum;
