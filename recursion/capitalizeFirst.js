function capitalizeFirst(arr) {
  const newArr = [];

  function helper(arr) {
    if (arr.length == 0) return;
    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    helper(arr.slice(1));
  }

  helper(arr);

  return newArr;
}
