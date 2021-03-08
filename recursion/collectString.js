const collectStrings = obj => {
  const strings = [];
  const helper = obj => {
    for (key in obj) {
      if (typeof obj[key] == 'string') {
        strings.push(obj[key]);
      } else if (typeof obj[key] == 'object') {
        helper(obj[key]);
      }
    }
  };
  helper(obj);
  return strings;
};
