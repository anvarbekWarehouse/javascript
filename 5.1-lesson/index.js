// // while do while

// while(0){
// console.log("hey");
// }
// let i =3;
// do {
//     console.log(i);
//     i --;
// }while(i)

// // function declaration
//  getAvr();
// function getAvr(){
//     console.log("Function Declaration");
// }

// // function expresion
// // getExp(); // Before initialazation
// const getExp = function(){
//     console.log("Function expresion");
// }
// getExp();

// // arrow function
// getArr(); // Before initialazation
// const getArr = () => {
//     console.log("Arrow function;");
// }

// getArr();

// // Function parametrs

// const getPar = (name, lastName) => {
//     console.log(`${name} ${lastName} Welcome!`);
// }

// getPar('Anvarbek', 'Turdaliyev');

// // function parametr default value

// const funcDefVal  = (name, surname = "") => {
//     console.log(`${name} ${surname}`);
// }

// funcDefVal('Anvarbek', 'Turdaliyev');
// funcDefVal('Anvarbek');

// // function return
// const gpa = () => {
//     return 'okay';
// }

// console.log(gpa());

const getNum = (num, total) => {
    return (num * 100)/ total;
}

console.log(getNum(120, 193));