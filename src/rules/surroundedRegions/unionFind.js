export default (board) => {
  //4 directions
  const DIRS = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  if (board === null || board.length === 0) return;

  let rows = board.length;
  let cols = board[0].length;

  // union find util
  const UnionFind = function (board) {
    let parent = {};

    // initialize parents with "O" value
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        if (board[x][y] === 'O') {
          let id = `${x}_${y}`;
          parent[id] = id;
        }
      }
    }
    parent['border'] = 'border';

    this.find = (x) => {
      if (x === parent[x]) return x;
      parent[x] = this.find(parent[x]);
      return parent[x];
    }

    this.union = (x, y) => {
      let rootX = this.find(x);
      let rootY = this.find(y);
      if (rootX !== rootY) {
        parent[rootX] = rootY;
      }
    }
  };


  let uf = new UnionFind(board);
  let dummyBorder = 'border';

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      // start logic if it is 'O'
      if (board[x][y] === 'O') {
        let id = `${x}_${y}`;
        // if not surrounded by X, union it with dummy 'border'
        if (x === 0 || x === rows - 1 || y === 0 || y === cols - 1) {
          uf.union(dummyBorder, id);
        }
        // loop all neighbour items
        for (let dir of DIRS) {
          let nx = x + dir[0];
          let ny = y + dir[1];
          // if the neibour is also 'O', union it with current node
          if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && board[nx][ny] === 'O') {
            let nId = `${nx}_${ny}`;
            uf.union(id, nId);
          }
        }
      }
    }
  };
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      // update the board, change 'O' to 'X' where it's parent is not dummyBorder
      if (board[x][y] === 'O' && uf.find(`${x}_${y}`) !== uf.find(dummyBorder)) {
        board[x][y] = 'X';
      }
    }
  };
  return board;
};
