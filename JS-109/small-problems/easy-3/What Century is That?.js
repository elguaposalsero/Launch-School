// Write a function that takes a year and returns the century
// Should use 'st', 'nd', 'rd', or 'th' as appropriate (e.g. 13th)
// New centuries begin with years that start with 1 (e.g. 2001 = 21st century)
//UPDATE
// Issue with this program. It doesn't work for all cases.

function century(year) {
  let century = Math.ceil(year / 100);
  return century + centurySuffix(century);
  let ending;
}


function centurySuffix(century) {
  let lastTwo = century.toString().slice(-2);
  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13) {
    return 'th';
  }

  switch (century.toString().slice(-1)) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default: return 'th';
  }
}


console.log(century(2001));        // "21st"
console.log(century(2000));        // "20th"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
