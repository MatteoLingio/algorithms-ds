const swap = (arr, indI, indJ) => {
  [arr[indI], arr[indJ]] = [arr[indJ], arr[indI]];
};
const bubble = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  console.log(arr);
};

bubble([2, 1, 7, 4, 5]);
