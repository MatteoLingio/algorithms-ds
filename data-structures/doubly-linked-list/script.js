class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
    }

    this.length--;
    return shifted;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.length) return null;
    const mid = Math.floor(this.length / 2);
    let node = null;
    let i = 0;
    if (idx < mid) {
      node = this.head;
      while (i < mid) {
        if (i == idx) {
          return node;
        }
        i++;
        node = node.next;
      }
    } else {
      i = this.length;
      node = this.tail;
      while (i > mid) {
        if (i == idx) {
          return node;
        }
        i--;
        node = node.prev;
      }
    }
  }

  set(idx, val) {
    if (idx < 0 || idx > this.length) return null;
    const node = this.get(idx);
    if (!node) return null;
    node.value = val;
    return node;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return null;

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      const node = this.get(idx);
      if (!node) return null;
      const pre = node.prev;
      pre.next = newNode;
      node.prev = newNode;
      newNode.prev = pre;
      newNode.next = node;
    }
    this.length++;
    return this;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const nodeToRemove = this.get(idx);
    if (this.length == 0) {
      this.head = 0;
      this.tail = 0;
    } else {
      const prev = nodeToRemove.prev;
      const next = nodeToRemove.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
    return nodeToRemove;
  }
  reverse() {
    let i = this.length;
    let current = this.tail;
    while (i > 0) {
      const tmp = current.prev;
      current.prev = current.next;
      current.next = tmp;
      current = tmp;
      i--;
    }

    const tmp = this.head;
    this.head = this.tail;
    this.tail = tmp;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push('ciao');
list.push('come');
list.push('va');
list.push('?');
list.push('hey');
list.push('bene');
list.push('spero');
list.push('!');
