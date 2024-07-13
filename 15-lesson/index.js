//  Advansed object

const act1 = {
    name: "Webrain",
    age: 3
}

const act2 = {
    name: "Webrain",
    age: 3
}

console.log(act1 == act2);

const act3 = act1;
console.log(act1 == act3);
console.log(act1 === act3);

act3.founded = 'Sardorbek';
console.log(act3);
console.log(act1);

const act4 = structuredClone(act3);  // objectdan clone olib beradi clone olinga obejctni update qilib bo'lmaydi
act4.name = 'Bori';
console.log('struktor '+ act4);
act3.name = 'Anvarbek';
console.log(act4);
console.log(act3);

let age = 26;
let gender = 'male';

const person = {age, gender}; //referensing
console.log(person);

const obj11 = {};

Object.assign(obj11, person); // biriktirib beradi update qilsa bo'ladi

obj11.age = 58;

console.log(obj11);
console.log(person);