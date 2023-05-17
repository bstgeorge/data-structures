var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let lastIndex = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.pop = function() {
    lastIndex--;
    let poppedValue = storage[lastIndex];
    delete storage[lastIndex];
    return poppedValue;
  };

  someInstance.size = function() {
    return Math.max(lastIndex, 0);
  };

  return someInstance;
};
