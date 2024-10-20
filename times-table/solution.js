function printTimesTable(n) {
  let i = 0;
  /*while (i <= n) {
    console.log(`${i} x ${n} = ${i * 5}`);
    i++;
  }*/
  for(let multiple=1; multiple < 13; multiple++) {
    console.log(`${multiple} x ${n} = ${multiple * n}`);
  }
}

module.exports = { printTimesTable };
printTimesTable(5);
