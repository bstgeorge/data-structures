var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function (value) {
  for (var i = this.lastIndex; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function () {
  this.lastIndex--;
  let removedValue = this.storage[this.lastIndex];
  delete this.storage[this.lastIndex];
  return removedValue;
};

Queue.prototype.size = function () {
  return Math.max(this.lastIndex, 0);
};

