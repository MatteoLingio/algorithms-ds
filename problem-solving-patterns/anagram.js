const validAnagram = (firstString, secondString) => {
  const firstMap = {};
  const secondMap = {};

  console.log(firstString, secondString);

  for (const c of firstString) {
    firstMap[c] = !firstMap[c] ? 1 : (firstMap[c] += 1);
  }
  for (const c of secondString) {
    secondMap[c] = !secondMap[c] ? 1 : (secondMap[c] += 1);
  }

  for (const key in firstMap) {
    if (secondMap[key] != firstMap[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('anagram', 'nagaram'));
