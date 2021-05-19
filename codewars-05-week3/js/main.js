function lastSurvivor(letters, coords) {
  let arr = letters.split('')
  for (let i = letters.length; i > 1; i--) {
    arr.splice(coords[0], 1)
    coords.shift()
  }
  return arr.join('')
}

console.log(lastSurvivor('abc', [1, 1]))