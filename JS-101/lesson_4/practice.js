function lessThan(upperLimit) {
  let numbers = [];
  let candidate = 0;

  do {
    candidate++;
    numbers.push(candidate);
  } while (candidate < upperLimit);

  return numbers;
}

console.log(lessThan(5));