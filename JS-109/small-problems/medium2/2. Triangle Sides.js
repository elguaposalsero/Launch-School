// Returns "equilateral", "isosceles", 'scalene' or 'invalid'
// Equilateral: All sides are equal
// Isosceles: Two sides are equal and the third is different
// Scalene: All three sides have different lengths
// Invalid: The sum of the shortest two sides are NOT longer than the longer one


function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];

  let maxSide = Math.max(...sides);
  sides.sort((a, b) => a - b).pop();

  let sumShorterSides = sides.reduce((acc, curr) => acc + curr);

  if (side1 === side2 && side1 === side3) {
    return "equilateral";
  } else if (sumShorterSides <= maxSide) {
    return 'neither';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));       // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
