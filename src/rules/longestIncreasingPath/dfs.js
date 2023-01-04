/**
 * @param {number[][]} matrix
 * @return {number}
 */

// dfs

/***********
 * Runtime *
 * 87 ms   *
 * Beats   *
 * 99.1%   *
 * Memory  *
 * 45.4 MB *
 * Beats   *
 * 98.1%   *
 ***********/

const DIRECTIONS = [[-1,0],[0,-1],[0,1],[1,0]];
var longestIncreasingPath = function(matrix) {
    const [adjacency, indegree, size] = buildGraph(matrix);

    let level = new Set();
    let count = 0;

    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0 && (adjacency[i].length > 0 || size === 1)) {
            level.add(i);
        }
    }

    while (level.size) {
        const nextLevel = new Set();

        for (const vertex of level) {
            for (const to of adjacency[vertex]) {
                nextLevel.add(to)
            }
        }

        count++;
        level = nextLevel;
    }

    return count;
};

var buildGraph = function(matrix) {
	const rows = matrix.length;
	const columns = matrix[0].length;
	const size = rows * columns;

	const getPosition = function(i, j) {
        if (matrix[i] === undefined) return null;
        if (matrix[i][j] === undefined) return null;
        return i * columns + j;
    }

    const adjacency = [];
    const indegree = [];

    for (let i = 0; i < size; i++) {
        adjacency[i] = [];
        indegree[i] = 0;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const from = getPosition(i, j);
            for (const [di, dy] of DIRECTIONS) {
                const to = getPosition(i + di, j + dy);
                if (to !== null && matrix[i][j] < matrix[i + di][j + dy]) {
                    adjacency[from].push(to);
                    indegree[to]++;	
                }
            }
        }
    }

    return [adjacency, indegree, size];
}
export default longestIncreasingPath;
