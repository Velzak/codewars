//loop string character+1 each time
//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"

function accum(s){
  let newStr = ''
  for (let i = 0; i < s.length; i++) {
      newStr += (s[i]).toUpperCase()
      for (let z = 0; z < i; z++) {
          newStr += s[i].toLowerCase()
          
      }
      if(i < s.length - 1){
          newStr += '-'
      }
      
  }
  return newStr
}


//Square every digit 

function squareDigits(num){
  let numSplit = num.toString().split('').map(Number)
  let arr = []
  for (let i = 0; i < numSplit.length; i++) {
    arr += numSplit[i] ** 2
  }
  return parseInt(arr)
}

squareDigits(9119)


//Get the Middle Character

function getMiddle(s) {
 return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2 ] : s[Math.floor(s.length / 2)]
}

console.log(getMiddle('testing'))