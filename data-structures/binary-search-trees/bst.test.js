const Bst = require('./bst.js');

test('initialization', () => {
  const tree = new Bst();
  expect(tree.root).toBeNull();
});

describe('regular flow', () => {
  test('insert root of tree', () => {
    const tree = new Bst();
    tree.insert(5);
    expect(tree.root.value).toBe(5);
  });

  test('insert nodes', () => {
    const tree = new Bst();
    tree.insert(5);
    tree.insert(7);
    tree.insert(3);
    tree.insert(9);
    tree.insert(4);

    expect(tree.root.value).toBe(5);
    expect(tree.root.left.value).toBe(3);
    expect(tree.root.right.value).toBe(7);
    expect(tree.root.right.right.value).toBe(9);
    expect(tree.root.left.right.value).toBe(4);
    console.log(JSON.stringify(tree));
  });
});
