//Loop over every element in the array
//check if is greater than first
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j != i; j++) {
      if (arr[j] > arr[i]) {
        const deleted = arr.splice(i, 1);
        arr.splice(j, 0, deleted);
      }
    }
  }
  return arr;
};
