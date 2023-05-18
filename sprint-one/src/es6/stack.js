class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lastIndex = 0;
  }

  push(value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  }

  pop() {
    this.lastIndex--;
    let poppedValue = this.storage[this.lastIndex];
    delete this.storage[this.lastIndex];
    return poppedValue;
  }

  size() {
    return Math.max(this.lastIndex, 0);
  }
}