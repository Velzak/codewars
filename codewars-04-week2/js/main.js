//Buying a Car

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {

  let month = 0;
  let totalSaving = 0;
  let deprecatedNew = startPriceNew;
  let deprecatedOld = startPriceOld;
  let percentLoss = percentLossByMonth

  if (startPriceOld >= startPriceNew) {
    return [0, Math.floor(startPriceOld - startPriceNew)];
  }
  while ((totalSaving + deprecatedOld) < deprecatedNew) {
    month += 1
    if (month % 2 === 0) {
      percentLoss += 0.5;
    }
    totalSaving += savingperMonth
    deprecatedOld -= deprecatedOld * (percentLoss / 100)
    deprecatedNew -= deprecatedNew * (percentLoss / 100)
  }
  return [month, Math.round(totalSaving + deprecatedOld - deprecatedNew)];

}

console.log(nbMonths(2000, 8000, 1000, 1.5));


//Build Tower 
//Checked Solution, having trouble with Kata
function towerBuilder(nFloors) {
  let arr = []
  let star = 1
  for (let i = 1; i <= nFloors; i++) {
    arr[i-1] = " ".repeat(nFloors-i) + "*".repeat(star) + " ".repeat(nFloors - i)
    star += 2
  }
  return arr
}

console.log(towerBuilder(2))

function toTime(seconds) {
  let hours = Math.floor(seconds / 60 / 60)
  let minutes = Math.floor(seconds / 60)
  if (minutes >= 60){
    minutes = minutes - (hours * 60)
  }
  return `${hours} hour(s) and ${minutes} minute(s)`
}

console.log(toTime(323500))