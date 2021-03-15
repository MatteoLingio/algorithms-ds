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
  pop(val) {
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
      return current;
    }
  }
}

const list = new SinglyLinkedList();
list.push('ciao');
list.push('come');
list.push('va');
list.push('?');
