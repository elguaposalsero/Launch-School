function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}


function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split('.'); // [10, 4, 5, 11]
  if (inputString.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}


console.log(isDotSeparatedIpAddress("10.4.5.11"));