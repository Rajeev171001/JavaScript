//sync callback
// function greet(personName,age,callback,callback2){
//     let msg="hello" + personName
//     let ageofPerson=age
//     callback(msg) // calling callback function
//     callback2(age)
// }

// function logGreeting(greeting){
//     console.log(greeting)
// }
// function showAge(age){
//     console.log(age)
// }

// greet('steve',23,logGreeting,showAge)


//async callback

console.log("hello")

setTimeout(function st1(){
    console.log("i m st1")
},2000) //time in milli sec

setTimeout(function st2(){
    console.log("i m st2")
},1000)

function sayBye(){
    console.log("bye")
}
sayBye()

//first main thread will execute then setTimre functions
// because in call stack main threads come first
// hello
// bye
// st2 (1000ms)
// st2 (2000ms)
