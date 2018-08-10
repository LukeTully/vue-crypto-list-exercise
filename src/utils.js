/*   

  Rounds a number to the nearest nth decimal point
  Pulled from https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary

  @return
    The value of num rounded to the value of decimalCount

  @param {Number} num
    Number to round
  
  @param {Number} decimalCount
    Number of decimal places to round num to

*/
function roundToX(num, decimalCount) {
  return +(Math.round(num + `e+${decimalCount}`) + `e-${decimalCount}`);
}

/*

  Converts the input number to USD using default optional params can be included
  according to the Intl.NumberFormat spec

  @return
    The value of num converted to a currency string based on the optional params

  @param {Number} num
    number to convert to currency

  @param {String} locale
    local language tag that the currency format should be returned in

  @param {object} options
    Other config options according to spec

*/
function convertToCurrency(num, locale = "en-US", options = {
  style: "currency",
  currency: "USD"
}) {
  let format = new Intl.NumberFormat(locale, options);
  return format.format(num);
}


export {
  roundToX as precision,
  convertToCurrency
};
