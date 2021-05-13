/* eslint-disable indent */
// Function that returns true or false based on whether an item is available
// Function takes an item and a list of transactions
// Should return true if the sum of quantity values is > than 0
// In vs Out indicates if the transaction is coming or leaving

function isItemAvailable(inventoryNum, transactions) {
  // Get a list of the transaction using transactionsFor
  // Sum the in and out
  // If positive return true, else false
  let filteredTransactions = transactionsFor(inventoryNum, transactions);
  let inventory = calculateInventoryForProduct(filteredTransactions);
  return inventory >= 0;
}

function calculateInventoryForProduct(transactions) {
  let inventory = 0;
  transactions.forEach(line => {
    if (line.movement === 'in') {
      inventory += line.quantity;
    } else {
      inventory -= line.quantity;
    }
  });
  return inventory;
}

function transactionsFor(inventoryNum, transactions) {
  return transactions.filter(list => list['id'] === inventoryNum);
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
