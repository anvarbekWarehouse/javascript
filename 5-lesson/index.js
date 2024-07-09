// for (boshlanish, manzil, step)

// for(let i =1; i < 10; i++){
//     console.log(i);
// }

// for(let i = 1; i < 10; i++){
//     console.log(i);
//     i = i * 2;
// }
// // continue
// console.log("continue");
// for (let i = 0; i<= 12; i++){
//     if(i % 3 === 0) continue;
//     console.log( ` ${i}`);
// }

// // break
// console.log("break");
// for(let i = 3; i < 10 ; i++){
//     if(i === 5) break;
//     console.log(`Break ${i}`);
// }

// // karra jadvali

// for(let i= 2; i < 10; i++){
//     for(let j = 1; j <= 10;  j++){
//         if( i == i * j) console.log(i + ' lik  karra jadvali');
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// // break label outer inner

// outer: for(let i = 1 ; i <=5 ; i++){
//     inner: for(let j = 1; j <= 5; j++){
//                 if ( i <= 2 ) break;
//                 console.log(j +" j");
//     }
//     console.log(i +" i");
// }
let number = 2;
if(number % 1 == 0 &&  number % number == 0){
    console.log("prime nummber");
}