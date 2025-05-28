// A.length < B.length
// None in A are in B

function minimalHeaviestSetA(arr) {
  let A_set = [];
  let arr_total = 0;
  let sortedDescending = arr;
  sortedDescending.sort((a, b) => b - a);

  for (let num of arr) {
    arr_total += num;
  }

  let A_total = 0;
  for (let i = 0; i < arr.length; i++) {
    A_total += sortedDescending[i];
    A_set.unshift(sortedDescending[i]);
    if (A_total > arr_total / 2) {
      break;
    }
  }

  return A_set;
}
console.log(minimalHeaviestSetA([4, 2, 5, 1, 6]));
console.log(minimalHeaviestSetA([5, 3, 2, 4, 1, 2]));
console.log(minimalHeaviestSetA([3, 7, 5, 6, 2]));
