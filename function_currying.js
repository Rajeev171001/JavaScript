// function cy=urrying means bind a function with one variable constanst and call with another parameter which can change by user

function add(a,b){
    console.log(a+b)
}
let addwith2=add.bind(this,2) // 2 is constant and b variable can change
addwith2(3)
let addwith=add.bind(this,2,3)
addwith()
let addwit=add.bind(this)
addwit(2,3)

// these all are function currying



//closure currying
function add(x){
    return function(y){
        console.log(x+y)
    }
}
let addwith3=add(4)
addwith3(4)  //returned function 
