var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.lastIndex = 0;
  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    for (var i = this.lastIndex; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }
    this.storage[0] = value;
    this.lastIndex++;
  },

  dequeue: function() {
    this.lastIndex--;
    let removedValue = this.storage[this.lastIndex];
    delete this.storage[this.lastIndex];
    return removedValue;
  },

  size: function() {
    return Math.max(this.lastIndex, 0);
  }

};


