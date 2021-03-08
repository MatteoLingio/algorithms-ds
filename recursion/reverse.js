function reverse(string) {
  if (string.length === 0) return string;
  return string.slice(-1) + reverse(string.slice(0, -1));
}
