class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

module.exports = class Bst {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      const place = (newNode, node) => {
        if (newNode.value > node.value) {
          if (!node.right) {
            node.right = newNode;
            return;
          } else {
            place(newNode, node.right);
          }
        } else {
          if (!node.left) {
            node.left = newNode;
            return;
          } else {
            place(newNode, node.left);
          }
        }
      };

      place(node, current);
    }
    return this;
  }
};
