// //1
// const menu = {
//     _meal: '',
//     _price: 0,
//     set meal(mealName) {
//         if (mealName.match(/[a-z]|[A-Z]/g) == null) {
//             this._meal = mealName;
//         } else {
//             return `You need to assign a name using letters`
//         }
//     },
//     set price(mealPrice) {
//         if (typeof mealPrice === 'number') {
//             this._price = mealPrice;
//         } else {
//             return 'Price need to be a number'
//         }
//     },
//     get mealPrice () {
//         return `${this._meal}: ${this._price}`
//     },
// };

// menu.meal = 'Pizza1';
// menu.price = 12;
// // menu.meal = 'Coffee'
// console.log(menu.mealPrice);

// // // 2
// function count(array){
//     const count = {
//     }
//     array.forEach((element) => {
//         count[element] ? count[element]++ : count[element] = 1;
//   });
//   return count
// }
// console.log(count(['james', 'james', 'john']));

// //3
function killer(suspectInfo, dead) {
    for (let name in suspectInfo) {
      if (dead.every(x => suspectInfo[name].includes(x))) {
        return name;
      }
    }
  }

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
'Johnny': ['David', 'Kyle', 'Lucas'],
'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));

