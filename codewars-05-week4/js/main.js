function persistence(num) {
  let times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
}

console.log(persistence(39));

function toCamelCase(str) {
  let strSplice = str.split("");
  for (let i = 0; i < strSplice.length; i++) {
    if (strSplice[i] === "-" || strSplice[i] === "_") {
      strSplice.splice(i, 1);
      strSplice[i] = strSplice[i].charAt(0).toUpperCase();
    }
  }
  return strSplice.join("");
}

console.log(toCamelCase("the_stealth_warrior"));

function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1];
}

console.log(evenLast([2, 2, 2, 2]));

function createPhoneNumber(numbers) {
  numbers = numbers.join('')
  return `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6,10)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
