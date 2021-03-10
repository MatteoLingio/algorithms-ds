const swap = (arr, indI, indJ) => {
  [arr[indI], arr[indJ]] = [arr[indJ], arr[indI]];
};
const bubble = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
console.log(bubble([2, 1, 7, 4, 5]));
