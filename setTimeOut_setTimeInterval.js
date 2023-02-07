// // set time out is not a function of js, it is function of node and browser

// function greet(){
//     console.log("hello")
// }
// setTimeout(greet,3000) // time in ms

// console.log("bye")
// // bye then hello,  beacuse first main thread will execute then node api,
// //setTimeOut is function of node, browser



let count=0;
let intervalId

function Hi(){
    count++;
    console.log("hi")

    if(count>3){
        clearInterval(intervalId)  //to stop execution after count value >3
    }
}
intervalId=setInterval(Hi,2000)
