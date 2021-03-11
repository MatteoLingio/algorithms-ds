//Loop over every element in the array
//check if is greater than first
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

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
