// find() method : Returns the first item in the array that passes the test implemented by the provided function

const arr = [1, 2, 3, 4, 5];
const firstEven = arr.find((val) =>{
return  val % 2 === 0
});
console.log(firstEven);