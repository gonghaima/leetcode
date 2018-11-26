import TreeNode from '../../../src/models/treeNode';
//case 1
let four1 = new TreeNode(7);
let four2 = new TreeNode(2);
let four3 = new TreeNode(1);

let three1 = new TreeNode(11);
let three2 = new TreeNode(13);
let three3 = new TreeNode(4);
three1.left = four1;
three1.right = four2;

let two1 = new TreeNode(4);
let two2 = new TreeNode(8);
two1.left = three1;
two2.left = three2;
two2.right = three3;

let oneA = new TreeNode(5);
oneA.left = two1;
oneA.right = two2;

//case 2
let four1B = new TreeNode(7);
let four2B = new TreeNode(3);
let four3B = new TreeNode(1);

let three1B = new TreeNode(11);
let three2B = new TreeNode(13);
let three3B = new TreeNode(4);
three1B.left = four1B;
three1B.right = four2B;

let two1B = new TreeNode(4);
let two2B = new TreeNode(8);
two1B.left = three1B;
two2B.left = three2B;
two2B.right = three3B;

let oneB = new TreeNode(5);
oneB.left = two1B;
oneB.right = two2B;

//case 3
let two1C = new TreeNode(2);

let oneC = new TreeNode(1);
oneC.left = two1C;

//case 4
let two1D = new TreeNode(-3);

let oneD = new TreeNode(-2);
oneD.right = two1D;

//case 5
let two1E = new TreeNode(1);
let two2E = new TreeNode(1);

let oneE = new TreeNode(0);
oneE.left = two1E;
oneE.right = two2E;

//case 6
let four1F = new TreeNode(-1);

let three1F = new TreeNode(1);
let three2F = new TreeNode(3);
let three3F = new TreeNode(-2);
three1F.left = four1F;

let two1F = new TreeNode(-2);
let two2F = new TreeNode(-3);
two1F.left = three1F;
two1F.right = three2F;
two2F.left = three3F;

let oneF = new TreeNode(1);
oneF.left = two1F;
oneF.right = two2F;

//case 7
let three1G = new TreeNode(0);
let three2G = new TreeNode(6);

let two1G = new TreeNode(6);
two1G.left = three1G;
two1G.right = three2G;

let oneG = new TreeNode(-2);
oneG.left = two1G;

export const inputData = {
  case1: { root: oneA, sum: 22 },
  case2: { root: oneB, sum: 22 },
  case3: { root: oneC, sum: 1 },
  case4: { root: oneD, sum: -5 },
  case5: { root: oneE, sum: 1 },
  case6: { root: oneF, sum: -1 },
  case7: { root: oneG, sum: 4 }
};

export const expected = {
  case1: true,
  case2: false,
  case3: false,
  case4: true,
  case5: true,
  case6: true,
  case7: true
};
