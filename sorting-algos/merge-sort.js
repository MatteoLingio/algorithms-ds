/*
 * The merge sort algorith is a divide and conquer algo, the time complexity is O(nlogn).
 * Steps:
 * Divide the array in smaller chunks until the array size is one
 * Once the size is 1 order and merge together the smaller arrays until the size is back to original
 *                              6 9 8 4 2 5
 *                            6 9 8     4 2 5
 *                          6 9   8     4 2   5
 *                            6 8 9     2 4 5
 *                              2 4 5 6 8 9
 **/
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergedArr = [];

  //Loop for every element in the array and compare them untill one of two pointers reach end of his array, if arrays have sames size, this will sort them
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  //If arr1 is bigger than arr2 some of the elements are left at the end so the remaining elements are taken and put at the end
  if (i < arr1.length) {
    mergedArr = [...mergedArr, ...arr1.slice(i, arr1.length)];
  }

  //If arr12is bigger than arr1 some of the elements are left at the end so the remaining elements are taken and put at the end
  if (j < arr2.length) {
    mergedArr = [...mergedArr, ...arr2.slice(j, arr2.length)];
  }

  return mergedArr;
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length)),
  );
};
const arr = [2, 3, 1, 4, 56, 32, 22, 12, 190];
console.log(arr);
console.log(mergeSort(arr));
