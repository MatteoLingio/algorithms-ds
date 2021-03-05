/*
 * Inputs: SORTED array, target
 * Output: Boolean whether there is a couple in the array that match the target or not
 *
 * Edge Cases:
 * -Array empty false
 * -Array length == 1 false
 *
 * Considerations
 * avg = a + b / 2
 *
 * */

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
