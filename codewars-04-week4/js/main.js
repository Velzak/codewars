function multiplicationTable(row,col){
  let arr = []
  for (let i = 1; i < row + 1; i++) {
    let rows = []
    for (let x = 1; x < col + 1; x++) {
      rows.push(i * x)
    }
    arr.push(rows)
  }
  return arr
}

console.log(multiplicationTable(4,4))