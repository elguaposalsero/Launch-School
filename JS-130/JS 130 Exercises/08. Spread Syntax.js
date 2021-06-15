// Don't want to grab the elements by index

function formatName([firstName, middleName, lastName]) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

let fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(fullName, fullName, fullName));
// logs: Kirk, James T.