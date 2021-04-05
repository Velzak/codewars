/* KATA 4
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    let splitArr = s.split(' ')
    let sortArr = splitArr.sort((a,b) => a.length - b.length)
    for (let i = 0; i < sortArr.length; i++) {
      return sortArr[i].length
    }
  }
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

//Given a number, find its opposite 

function opposite(number) {
  return -number
}

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let sortedNums = numbers.split(' ')
        .sort((a, b) => a - b)
    return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]} `
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

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
