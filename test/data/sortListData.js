function createNode(val) {
  return {
    val,
    next: null,
  };
}

class NodeList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(val) {
    this.length++;
    let node = createNode(val); // or use new Node(val);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return node;
    }
    if(!this.head){
      this.head=node;
    }

    this.head = this.tail = node;
    return node;
  }
}

//case1
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
const nodeList1 = new NodeList();
nodeList1.insert(4);
nodeList1.insert(2);
nodeList1.insert(1);
nodeList1.insert(3);

const nodeList1_expected = new NodeList();
nodeList1_expected.insert(1);
nodeList1_expected.insert(2);
nodeList1_expected.insert(3);
nodeList1_expected.insert(4);


//case2
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
const nodeList2 = new NodeList();
nodeList1.insert(-1);
nodeList1.insert(5);
nodeList1.insert(3);
nodeList1.insert(4);
nodeList1.insert(0);

const nodeList2_expected = new NodeList();
nodeList2_expected.insert(-1);
nodeList2_expected.insert(0);
nodeList2_expected.insert(3);
nodeList2_expected.insert(4);
nodeList2_expected.insert(5);

//case3
// Input: head = []
// Output: []


export const inputData = {
  case1: nodeList1.head,
  case2: nodeList2.head,
};

export const expected = {
  case1: nodeList1_expected.head,
  case2: nodeList2_expected.head,
};
