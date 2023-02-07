// const fs=require('fs') // in node not in js
// const { before, after } = require('node:test')

// console.log("before")

// fs.readFile('f1.txt',callback)

// function callback(err,data){
//     if(err){
//         console.log("error")
//     }else{
//         console.log('content' + data)
//     }
// }

// console.log('after')
// // before
// // after
// // callback
// //because first main thread will execute then node api will execute, callback function store in node api when execute because they are part of node not js





//PARALLEL EXECUTION
// let fs=require('fs')
// console.log('before')
// fs.readFile('f1.txt',cb)
// fs.readFile('f2.txt',cb1)
// fs.readFile('f3.txt',cb2)
// function cb(err,content){
//     console.log('content'+content)
// }
// function cb1(err,content){
//     console.log('content'+content)
// }
// function cb2(err,content){
//     console.log('content'+content)
// }
// console.log('after')
// in parallel, callbacks are in node api, in node api there is no sequence to execute files they randomly execute



// SERIAL EXECUTION
let fs=require('fs')
console.log('before')

fs.readFile('f1.txt',cb)
function cb(err,content){
    console.log('content'+content)

    fs.readFile('f2.txt',cb1)
    function cb1(err,content){
        console.log('content'+content)

        fs.readFile('f3.txt',cb2)
        function cb2(err,content){
            console.log('content'+content)
        }
    }
}
console.log('after')
// in serial function in function so ther execute serially
