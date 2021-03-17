const Queue = require('./queue.js');

test('class initialization', () => {
  const q = new Queue();

  expect(q.size).toBe(0);
  expect(q.first).toBeNull();
  expect(q.last).toBeNull();
});

describe('regular cases', () => {
  test('enqueue', () => {
    const q = new Queue();
    q.enqueue('mario');
    q.enqueue('giovanni');
    expect(q.first.value).toBe('mario');
    expect(q.last.value).toBe('giovanni');
    expect(q.size).toEqual(2);
  });

  test('dequeue', () => {
    const q = new Queue();
    q.enqueue('mario');
    q.enqueue('giovanni');
    q.enqueue('franco');
    expect(q.dequeue()).toBe('mario');
    expect(q.first.value).toBe('giovanni');
    expect(q.last.value).toBe('franco');
    expect(q.size).toEqual(2);
  });
});

describe('edge cases', () => {
  test('dequeue from empty queue', () => {
    const q = new Queue();
    expect(q.dequeue()).toBeNull();
  });

  test('dequeue from queue of two', () => {
    const q = new Queue();
    q.enqueue('mario');
    q.enqueue('giovanni');
    expect(q.dequeue()).toBe('mario');
    expect(q.first.value).toBe('giovanni');
    expect(q.last.value).toBe('giovanni');
  });

  test('dequeue from queue of one', () => {
    const q = new Queue();
    q.enqueue('mario');
    expect(q.dequeue()).toBe('mario');
    expect(q.first).toBeNull;
    expect(q.last).toBeNull;
    expect(q.size).toBe(0);
  });
});
