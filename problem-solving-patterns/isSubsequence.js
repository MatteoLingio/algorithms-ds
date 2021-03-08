/*
 * input two strings
 * output bool if sec string contain a asubsequence of first with the same order
 * ex 
 * hello -> hello world true
 * sing -> 
 * -
 * sting true
 *  -
 * abc -> acb false
 * set a pointer at start of second string
 * if char == char 
    -
'singsting'
         -
     -
'hellohello world'
        - 

  -
'abcacb'
      -

   -
yooyyyoo'
      -
/*
 *1)Take size first and second
 *2)Join strings
 * */

const isSubsequence = (first, second) => {
  const firstSize = first.length;
  const secondSize = second.length;

  if (firstSize > secondSize) return false;

  const fullString = first + second;
  let i = 0;
  let j = fullString.length - secondSize;

  while (j < fullString.length - 1) {
    if (i == firstSize - 1) return true;
    if (fullString[i] == fullString[j]) {
      i++;
    } else {
      j++;
    }
  }
  return false;
};
