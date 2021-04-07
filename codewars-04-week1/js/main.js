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
function isTriangle(a,b,c) {
  return a + b > c && b + c > a && a + c > b
}