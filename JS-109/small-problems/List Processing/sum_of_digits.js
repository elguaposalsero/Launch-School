// Takes one argument (positive integer) and returns the sum of digits
// Do this without using for or while loops
// Use a series of method calls to perform the operation

function sum(integer) {
  let string = String(integer).split('');
  return string.reduce((acc, curr) => parseInt(acc, 10) + parseInt(curr, 10));
}