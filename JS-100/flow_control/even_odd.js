function evenOrOdd (value){
  if (!Number.isInteger(value)){
    console.log('Sorry the value you passed is not an integer');
    return
  }
  if (value % 2 === 0){
    console.log("even");
  } else {
    console.log("odd")
  }
}

evenOrOdd(3.45);
evenOrOdd(3);
evenOrOdd(6)
evenOrOdd(248);