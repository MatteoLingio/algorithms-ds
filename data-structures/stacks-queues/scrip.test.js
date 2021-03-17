const Stack = require('./script.js');
describe('regular pushing and popping', () => {
  const s = new Stack();
  s.push('ciao');
  s.push('come');
  s.push('va');

  test('push to stack', () => {
    expect(s.start.value).toBe('ciao');
    expect(s.size).toBe(3);
  });

  test('pop from stack', () => {
    expect(s.pop()).toBe('va');
    expect(s.size).toBe(2);
  });
});

describe('edge cases', () => {
  const s = new Stack();
  test('popping from empty stack', () => {
    expect(s.pop()).toBeNull();
  });
  test('popping from one item stack', () => {
    s.push('ciao');
    expect(s.pop()).toBe('ciao');
  });
});
