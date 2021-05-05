function isIsogram(str) {
  let lowerCase = str.toLowerCase()
  for (let i = 0; i <= lowerCase.length; i++) {
    for (let j = i + 1; j <= lowerCase.length; j++) {
      if (lowerCase[j] == lowerCase[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("Rob"));

function solution(nums){
  return nums === null || nums === undefined || nums === [] ? [] : nums.sort((a,b) => a - b)
}



console.log(solution([0, 3, 1]))