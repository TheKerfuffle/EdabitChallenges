// // A.length < B.length
// // None in A are in B

// function numberOfItems(s, startIndices, endIndices) {
//   let numberEnclosedItems = [];
//   // Write your code here
//   for (let i = 0; i < startIndices.length; i++) {
//     let start = startIndices[i] - 1;
//     let end = endIndices[i] - 1;

//     for (let i = start; i <= end; i++) {
//       if (s[i] === "|") {
//         start = i;
//         break;
//       }
//     }
//     for (let i = end; i >= start; i--) {
//       if (s[i] === "|") {
//         end = i;
//         break;
//       }
//     }

//     let slice = s.slice(start, end + 1);

//     let closed = slice.split("|").join("").length;
//     numberEnclosedItems.push(closed);
//   }
//   return numberEnclosedItems;
// }
function numberOfItems(s, startIndices, endIndices) {
  let numberEnclosedItems = [];
  // Write your code here
  for (let i = 0; i < startIndices.length; i++) {
    let start = startIndices[i] - 1;
    let end = endIndices[i] - 1;
    console.log(s);

    let closed = 0;
    let float = 0;

    let within = false;
    for (let j = start; j <= end; j++) {


      if (s[j] === "|") {
        within = true;
      } else if (!within) {
        continue;
      }

      if (within && s[j] === "*") {
        float++;
      } else if (within && s[j] === "|") {
        closed += float;
        float = 0;
      }
    }
    numberEnclosedItems.push(closed);
  }
  return numberEnclosedItems;
}
// console.log(numberOfItems("|**|*|*", [1, 1], [5, 6]));

var platesBetweenCandles = function (s, queries) {
  const result = []

  const left = Array(s.length).fill(0) // Initialize an array to store the number of plates seen on index i
  const candles = new Set() // Initialize a set to store the indexes of candles

  let leftPlateCount = 0; // Track the total number of plates seen so far
  for (const i in s) {
    if (s[i] === "|") { // If you see a candle,
      candles.add(+i) // add index i into candles Set ("+i" converts i of type string into a number)
      left[i] = leftPlateCount // also, store the number of plates you seen into 'left' array
    } else {
      leftPlateCount++ // If you see a plate, increment the total number of plates seen so far
    }
  }

  const candlesArr = [...candles] // Converts the Set into an array to iterate on later
  for (let [start, end] of queries) { // Destructure [start, end] from each query
    if (!candles.has(start)) { // If s[start] is not in candles Set
      for (const v of candlesArr) { // Iterate candlesArr from the front
        if (v >= start) { // Find the nearest candle index and assign to 'start'
          start = v
          break // Early termination
        }
      }
    }

    if (!candles.has(end)) { // If s[end] is not in candles Set
      for (let i = candlesArr.length - 1; i > 0; i--) { // Iterate candlesArr from the back
        if (candlesArr[i] <= end) { // Find the nearest candle index and assign to 'end'
          end = candlesArr[i]
          break // Early termination
        }
      }
    }

    if (start >= end) { // If start > end, it is an invalid query and we can push '0' to result
      result.push(0)
      continue
    }
	
	// Number of plates between candle at index start and candle at index end
	// Plates on the left of candle at index end minus plates on the left of candle at index start
    const diff = left[end] - left[start]
    result.push(diff < 0 ? 0 : diff) // If 'diff' is negative, push '0' to result, else push 'diff'
  }

  return result

}

console.log(numberOfItems("|**|*|*", [1, 1], [5, 6])); // [2,3]
