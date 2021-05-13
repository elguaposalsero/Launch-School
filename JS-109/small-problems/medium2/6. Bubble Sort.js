// Two values are compared
// If the first value is greater than the second, we swap
// This continues until no swaps are made
// Sorting should be done "in place"
// Assume that the array contains at least two elements

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 0; idx < array.length - 1; idx++) {
      if (array[idx] > array[idx + 1]) {
        [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]


let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]