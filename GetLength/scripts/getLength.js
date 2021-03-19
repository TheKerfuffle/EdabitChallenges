function getLength(nestedArray) {
  let length = 0;
  for (let part of nestedArray){
    if (part.length !== undefined){
      length += getLength(part);
    } else{
      length++;
    }
  }
  return length;
}

let a1 = [1,[2,3]];
let a2 = [1,[2,[3,4]]];
let a3 = [[1,2,3],4,[[[5,6],7],8]]
console.log('Testing getLength of a1, should be 3', getLength(a1));
console.log('Testing getLength of a2, should be 4', getLength(a2));
console.log('Testing getLength of a3, should be 8', getLength(a3));
