//function define
// function sayHello(para){
//     console.log("hello",para);
// }
//function invocation
// sayHello(10);
// sayHello("world");
// sayHello([1,2,3,4]);
// sayHello({name:"Rajeev"});
// let rev=sayHello();
// console.log("rev is:",rev);// if value is defined that in output it shoes undefined

// function are first class citizen
//functions are treated as a variable

//assignment
// let a=[1,2,3,4];
// let b=a;
// console.log(b);

//function expression
// let fncontainer=function fn(){  //function name is fn
//     console.log("i m expreesion");
// }
// fncontainer();  //function can call through a variable by storing it in a  variable

// annonymous function -> means if we didn't give a name to function
// let fncontainer=function (){  //function name is fn
//     console.log("Annonymous function");
// }
// fncontainer(); 

//IFEE -> Immediately Invoked Function Expression   ->  when the function id called after the creatiog funcion
// (function fn(){
//     console.log("I m IFEE");
// })();  //function calling

//Arrow Function -> mostly used in React
// let fn=num => num*num;
// console.log(fn(5));
//can be written as also
// let fn=(num)=>{
//     return num*num;
// }
// console.log(fn(5));


// First class Citizen
// function are treated as a variable
// 1. assignment -> fn expression
// variable can be passed as a parameter
// 2. function can be passed as a parameter
// variable can be returned from a function
// 3. function can be returmed from a function
// function sayHello(param){
//     console.log("hello",param);
//     param();
//     return "raj";
// }
// //address
// function smaller(){
//     console.log("Hello I m smaller");
// }
// let rval=sayHello(smaller);
// console.log(rval);

function outer(){
    console.log("I m outer returning inner");
    return function(){
        // annonymous function
    }
}
let rval=outer();
console.log("rval", rval);
