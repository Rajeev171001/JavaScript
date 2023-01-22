//  array declaration
// let array=[];
let arr=[1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);
// let i=0;
// while(i<arr.length){
//     console.log("element at index",i,"is",arr[i]);
//     i++;
// }

//add element
// push -> add at last
// unshift -> add at starting
// arr.push("last value"); //can be add of any type
// arr.unshift("first val");
// console.log(arr);

//Remove elements
//pop -> remove element from last
//shift -> remove element from starting
// arr.shift();
// arr.pop();
// console.log(arr);

//slice -> it return the ements between starting index and ending index
// it does not change in actual array
// let partOfArray=arr.slice(2,4);
// console.log(partOfArray);
// console.log(arr);

//splice -> it remove the elements between starting index and ending 
// it change in actual array
arr.splice(2,3);
console.log(arr);

