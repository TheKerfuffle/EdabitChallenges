function multiplicativePersistence(number) {
  let persistence = 0;
  let numberString = number.toString();

  if (numberString.length>1) {
    persistence += multiplicativePersistence(multiplyDigits(numberString));
    persistence++;
  }
  return persistence;
}

function multiplyDigits(string) {
  let product = 1;
  for (let i in string) {
    product*=Number(string[i]);
  }
  return product;
}

console.log(multiplicativePersistence(77));
console.log(multiplicativePersistence(123456));
console.log(multiplicativePersistence(4));
