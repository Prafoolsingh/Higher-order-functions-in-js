//  for each () method can be used with array and strings(but can't used directly as we know strings are immutable)

let arr=[1,2,3,4,5]

arr.forEach((val)=>{
 console.log(val*val);
})


let str="apple"

console.log(str.split(""));

str.split("").forEach((val)=>{
    
    console.log(val);
})

