// object key va value dan tashkil topgan ma'lumotga aytiladi

// let account = {
//     name: "Anvarbek Turdaliyev",
//     age: 26,
//     city: "Andijon",
//     job: "Full stack developer"
// }
// let key = "city";

// console.log(account);
// console.log(account.name);
// console.log(account.age);
// console.log(account.surname);
// console.log(account["name"]);
// console.log(account[key]);

// account.street = "Shahrixon";

// console.log(account);

const account = {
    name: "Webbrain academy",
    major: "Frontend"
};
// Object.freeze(account); // Bunda obejectni muzlatib qoyadi ochirish va o'zgartira olmaydi
Object.seal(account);  // Bunda obejectni muzlatib qoyadi ochirish va o'zgartira olmaydi
account.major = 2022;
delete account.name;
console.log(account);