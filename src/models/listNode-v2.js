class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Display the linked list
  printList() {
    if (!this.head) {
      console.log('The list is empty.');
      return;
    }

    let current = this.head;
    let listvals = '';
    const visitedNodes = new Set();

    while (current) {
      if (visitedNodes.has(current)) {
        listvals += `(cycle to ${current.val})`;
        break;
      }
      listvals += `${current.val} -> `;
      visitedNodes.add(current);
      current = current.next;
    }

    console.log(listvals + 'null');
  }

  // Create a cycle in the linked list by linking the last node to a node at a specific index
  createCycle(pos) {
    if (pos < 0 || pos >= this.size) {
      console.error('Position out of bounds.');
      return;
    }

    let current = this.head;
    let targetNode = null;
    let currentIndex = 0;

    // Find the node at the given position
    while (current) {
      if (currentIndex === pos) {
        targetNode = current;
        break;
      }
      current = current.next;
      currentIndex++;
    }

    // Traverse to the end of the list and link the last node to the target node
    current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = targetNode;
  }
}

// Utility function to create a linked list and create a cycle
export const createLinkedListWithCycle = (vals, pos) => {
  const linkedList = new LinkedList();

  vals.forEach((val) => linkedList.add(val));

  if (pos !== -1) {
    linkedList.createCycle(pos);
  }

  return linkedList;
};

// Usage example:
const head = [3, 2, 0, -4];
const pos = 1;
const linkedList = createLinkedListWithCycle(head, pos);

// linkedList.printList(); // Output: 3 -> 2 -> 0 -> -4 -> (cycle to 2)
