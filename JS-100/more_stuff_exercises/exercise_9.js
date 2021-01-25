function isNegativeZero(number){
  if(5 / number  === -Infinity){
    return true
  } else {
    return false
  }
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));