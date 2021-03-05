/*
 * Input 2 numbers
 * Output wheter or not they have the same frequency of digit inside
 * Ex: I: 182, 281 -> true
 *     I: 34, 14 -> false
 *
 * 1) Transform numbers in two arrays of digits
 * 2) Loop over first and set frequency to Lookup obj
 * 3) Loop over second and check if frequency is the same
 *
 * Big O time complexity: O(n)
 * */

const sameFrequency = (num1, num2) => {
  const first = num1.toString().split('');
  const second = num2.toString().split('');

  const lookup = {};

  for (const digit of first) {
    lookup[digit] ? (lookup[digit] += 1) : (lookup[digit] = 1);
  }

  for (const digit of second) {
    if (!lookup[digit]) {
      return false;
    }

    lookup[digit] -= 1;
  }

  return true;
};
