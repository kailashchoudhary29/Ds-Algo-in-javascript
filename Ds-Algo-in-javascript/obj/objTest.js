function getObjectDifference(obj1, obj2) {
    const diff = {};
  
    // Iterate over the properties of the first object
    for (let key in obj1) {
      // Check if the property exists in the second object and has a different value
      if (obj1.hasOwnProperty(key) && (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key])) {
        diff[key] = obj1[key];
      }
    }
  
    // Iterate over the properties of the second object
    for (let key in obj2) {
      // Check if the property exists in the first object and has a different value
      if (obj2.hasOwnProperty(key) && (!obj1.hasOwnProperty(key) || obj2[key] !== obj1[key])) {
        diff[key] = obj2[key];
      }
    }
  
    return diff;
  }
  
  // Example usage
  const obj1 = { name: 'John', age: 30, city: 'New York' };
  const obj2 = { name: 'John', age: 35, country: 'USA' };
  
  const difference = getObjectDifference(obj1, obj2);
  console.log(difference);
