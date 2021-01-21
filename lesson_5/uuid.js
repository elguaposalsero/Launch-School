// Setup Constants

function generateUUID() {
  const VALID_CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const SLOTS = [8, 4, 4, 4, 12];
  let uuid = '';

  for (let index = 0; index < SLOTS.length; index++) {
    let slot = SLOTS[index]; //8
    while (slot > 0) {
      // eslint-disable-next-line max-len
      uuid += VALID_CHARACTERS[Math.floor(Math.random() * VALID_CHARACTERS.length)];
      slot -= 1;
    }
    if (index !== SLOTS.length - 1) {
      uuid += ('-');
    }
  }
  return uuid;
}

let uuid = generateUUID();
console.log(uuid);
