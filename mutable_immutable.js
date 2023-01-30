const person1={
    name:"Raj",
    age:21
}
// const person2=person1;
// person2.name="steve"; // it changes the refernce object means name of person 1 waill also change

//for solving this problem we use this

// const person2=Object.assign({},person1)  // empty object, source object  new object created an dall proprties of person1 will copy to empty object

// another way is to use spread function
const person2={...person1}//spread function
person2.name="steve"

console.log(person1);
console.log(person2);
