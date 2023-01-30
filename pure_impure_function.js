//impure function  =>  depnds on external factor  means by giving saame number the result can change, if the value of 'a' will change

// let a=7;
// function addNum(b){
//     console.log("the sum is",a+b)
// }
// addNum(2);  //if a=7
// addNum(2);  //if a=9

//pure function  does not depend on exetrnal factor
// when we call a and b by same value of argument, result will not change

function addNum(a,b){
    // console.log("the sum is",a+b); //side effect
    return a+b;
}
console.log(addNum(2,3)); //when a=2 and b=3, the reult will always 5
// side effect means when in function the external factor does not change, in ihis function console.log use extra screen to print
// Agar function me change kr skte h, ye side effect hota h
