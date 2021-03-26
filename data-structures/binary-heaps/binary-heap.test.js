const MaxBinaryHeap = require('./binary-heap.js');
describe('Binary max heap', () => {
  test('class initialization', () => {
    const bh = new MaxBinaryHeap();
    expect(bh.value).toStrictEqual([]);
  });
  test('insert one value', () => {
    const bh = new MaxBinaryHeap();
    bh.insert(7);
    expect(bh.value).toStrictEqual([7]);
  });

  test('insert multiple values', () => {
    const bh = new MaxBinaryHeap();
    bh.insert(7);
    bh.insert(5);
    bh.insert(8);
    bh.insert(12);
    bh.insert(3);
    bh.insert(6);
    bh.insert(21);

    expect(bh.value).toStrictEqual([21, 8, 12, 5, 3, 6, 7]);
  });
});
