/*
 * Inputs array of integers and an integer
 * Output integer maximum sum of a subarray length of input number in the original array
 * Ex:
 * [100,200,300,400], 2 -> subarrays are [100, 200] [200,300] [300, 400] -> maxSubarray sum is
 * 700 = 300 + 400
 * 1) set the sum of first subarray
 * 2)"Slide the window" by one adding the new n + 1 element to sum and subtracting the i - 1 element
 */

const maxSubarraySum = (array, num) => {
  if (num > array.length) return null;

  let maxSum = array.slice(0, num).reduce((curr, acc) => curr + acc, 0);

  let newSum = maxSum;
  for (let i = num; i < array.length; i++) {
    newSum += array[i] - array[i - num];
    maxSum = Math.max(newSum, maxSum);
  }

  return maxSum;
};
