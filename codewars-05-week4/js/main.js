function persistence(num) {
  let times = 0
  num = num.toString()
  while (num.length > 1){
    times++
    num = num.split('').map(Number).reduce((a,b) => a * b).toString()
  }
  return times
}

console.log(persistence(39))

function toCamelCase(str){
  let strSplice = str.split('')
  for (let i = 0; i < strSplice.length; i++) {
    if(strSplice[i] === '-' || strSplice[i] === '_'){
      strSplice.splice(i, 1)
      strSplice[i] = strSplice[i].charAt(0).toUpperCase()
    }
  }
  return strSplice.join('')
}

console.log(toCamelCase("the_stealth_warrior"))
