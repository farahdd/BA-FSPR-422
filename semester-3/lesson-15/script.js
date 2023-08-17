// console.log(first);

// var first = 1;
// let second

// console.log(first);


// let h = 5
// h *= 2
// console.log(h);
// console.log(h--);

// let groceryItem = 'mango'

// switch (groceryItem) {
//     case 'tomato': {
//         console.log('Tomatoes are $0.49');
//         break;
//     }
//     case 'papaya': {
//         console.log('Papayas are $0.49');
//         break;
//     }
//     default :
//     console.log('Invalid item');
//     break;
// }


// ******************
// let age =12
// let name = 'Yohan'

// if (age >= 18 || name === 'Yohan') {
//     console.log(`first result: ${name} - ${age}`);
// } else if (age == 12 || name === 'Yohan') {
//     console.log(`second result: ${name} - ${age}`);
// } else {
//     console.log('no matches');
// }



// let age = 18
// age >= 18 ? console.log('turn on the lights') : console.log('turn off the lights')

// let h = 'helloeao'

// console.log(h.replaceAll('e', ''));


// let name = 'hello';

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// function disemvowel(str) {
//     for (let i; i < str.length; i++) {
//       str = str.replace('a', '')
//     }
    
//     return str;
// }

// console.log(disemvowel('This website is far losers LOL!'));

// age = 18

// function checkAge (age) {
//     console.log(`Your age is ${age}`);
// }

// checkAge()

let h = 'this cat and bat'

let pattern1 = /[bc]at/i;

let pattern2 = /\[bc\]at/i;

let pattern3 = /.at/gi;

let pattern4 = /\.at/gi;

console.log(h.search(pattern1));
console.log(pattern2);
console.log(pattern3);
console.log(pattern4);