// findIndex() method: Returns the index of the first item in the array that passes the test implemented by the provided function.

const arr = [1, 2, 3, 4, 5];

const firstEvenIndex = arr.findIndex((val) =>{
   return val % 2 === 0
});
console.log(firstEvenIndex);