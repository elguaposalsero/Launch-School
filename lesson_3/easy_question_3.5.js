// Create a better way of doing this without repeating true

/* function isColorValid(color) {
  return (color === 'blue' || color == 'green')
} */

let color = 'blue'

let isColorValid = color === 'blue' || color === 'green' ? true : false

const isColorValid = color => ["blue", "green"].includes(color);