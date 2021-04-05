/* KATA 1
Given a list of numbers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero). 
*/

function oddOrEven(array) {
  if (array.length == 0) {
    array = [0];
  }
  if (array.reduce((sum, currentVal) => sum + currentVal) % 2 === 0) {
    return "even";
  } else if (array.reduce((sum, currentVal) => sum + currentVal) % 2 !== 0) {
    return "odd";
  }
}

let arr = [];

oddOrEven(arr);

/* KATA 2
You get an array of numbers, return the sum of all of the positives ones.
*/

function positiveSum(arr) {
    if (arr.length == 0){
        return 0
    }
    let filterArr = arr.filter(x => x >= 0)
    if (filterArr.length == 0){
        return 0
    }
    let sumArr = filterArr.reduce((sum, currentVal) => sum + currentVal)
    if (sumArr <= 0){
        return 0
    } else {
        return sumArr
    }
}

let array = [-1, -2];

console.log(positiveSum(array));


/* KATA 3 
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/

function nbYear(p0, percent, aug, p) {
    let years = 0
    while ( p0 < p){
        p0 += (p0 * ( percent / 100)) + aug;
        years++;
    }
    return years
}

