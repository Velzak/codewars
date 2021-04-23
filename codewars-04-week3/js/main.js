function reverseFizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Fizz") {
      if (newArray.length === 0) {
        newArray.push(i + 1);
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Buzz") {
      if (newArray.length === 0) {
        newArray.push(i + 1);
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "FizzBuzz") {
      if (newArray.length === 0) {
        newArray.push(i + 1);
        newArray.push(i + 1);
      } else if (newArray.length === 1) {
        newArray.push(i + 1);
      }
    }
  }
  return newArray;
}
console.log(reverseFizzBuzz([1, 2, "Fizz", 4, "Buzz"]));

//refactored
function refactoredReverseFizzBuzz(array) {
  let fizz =
    array.indexOf("Fizz") + 1
      ? array.indexOf("Fizz") + 1
      : array.indexOf("FizzBuzz") + 1;
  let buzz =
    array.indexOf("Buzz") + 1
      ? array.indexOf("Buzz") + 1
      : array.indexOf("FizzBuzz") + 1;
  return [fizz, buzz];
}

//Prefill an array

function prefill(n, v) {
  let arr = [];
  if (
    isNaN(n) ||
    !isFinite(n) ||
    n < 0 ||
    typeof n === "boolean" ||
    n % 1 !== 0
  ) {
    throw new TypeError(`${n} is invalid`);
  }
  parseInt(n);
  for (let i = 0; i < n; i++) {
    arr.push(v);
  }
  return arr;
}

//Animal Class

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

//Meeting replace names and uppercase

function meeting(s) {
  let names = s.toUpperCase().split(/[;:]/);
  let firstName = [];
  let lastName = [];
  let fullNames = [];
  for (let i = 0; i < names.length; i++) {
    if (i % 2 === 0) {
      firstName.push(names[i]);
    } else {
      lastName.push(names[i]);
    }
  }
  for (let i = 0; i < firstName.length; i++) {
    fullNames.push([`(${lastName[i]}, ${firstName[i]})`]);
  }
  return fullNames.sort().join("");
}

console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);

//Remake Math.round, Math.ceil, and Math.floor functions

Math.round = function (number) {
  //if number to the right of the deciaml is above 4, round the number to left of deciaml one above.  Othewise round down
  let numStr = number.toString().split(".");
  if (numStr.length > 1) {
    if (parseInt(numStr[1].substring(0, 1)) >= 5) {
      return parseInt([numStr[0]]) + 1;
    }
  }
  return parseInt(numStr[0]);
};

Math.ceil = function (number) {
  let numStr = number.toString().split(".");
  if (parseInt(numStr[1]) > 0) {
    return parseInt(numStr[0]) + 1;
  } else {
    return parseInt(numStr[0]);
  }
};

Math.floor = function (number) {
  let numStr = number.toString().split(".");
  return parseInt(numStr[0]);
};

console.log(Math.round(3.43));

function count (string) {  
  let char, count;
  let amount = {}
    for (let i = 0; i < string.length; i++) {
      char = string.charAt(i)

      count = amount[char]
      
      amount[char] = count ? count + 1 : 1
    }

    return amount
}

function comp(array1, array2){
  if(array1 === null || array2 === null){return false}

  array1 = array1.map(t => t**2).sort((a,b) => a-b)
  array2 = array2.sort((a,b) => a-b)
  
  for (let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {return false}
  }
  return true
}

a = [4, 8, 8, 7, 10, 4, 7, 3, 2, 5, 6, 4, 7, 6]
b = [9, 64, 49, 49, 16, 16, 25, 64, 36, 100, 49, 4, 36, 16]

console.log(comp(a, b))
