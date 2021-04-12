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
