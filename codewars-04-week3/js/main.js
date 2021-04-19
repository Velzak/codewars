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
  let fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf('FizzBuzz') + 1
  let buzz = (array.indexOf('Buzz') + 1) ? array.indexOf('Buzz') + 1 : array.indexOf('FizzBuzz') + 1
  return [fizz, buzz]
}

