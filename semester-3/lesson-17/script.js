let numbers = [];

// for (let counter = 0; counter < 10; counter++) {
//   numbers.push(counter);
// }

// *** DO ... while
// let countString = "";
// let i = 0;
// do {
//   i++;
//   countString = countString + i;
// } while (i < 5);

// console.log(countString); // 12345
// console.log(i); // 5

// for (const num of 'Dsggdg') {
//     console.log(num);
// }

// let monday = prompt('On Monday')
// let tuesday = prompt('On Tuesday')
// let wednesday = prompt('On wednesday')
// let thursday = prompt('On Thursday')
// let friday = prompt('On friday')
// let saturday = prompt('On SAturday')
// let sunday = prompt('On Sunday')

// let sleepData = [
//   ["Monday", 8],
//   ["Tuesday", 9],
//   ["Wednesday", 10],
//   ["Thursday", 9],
//   ["Friday", 9],
//   ["Saturday", 10],
//   ["Sunday", 10],
// ];

// function sleepHours() {
//   let day = prompt("Day");
//   let hours = Number(prompt("Hours"));
//   sleepData.push([day, hours]);
// }

// function averageSleepTime(sleepData) {
//   let sum = 0;
//   for (const sleep of sleepData) {
//     sum += sleep[1];
//   }
//   return sum / sleepData.length;
// }

// console.log(averageSleepTime(sleepData));

// sleepHours();

// const spaceShip = {
//     'Fuel Type': 'diesel',
//     color: 'silver'
// };
// spaceShip.color = 'blue'

// const alienShip = {
//     invade: function() {
//         console.log(
//             'lorem ipsum'
//         );
//     }
// }
// const alienShip = {
//     invade () {
//         console.log(
//             'lorem ipsum'
//         );
//     }
// }

const spaceship = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        // return "We got this!"
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

console.log(spaceship.crew.captain.encourageTeam());
delete spaceship.telescope
