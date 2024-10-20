function sumDigits(num) {
  let sum = 0;
  let numArr = num.toString().split("");
  console.log(numArr);
  for( num of numArr ) {
    sum += parseInt(num);
  }
  console.log(sum);
  return sum;
}

module.exports = { sumDigits };

sumDigits(1230);
