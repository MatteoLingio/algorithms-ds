class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = null;
      while (current.next != null) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = 0;
        this.tail = 0;
      }
      return current;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.head = 0;
        this.tail = 0;
      }
      return current;
    }
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }

    return this;
  }

  get(idx) {
    if (idx >= this.length || idx < 0) {
      return null;
    } else {
      let i = 0;
      let value = this.head;
      while (i < idx) {
        value = value.next;
        i++;
      }
      return value;
    }
  }
  set(idx, val) {
    const node = this.get(idx);
    if (!node) return false;
    node.value = val;
    return true;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let node = new Node(val);
    let pre = this.get(idx - 1);
    let after = pre.next;
    pre.next = node;
    node.next = after;
    list++;

    return node;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const pre = this.get(idx - 1);
    const removed = pre.next;
    const post = removed.next;

    pre.next = post;
    this.length--;

    return removed;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      node.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push('ciao');
list.push('come');
list.push('va');
list.push('?');
