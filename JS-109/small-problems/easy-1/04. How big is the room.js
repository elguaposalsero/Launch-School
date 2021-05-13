const SQ_METERS_TO_FEET = 10.7639;

let readlineSync = require('readline-sync');

console.log("Enter the length of the room in meters");
let length = readlineSync.prompt();

console.log("Enter the width of the room in meters");
let width = readlineSync.prompt();

let areaMeters = length * width;
let areaFeet = areaMeters * SQ_METERS_TO_FEET;

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet`);