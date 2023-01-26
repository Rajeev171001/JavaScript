//promise -> it give promise that function will run in future

let fs=require("fs");
//async code
console.log("Before");
// fs.readFile("f1.txt",function(err,data)){
//     console.log(data);
// });

let promise=fs.promises.readFile("F1.txt");
console.log(promise);
//setteled

//if promise setteled and fullfilled
promise.then(function(data){  //then -> if condition
    console.log(""+data);
})
//if promise rejected
promise.catch(function(err){ //catch -> else condition
    console.log(err);
})
console.log("after");
