/*
 * Input: Sorted array
 * Output number of unique numbers in array
 * Examples:
 * [1,1,1,1,2] -> 2 (1,2)
 * [-2, -1, -1- 0, 1] -> 4
 *
 * If array length = 0 return 0
 * Set up counter to 1
 * Set up two pointers
 * iterate to array length
 * if first pointer == second pointer increment both pointers
 * else counter ++, first = second, incrementent only second
 * */
const countUniqueValues = array => {
  if (array.length === 0) return 0;

  let uniqueValues = 1;
  let i = 0;
  let j = 1;

  while (j < array.length) {
    if (array[i] == array[j]) {
      j++;
      i++;
    } else {
      uniqueValues++;
      i = j;
      j++;
    }
  }

  return uniqueValues;
};
