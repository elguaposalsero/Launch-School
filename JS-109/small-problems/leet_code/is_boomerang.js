
function distinctPoints(points) {
  if (points[0] === points[1] &&
      points[1] === points[2]) {
    return false;
  } else {
    return true;
  }
}

function slope(point1, point2) {
  return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}


function isBoomerang(points) {
  points.sort(((x, y) => x[0] - y[0]));

  if (!distinctPoints(points)) {
    return false;
  } else if (slope(points[0], points[1]) === slope(points[1], points[2])) {
    return false;
  } else {
    return true;
  }
}

let points = [[1,1],[2,3],[3,2]];
let points2 = [[1,1],[2,2],[3,3]];
console.log(isBoomerang(points));
console.log(isBoomerang(points2));