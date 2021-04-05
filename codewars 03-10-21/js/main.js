// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
  let mergedArr = []
  if (a.length === b.length || a.length > b.length) {
    for (let i = 0; i < a.length; i++) {
      mergedArr.push(a[i])
      if (i <= b.length) {
        mergedArr.push(b[i])
      }
    }
  } else if (b.length > a.length) {
    for (let i = 0; i < b.length; i++) {
      if (i <= a.length) {
        mergedArr.push(a[i])
      }
      mergedArr.push(b[i])
    }
  }
  return mergedArr
}

//Inverse Slice

function inverseSlice(items, a, b) {
  let startSlice = items.slice(0, a)
  let endSlice = items.slice(b, items.length)
  return startSlice.concat(endSlice)
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4))

//Capitalize Jaden

String.prototype.toJadenCase = function () {
  let words = this.split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  return words.join(' ')
};

str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real"