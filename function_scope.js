// scope -> area in which variable and function can be accessed
// lexical scope -> means outside the function definition
//scope chain -> agar function me variable defined nhi h to hum bhar caheck krenge, agr vha bhi nhi mila to or bhar check krenge, it is known as scope chain


// var varName=10;
// function fn(){
//     var varName=20;
//     console.log(varName);
// }
// fn();


// console.log("line 9:",varName);
// var varName=10;
// console.log("line 11:",varName);
// function fn(){
//     console.log("line 13:",varName);
//     var varName=20; //this varName is for function, memory allocation is different
//     console.log(varName);
// }
// fn();


// console.log("line 20",varName);
// var varName=10;
// console.log("line 22",varName);
// function fn(){
//     console.log("line 24",varName);
//     var varName=20;
//     function b(){
//         console.log("line 27",varName);
//     // varName is not defined than it check outside, means 20, if there is also not present than it check more outside
//     }   
//     b();
// }
// fn();    

//lexical scope means outside the function definition
console.log("line 35",varName);
var varName=10;
//fn b definition
function b(){
    console.log("line 39",varName); // lexical scope, varName is outside means upper defined means 10
}
console.log("line 41",varName);
function fn(){
    console.log("line 43",varName);
    var varName=20;
    //from fn
    b();
    console.log("line 47",varName);
}
fn();
