//object is group of key value pair
//key:value
// key:value -> property
// key:function ->method

// obj declaration
let cap={
    name : "Steve",
    lastname:"Rogers",
    address:{
        city:"Manhatten",
        state:"New York"
    },
    age:35,
    isAvenger:true,
    movies:["First avenger","Winter soldier","civil war"],
    sayHi: function(){
        console.log("cap say Hi");
    }
};
//Get
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();

// get another method
// for(let key in cap){
//     console.log(key,":",cap[key]);
// }

// Get another method
let propkey="age";  // getting age
console.log(cap.age);
console.log(cap[propkey]);
console.log(cap["age"]);

//set/update
// console.log("cap:",cap);
// cap.age=36;  //update
// cap.isAvenger=false;  //update
// cap.friends=["Tony","Bruce"]; // new key added
// console.log("................");
// console.log("cap:",cap)

// //delete
// delete cap.address  //delete key
// console.log("cap:",cap);

