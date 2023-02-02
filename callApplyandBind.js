// let person1={
//     name:"raj",
//     age:24,
//     show:function(){
//         console.log(this.name+"is"+this.age+"years old")
//     }
// }

// let person2={
//     name:"sharma",
//     age:21
// }
// // function borrowing
// person1.show.call(person2)  // call show function from person1 for person2


let person1={
    name:"raj",
    age:24   
 }
 let person2={
    name:"sharma",
    age:23
 }
//  let show=function(){
//     console.log(this.name+"is"+this.age+"years old")
//  }

//  show.call(person1) //call show function for person1

let show=function(city,car){
    console.log('${this.name} is ${this.age} years old, he lives in ${this.city} and he drives ${this.car}')

}
show.call(person1,'noida','scoda')

let showDetailsBind=show.bind(person2,'noida','bmw')  //bind function is store in variable and when we call it it returns otherwise it is stored, not reutrn like call
showDetailsBind()
