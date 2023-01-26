//TDZ(Temporal Dead Zone) -> let constant
// can not access 'varName' before initialization
// before initialization of varName all area is known as TDZ

console.log("hello");
let varName; // declaraion   default undefined
console.log("varName on line 6",varName);

console.log("varName on line 8",varName);
varName=10;
varName=20;
console.log("varName on line 11",varName);
//  let varName;    can not declare again in let but var can declare again

const a=10;
console.log(a);
//const can not reassign and redeclare again


// Keyword    Scope       Reassign     Redeclare     TDZ
// var        Function      yes         yes           No
// let         block        yes         NO            yes
// const       block        No          NO            yes
