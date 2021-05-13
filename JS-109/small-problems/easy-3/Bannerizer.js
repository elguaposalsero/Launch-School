function logInBox(string) {
  let length = string.length;
  console.log(`+-${'-'.repeat(length)}-+`);
  console.log(`| ${' '.repeat(length)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${' '.repeat(length)} |`);
  console.log(`+-${'-'.repeat(length)}-+`);
}


logInBox('To boldly go where no one has gone before.');
logInBox('');