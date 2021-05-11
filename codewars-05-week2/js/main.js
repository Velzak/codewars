function filter_list(l) {
  return l.filter(num => Number.isFinite(num) === true && num >= 0)
}

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount('aabBbbcde'))