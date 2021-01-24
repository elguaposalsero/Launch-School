let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// eslint-disable-next-line max-len
munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.substring(1).toLowerCase();

console.log(munstersDescription); 