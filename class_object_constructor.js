class Person{
    constructor(name,age){  // function
        this.name=name;
        this.age=age;
    }
    showDetails(){
        return this.name
    }
}

class PersonChild extends Person{
    constructor(){
        super('steve')
    }
}

// let person1=new Person('Adam',21) // object making
// // console.log(obj)
// console.log(person1.showDetails())  //object details


let person1=new PersonChild()
console.log(person1.showDetails())
