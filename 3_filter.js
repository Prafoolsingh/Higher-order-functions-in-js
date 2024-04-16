// filter() method :returns a new array with all the items that pass the test implemented by the provided function.

let arr1=[1,2,3,4,5]

const arr2=arr1.filter((val)=>{
 return val<3
})

console.log(arr2);