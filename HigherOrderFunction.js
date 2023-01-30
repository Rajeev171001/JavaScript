// map, filter, reduce

//map
let arr=[1,2,3,4,5];
let newArr=arr.map(function(x){
    return x*x;
})
console.log(arr)
console.log(newArr)

//filter
let filterredArr=arr.filter(function(x){
    return x%2==0
})
console.log(filterredArr)

//reduce
let sumArr=arr.reduce(function(accumulator,x){
    return accumulator + x
},0)  // here 0 is value of accumulator
console.log(sumArr)
