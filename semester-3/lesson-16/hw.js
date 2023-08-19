// ***2
function addToArray(arr = []) {
  arr.push(23);
  return arr; // иначе undefined
}

// addToArray(); // каждый раз создается новый массив с одним значением внутри
// addToArray();
// addToArray();

// console.log(addToArray());
// console.log(addToArray());
// console.log(addToArray());

// console.log(addToArray(), addToArray());
// console.log(addToArray(addToArray())); // массив с 2-мя значениями

// let newArr = [1, 2]

// addToArray(newArr); // в массив newArr добавлятся новое значение 23
// addToArray(newArr);
// addToArray(newArr);

// console.log(newArr);
// console.log(addToArray(newArr));
// console.log(addToArray(newArr));
// console.log(addToArray(newArr));
// console.log(newArr);

// ***3
function isIsogram(str) {
  if ((str.length = 0)) {
    return true;
  } else {
    str = str.toLowerCase();
  }

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("ama"));

// ***4
var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  let testArr = test.split("").sort();
  let originalArr = original.split("").sort();
  if (test.length === original.length) {
    for (let i = 0; i < test.length; i++) {
        if (testArr[i] != originalArr[i]) {
          return false;
        }
    }
    return true
  } else {
    return false;
  }
};

console.log(isAnagram("foefet", "toffee"));