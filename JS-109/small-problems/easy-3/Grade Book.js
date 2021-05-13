// Function determines the average of three scores passed into it
// Returns a letter associated with that grade

function getGrade(g1, g2, g3) {
  let meanGrade = ((g1 + g2 + g3) / 3);
  console.log(meanGrade);
  if (meanGrade >= 90 && meanGrade <= 100) {
    return "A";
  } else if (meanGrade >= 80 && meanGrade < 90) {
    return "B";
  } else if (meanGrade >= 70 && meanGrade < 80) {
    return "C";
  } else if (meanGrade >= 60 && meanGrade < 70) {
    return "D";
  } else if (meanGrade >= 0 && meanGrade < 60) {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"