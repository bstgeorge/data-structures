var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for (var i = lastIndex; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
    lastIndex++;
  };

  someInstance.dequeue = function() {
    lastIndex--;
    let removedValue = storage[lastIndex];
    delete storage[lastIndex];
    return removedValue;
  };

  someInstance.size = function() {
    return Math.max(lastIndex, 0);
  };

  return someInstance;
};
