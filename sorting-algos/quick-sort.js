/*
 *Quick sort is based upon the concept of rearranging the value around a pivot
 *-An arbitrary pivot is selected, in this example the first element
 *-The pivot function find the position of the pivot in the sorted array
 *-If a number is smaller than pivot a counter is incremented and the number is put next to the pivot (so position 1 in thia scenario)
 *-When the iteration over the array is over the pivot is moved counter steps ahead, in this way the pivot is in his correct position
 * The process above is repeated n times for the left side of the pivot and n time for the right until the subarray length is 1
 * At the end the rearrenged/sorted array is returned
 * */
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
