// function disemvowel(str) {
//     let newStr = (str.replace(/[AEIOUaeiou]/g, ''))
//     return newStr;
// }

// console.log(disemvowel('This website is for losers LOL!'));

// function squares(x, n) {
//     let newArr = []
//     if (n > 0) {

//         for (let i = 0; i < n; i++) {
//             newArr.push(x)
//             x *= x
            
//         }
//     } else {
//         return newArr
//     }
//     return newArr
// }

// console.log(squares(2, 5));


function reverseString (str) {
    let newStr = ''
    for (let i = str.length -1; i >= 0 ; i--) {
        newStr += str[i]
    }

    return newStr
}

console.log(reverseString('lama'));