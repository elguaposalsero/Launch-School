function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); 
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let buffer = [1, 2, 3, 4];
let maxBufferSize = 4;
let newElement = 5;

console.log(addToRollingBuffer1(buffer, maxBufferSize, newElement));
console.log(buffer)