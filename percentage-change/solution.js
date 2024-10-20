function calculatePercentageChange(original, newAmount) {
  //const difference = Math.abs(newAmount - original);
  //const average = (original - newAmount) / 2;
  //const percentageDifference = (average / difference) * 100;
  const difference = newAmount - original;
  const percentageDifference = difference * 100 / original;
  return Math.round(percentageDifference);
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(200, 200)); // should return -20 as there's been a 20% decrease from 50 to 40
