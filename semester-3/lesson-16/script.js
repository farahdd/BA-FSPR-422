// function userInfo(name, psw = "secret") {
// //   console.log(`Your name is ${name} with psw: ${psw}`);
//     if (psw.length > 0) {
//         return `Your name is ${name} with psw: ${'*'.repeat(psw.length)}`;

//     } else {
//         return `Your name is ${name} with psw: ${psw}`;
//     }
// }

// result = userInfo('Farangis', 'qwer')
// console.log(result);

// const isWednesday = function (day) {
//   if (day === "Wednesday") {
//     return true;
//   }
//   return false;
// };

// console.log(isWednesday("Wednesday"));

// Arrow functions
// const resctangleArea = (width, height) => {
//   let area = width * height;
//   return area;
// };

// function game(user1, user2) {
//   switch ((user1, user2)) {
//     case (user1 === "Rock" && user2 === "Paper") ||
//       (user2 === "Rock" && user1 === "Paper"): {
//       return "Rock destroys scissors.";
//     }
//     case (user1 === "Scissors" && user2 === "Paper") ||
//       (user2 === "Scissors" && user1 === "Paper"): {
//       return "Scissors cut paper.";
//     }
//     case (user1 === "Paper" && user2 === "Rock") ||
//       (user2 === "Paper" && user1 === "Rock"): {
//       return "Paper covers rock.";
//     }
//     case user1 === user2: {
//       return "If there’s a tie, then the game ends in a draw.";
//     }
//   }
// }

// function game(user1, user2) {
//     if (user1.length === user2.length) {
//         return 'If there’s a tie, then the game ends in a draw.'
//     } else if ((user1.length === 4 && user2.length === 8) || (user2.length === 4 && user1.length === 8)) {
//         return "Rock destroys scissors.";
//     } else if ((user1.length === 5 && user2.length === 8) || (user2.length === 5 && user1.length === 8)) {
//         return "Scissors cut paper.";

//     } else if ((user1.length === 4 && user2.length === 5) || (user2.length === 4 && user1.length === 5)) {
//         return "Paper covers rock.";
//     }
// }

// console.log(game("Rock", "scissors"));







name = 'qwerty'

function testScope() {
    var name;
    name = 'aaaaaaaaaaaaaaaa'
    function testScope2() {
        var name;
        name = 'ah'
    }
    testScope2()
    console.log(name);
}

testScope()
console.log(name);