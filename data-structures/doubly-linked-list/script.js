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
