function asciiArt(message) {
  let i = 0;
  while (i < 10) {
    console.log(message.padStart(message.length + i, ' '));
    i++;
  }
}
asciiArt("The Flinstones Rock!");