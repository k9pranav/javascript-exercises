const removeFromArray = function(array, ...value) {
    let ansArray = [];
    array.forEach((item) => {
        
        if (!value.includes(item)) {
          ansArray.push(item);
        }
      });
      // and return that array
      return ansArray;  
};

// Do not edit below this line
module.exports = removeFromArray;
