function car(brand,model,color){
    this.Brand=brand
    this.Model=model
    this.Color=color


    this.drive=function(){
     console.log("i m driving" + this.Model)
    }
}

let car1=new car("bmw","x1","white") //this keyword in constructor return empty object {}

// car1.Brand="jaguar" // propertieds can change
// console.log(car1)

car1.drive()
