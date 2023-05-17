var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Stack.prototype.pop = function () {
  this.lastIndex--;
  let poppedValue = this.storage[this.lastIndex];
  delete this.storage[this.lastIndex];
  return poppedValue;
};

Stack.prototype.size = function () {
  return Math.max(this.lastIndex, 0);
};