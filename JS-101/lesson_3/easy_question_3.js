let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot'));
// Note, you can also use the Object.protytpe.hasOwnProperty() to check this.
console.log(ages.hasOwnProperty('Spot'));