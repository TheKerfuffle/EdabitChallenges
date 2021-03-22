function additivePersistence(number) {
  let persistence = 0;
  let numberString = number.toString();

  if (numberString.length>1) {
    persistence += additivePersistence(addingDigits(numberString));
    persistence++;
  }
  return persistence;
}

function addingDigits(string) {
  let sum = 0;
  for (let i in string) {
    sum+=Number(string[i]);
  }
  return sum;
}

console.log(additivePersistence(1679583));
console.log(additivePersistence(123456));
console.log(additivePersistence(6));
