let array = [1, 2, 3, 4, 5]; // [1, 3, 5]

function removeOtherElement(array) {
  let evenIndexArray = [];
  for (let idx = 0; idx <= array.length; idx += 1) {
    if (idx % 2 === 0) {
      evenIndexArray.push(array[idx]);
    }
  }
  return evenIndexArray;
}

console.log(removeOtherElement(array));