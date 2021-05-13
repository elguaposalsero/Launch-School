// Function takes a positive integer "n"
// Logs a right triangle whose sides have n stars
// Hypotenuse should have one end at lower left, and one at top right

function triangle(numStars) { //5
  let index = 1;
  while (index <= numStars) {
    console.log(' '.repeat(numStars-index) + '*'.repeat(index))
    index += 1;
  }
}

triangle(5);
triangle(9);
