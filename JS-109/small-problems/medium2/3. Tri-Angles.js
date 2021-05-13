/* eslint-disable max-len */
// Takes three angles as arguments
// Returns string of classification: 'right' 'acute' 'obtuse' 'invalid'
// Assume that all angles are integers
// Triangle Classifications
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// Neither: All angles don't add up to 180

function triangle(angle1, angle2, angle3) {
  if ((angle1 + angle2  + angle3) !== 180 || Math.min(angle1, angle2, angle3) <= 0) {
    return 'invalid';
  } else if (Math.max(angle1, angle2, angle3) === 90) {
    return 'right';
  } else if (Math.max(angle1, angle2, angle3) > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"