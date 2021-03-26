module.exports = class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  swap(idx1, idx2) {
    let tmp = this.value[idx1];
    this.value[idx1] = this.value[idx2];
    this.value[idx2] = tmp;
  }
  getParent(val) {
    return Math.floor((val - 1) / 2);
  }

  getChild(val) {
    return val * 2 + 1;
  }

  insert(val) {
    this.value.push(val);
    let currentIdx = this.value.length - 1;
    let parentIdx = this.getParent(currentIdx);
    while (this.value[currentIdx] > this.value[parentIdx]) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = this.getParent(currentIdx);
    }
  }

  //swap the first and last element
  //remove the last element and save it to return it
  //adjust the heap by using the sink down method
  //Start from the root
  //compare the val with the children and swap it with the biggest of two
  extractMax() {
    this.swap(this.value[0], this.value[this.value.length - 1]);
    const max = this.value.pop();
    let current = 0;
    while (true) {
      const leftChildIdx = this.getChild(current);
      const leftChild = this.value[leftChildIdx];
      const rightChild = this.value[leftChildIdx + 1];
      if (!rightChild || !leftChild) break;
      let maxIdx;
      if (leftChild > rightChild) {
        maxIdx = leftChildIdx;
      } else {
        maxIdx = leftChildIdx + 1;
      }
      this.swap(current, maxIdx);
      current = maxIdx;
    }
    return max;
  }
};
