/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

***********************************************************************/


function range(start, end) {
  
    if (start >= end) {
      return []
    }

    let numbers = range(start + 1, end)
    console.log(numbers)

    return [start, ...numbers]

    // if (start >end) {
    //   return []
    // }

    // let numbers = range(start + 1, end)
    //  if (start < end) {
    //   numbers.unshift(start)
    //  }

    //  return numbers
}


console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
