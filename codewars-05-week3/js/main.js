function lastSurvivor(letters, coords) {
  let arr = letters.split('')
  for (let i = letters.length; i > 1; i--) {
    arr.splice(coords[0], 1)
    coords.shift()
  }
  return arr.join('')
}

console.log(lastSurvivor('abc', [1, 1]))


function solve(arr){
   return [...new Set(arr.reverse())].reverse()
}

console.log(solve([1,2,1,2,1,2,3]))

function smallEnough(a, limit){
  for (const i of a) {
    if( i > limit)
      return false
  }
  return true
}