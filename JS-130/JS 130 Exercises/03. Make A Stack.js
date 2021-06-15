// In a stack you can only add elements to the end
// And you can only remove the last-inserted element
// Create a function called newStack
// It returns an object with three methods (push, pop, printStack)
// push: takes one value and appends it to the stack
// pop: removes and returns the last element in the stack
// printStack: logs each remaining element of the stack on its own line
  // Starts with least recently added, to most recently added
// Use an array to implement the stack
// Make sure the array is not accessible outside of the stack

function newStack() {
  let stack = [];

  return {
    push(element) {
      stack.push(element);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      stack.forEach(element => {
        console.log(element);
      });
    }
  };
}

let myStack = newStack();
myStack.push(5);
myStack.push(6);
myStack.push(78);
myStack.push('albert');
myStack.printStack();
myStack.pop();
myStack.printStack();
