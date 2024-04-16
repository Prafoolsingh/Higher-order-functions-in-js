// reduce() method:Executes a reducer function on each element of the array, resulting in a single output value

let arr1=[1,2,3,4,5]

const sum=arr1.reduce((accmulator,currentValue)=>{
 return accmulator+currentValue
})

console.log(sum);