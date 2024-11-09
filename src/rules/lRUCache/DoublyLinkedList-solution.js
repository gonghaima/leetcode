var Node = function(key, value) {
  this.key = key;
  this.val = value;
  this.prev = this.next = null;
}
/**
* DoublyLinkedList Class
* @constructor initilize head & tail
* @action insertHead
* @action removeNode
* @action moveToHead
* @action removeTail
*/
var DoublyLinkedList = function() {
  this.head = new Node;
  this.tail = new Node;
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

/**
* Insert a new node right after head
* @param {Node} node
*/
DoublyLinkedList.prototype.insertHead = function(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
}

/**
* Remove a node from the linked list
* @param {Node} node
*/
DoublyLinkedList.prototype.removeNode = function(node) {
  // console.log("trying to remove node:", node.key)
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
}

/**
* Move a node to the head
* @param {Node} node
*/
DoublyLinkedList.prototype.moveToHead = function(node){
  this.removeNode(node);
  this.insertHead(node);
}

/**
* Remove the tail element and return its key
* @return {String}
*/
DoublyLinkedList.prototype.removeTail = function() {
  let tail = this.tail.prev;
  this.removeNode(tail);
  return tail.key;
}

/**
* @param {number} capacity
*/
export var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.currentSize = 0;
  this.hash = new Map();
  this.dll = new DoublyLinkedList();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  let node = this.hash.get(key);
  if (!node) return -1;
  this.dll.moveToHead(node);
  return node.val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let node = this.hash.get(key);
  if (node==null) { // new node
      let newNode = new Node(key, value);
      this.hash.set(key, newNode);
      this.dll.insertHead(newNode);
      this.currentSize++;
      if (this.currentSize > this.capacity) {
          let tailKey = this.dll.removeTail();
          this.hash.delete(tailKey);
          this.currentSize--;
      }
  } else { // existed node, update its value and move to head;
      node.val = value;
      this.dll.moveToHead(node);
  }
};