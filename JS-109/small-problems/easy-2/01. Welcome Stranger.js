// Takes two objects: an array and an object
// greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


function greetings (name, description) {
  let fullName = name.join(' ');
  console.log(`Hello ${fullName}! Nice to have a ${description.title} ${description.occupation} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });