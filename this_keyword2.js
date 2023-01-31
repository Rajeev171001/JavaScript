//this in browser with non strict mode

// console.log(this) // return window object

// function f(){
//     console.log(this)
// }
// f() //return window object

// let obj={
//     name:"raj",
//     f:function(){
//         console.log(this)
//     } 
// }
// obj.f() // return object itself

// let obj={
//     name:"raj",
//     f:function(){
//         function g(){
//             console.log(this)
//         }
//         g()
//     }
// }
// obj.f() // return window object


//this in browser with strict

'use strict'

// console.log(this) //return window object

// function f(){
//     console.log(this)
// }
// f() //return undefined

// let obj={
//     name:"raj",
//     f:function(){
//         console.log(this)
//     } 
// }
// obj.f() // return object itself

// let obj={
//     name:"raj",
//     f:function(){
//         function g(){
//             console.log(this)
//         }
//         g()
//     }
// }
// obj.f() // return undefined
