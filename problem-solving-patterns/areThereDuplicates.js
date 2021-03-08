/*
 * Frequency Counter / Multiple Pointers
 * Inputs:
 * ...args
 * Output:
 * Boolean wheter or not duplicates are present
 * Considerations:
 * if array length is 0 || 1 return false
 * both resolvable with multiple pointer or frequency pattern
 * Multiple pointer is faster
 * 1) Set two pointers one at start and one in second position
 * 2) Iterate till array length
 * 3) Check if element at i == j
 * */

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

/*
 * One Liner
 *   function areThereDuplicates() {
 *       return new Set(arguments).size !== arguments.length;
 *   }
 * */
