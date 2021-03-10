const selectionSort = array => {
  let min;
  let minIndex = 0;

  for (let i = 0; i < array.length - 1; i++) {
    min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
};

console.log(selectionSort([2, 7, 1, 3, 4, 9]));

/*
 * [2, 7,1, 3, 4, 9]
 * [1,2,3,4,9,7]
 * */
