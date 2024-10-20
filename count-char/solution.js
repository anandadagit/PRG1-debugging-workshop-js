function countChar(string, char) {
  let i = 0;
  let count = 0;
  do {
    if ((string[i] == char)) {
      count++;      
    }
    i++;
  } while (i < string.length);
  console.log(count);
  return count;
}

module.exports = { countChar };
countChar("No matches here", "z"); // should return 0
