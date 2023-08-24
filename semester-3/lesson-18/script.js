// let name = 'Farangis';
// this.a = 12;
// // console.log(this);
// const goat = {
//     dietType: 'herbivore',
//     makeSound() {
//         console.log(this.dietType);
//     },
//     diet: () => { // ссылается на глобальную область видимости
//         console.log(this.a);
//         console.log(this.dietType);
//     }
// }

// goat.diet();
// goat.makeSound();

// // Another Example
// const bankAccount = {
//     _amount: 1000,
// };
// // //_amount property is changeable, but it is not recomended
// bankAccount._amount = 95;

// // GET and SET
// const person = {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     _age: 37,
//     get fullName() {
//         if (this._firstName && this._lastName) {
//             return `${this._firstName} ${this._lastName}`;
//         } else {
//             return 'Missing a first name or a last name';
//         }
//     },
//     set age(newAge) {
//         if (typeof newAge === 'number') {
//             this._age = newAge
//         } else {
//             return 'You must assign a number to age'
//         }
//     },
//     get age() {
//         if (this._age) {
//             return this._age;
//         } else {
//             return 'Age is empty or is 0'
//         }
//     }
// };
// person.age = 18;
// console.log(person.fullName);
// console.log(person.age);

// function count(array) {
//   let count = {};
//   for (let element of array) {
//     console.log(count[element]);
//   }

// }
// let array = ['james', 'james', 'john']

// console.log(count(array));

// const dailyMenu = {};

// const menu = {
//     _meal: '',
//     _price: 0,
//     set meal(mealName) {
//         if (mealName.match(/[a-z]|[A-Z]/g) == null) {
//             this._meal = mealName;
//         } else {
//             return `You need to assign a name`
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

// let animals = [
//     {name: 'hue', species: 'dog'},
//     {name: 'alo', species: 'cat'},
//     {name: 'blue', species: 'rabbit'},
//     {name: 'ajaj', species: 'dog'},
// ]

// let isDog = function(animal) {
//     return animal.species === 'dog'
// }

// let dogs = animals.filter(isDog)
// console.log(dogs);

// function count(array){
//     const count = {
//     }
//     array.forEach((element) => {
//         count[element] ? count[element]++ : count[element] = 1;
//   });
//   return count
// }
// console.log(count(arr));