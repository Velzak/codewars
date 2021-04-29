function multiplicationTable(row, col) {
  let arr = [];
  for (let i = 1; i < row + 1; i++) {
    let rows = [];
    for (let x = 1; x < col + 1; x++) {
      rows.push(i * x);
    }
    arr.push(rows);
  }
  return arr;
}

console.log(multiplicationTable(4, 4));

function dataReverse(data) {
  let newArr = [];
  let lengths = data.length / 8;
  for (let i = 0; i < lengths; i++) {
    let slicedArr = data.slice(data.length - 8, data.length);
    newArr.push(slicedArr);
    data.splice(data.length - 8, data.length);
  }
  return [].concat.apply([], newArr);
}

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));

function findChildren(dancingBrigade) {
  return [...dancingBrigade]
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
    .join("");
}

console.log(findChildren("beeeEBb"));
