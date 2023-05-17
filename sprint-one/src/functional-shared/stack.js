var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var someInstance = Object.create(stackMethods);
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.lastIndex = 0;
  return someInstance;
};

var stackMethods = {

  push: function (value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  },

  pop: function () {
    this.lastIndex--;
    let poppedValue = this.storage[this.lastIndex];
    delete this.storage[this.lastIndex];
    return poppedValue;
  },

  size: function () {
    return Math.max(this.lastIndex, 0);
  },

};


