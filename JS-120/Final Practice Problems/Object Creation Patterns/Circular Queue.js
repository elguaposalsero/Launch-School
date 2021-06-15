
class CircularQueue {
  constructor(bufferLength) {
    this.bufferLength = bufferLength;
    this.queue = [];
    this.maxPosition = 1;
  }

  enqueue(item) { //[[item, position], [item, position]]
    if (this.queue.length === this.bufferLength) this.dequeue();
    this.queue.push([item, this.maxPosition]);
    this.maxPosition += 1;

  }

  dequeue() {
    if (this.queue.length === 0) {
      return null;
    } else {
      this.sort();
      return this.queue.pop()[0];
    }
  }

  sort() {
    this.queue.sort(function (a, b) {
      return b[1] - a[1];
    });
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);