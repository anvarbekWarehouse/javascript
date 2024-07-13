// let title = "name";
// let obj = {
//     name: "webrain",
//     title: "IT Center",
//     [title]: "Webrain Academy",
//     title
// };

// console.log(obj[title]); // Webrain Academy
// console.log(obj.title); //name
// console.log(obj.name); //Webrain Academy
// console.log(obj)

// isEmpty()
// const obj = {};

// console.log(isEmpty(obj));

// const funcObjIsEmpty = (obj) => {
    
// }

// sort value object

let salaries = {
    John: 100,
    Ann: 150,
    Merry: 120
}

let max = {};
for(sal in salaries){
    // console.log(salaries[sal]);
    for(sal2 in salaries){
        // console.log(sal2);
        if(salaries[sal] > salaries[sal2]){
            console.log(sal + ": "+ salaries[sal]);
        }
    }
}


obj = {
    name: 'farxod',
    age: 23,
    child: {
        name: 'adxam',
        age: 24,
        child: {
            name: 'sora',
            age: 26
        }
    }
};

let sum = 0;
while(obj){
    sum += obj.age;
    obj = obj.child;
}
console.log(sum);