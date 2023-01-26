// if(true){
//     console.log("hello");
//     console.log("world");
// }
// // {} -> block,  in block all the statements run if condition true


// let letFruit="orange";
// var varFruit="orange";
// console.log("letFruit",letFruit,"varFruit",varFruit)
// {
//     let letFruit="apple";
//     var varFruit="apple";
//     console.log("letFruit",letFruit,"varFruit",varFruit);
// }
// console.log("letFruit",letFruit,"varFruit",varFruit);


// let fruit="apple";
// console.log(fruit);
// {
//     // console.log(fruit); // TDZ, fruit is not defined in block
//     let fruit; //memory allocate different
//     console.log(fruit);
//     fruit="orange";
//     console.log(fruit);
// }
// console.log(fruit); 


//variable shadowing (legal)
// variable shadowing means jo varaiable block k andar h vo bhar vale variable ko shadow kr dega

var fruit="apple";
console.log(fruit);
{
    let fruit="orange";
    console.log(fruit);  //bhar vale ko shadow kr diya
}
console.log(fruit);


// variable shadowing (illegal)
// agr bhar let ka variable h or block me var ho then illegal shadowing
// because agr let bhr h block k to uska scope block k andar bhi hota h but agr var bhar h to uska scope block me nhi hota
let fruit="apple";
console.log(fruit);
{
    var fruit="orange";
    console.log(fruit);
}
console.log(fruit);
