//Give an array of intergers, find the one that appears an odd number of times

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      count = 0;
    } else return A[i];
  }
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5, 4])
);

//Is this a triangle?
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

//Create a Like System

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", ""]));

//Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));

function getSum(a, b) {
  let greater = 0;
  let lesser = 0;
  let sum = 0;
  if (a > b) {
    greater = a;
    lesser = b;
  } else {
    greater = b;
    lesser = a;
  }
  for (let i = lesser; i <= greater; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(0, -1));

//Descending Order of number in random order
function descendingOrder(n){
  const s = n.toString().split('')
  return Number(s.sort((a, b) => b- a).join(''))
}

console.log(descendingOrder(1021))
