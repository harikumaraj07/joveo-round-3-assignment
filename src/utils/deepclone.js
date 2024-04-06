export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      // If obj is not an object, return it directly
      return obj;
    }
  
    // Create a new instance of the same class
    let clone = new obj.constructor();
  
    // Clone each property recursively
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  }