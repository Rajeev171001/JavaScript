// strict mode=> in strict mode 'use strict' keyword is used  use keyword like let, const

// non strict=> does not use any keyword

// a=3
// console.log(a)  // non strict

// 'use strict'
// let a=3
// console.log(a) //strict keyword

// this keyword in non strict in node js

// console.log(this) // return empty object

// function showthis(){
//     console.log(this) // return global object

// }

// let obj={
//     name:"raj",
//     f:function(){
//         console.log(this)
//     }
// }
// obj.f()  //returns object itself

// let obj={
//     name : 'raj',
//     f:function(){
//         f:function g(){
//             console.log(this)
//         }
//         g()
//     }
// }
// obj.f()  //returns global obj



//this keyword in node js with strict mode
'use strict'
// console.log(this) // return empty object

// function f(){
//     console.log(this)
// }
// f()  //return undefined

// let obj=
// {
//     name:"raj",
//     f:function(){
//         console.log(this)
//     }
// }
// obj.f() //return object itself

let obj={
    name:"raj",
    f:function(){
        function g(){
            console.log(this)
        }
        g()
    }
}
obj.f() //return unddefined
