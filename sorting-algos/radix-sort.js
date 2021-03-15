//Radix sort is not a comparison algorithm it uses the digits in a number
//to sort, it works only with numbers.
//for every number inside in array it takes the last digit in number and put
//the number inside a bucket related to the last digit, after all numbers are
//done the buckets are rearanged in an array, this process is repeated for every digit in
//the biggest number in array
//
//12, 345, 1, 189
//
//buckets: [[], [1], [12], [], [], [345], [], [], [], [189]]
//
//1 12 345, 189
//[[1], [12], [], [], [345], [], [], [], [189], []]
//1 12 345 189
//[[1, 12], [189], [], [345], [], [], [], [], [], []]
//1 12 189 345

const getDigit = (n, idx) => {
  return Math.floor(Math.abs(n) / Math.pow(10, idx)) % 10;
};

const digitCount = n => {
  if (n == 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
};

const mostDigits = array => {
  let max = 0;
  array.forEach(n => {
    max = Math.max(max, digitCount(n));
  });
};

const radixSort = nums => {
  for (let i = 0; i < mostDigits(nums); i++) {
    const buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < nums.length; j++) {
      let num = nums[j];
      let digitCount = getDigit(num, i);
      buckets[digitCount].push(num);
    }
    nums = [].concat(...buckets);
  }
  return nums;
};

console.log(radixSort([3, 6, 3, 1, 3, 2, 6, 2, 1, 22]));
