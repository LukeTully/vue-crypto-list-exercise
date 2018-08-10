/*   
  Rounds a number to the nearest nth decimal point
  Pulled from https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
*/
function roundToX(num, decimals) {
  return +(Math.round(num + `e+${decimals}`) + `e-${decimals}`);
}

function convertToCurrency(num, locale = "en-US", options = {
  style: "currency",
  currency: "USD"
}) {
  /* Formats an input number as US currency */
  let format = new Intl.NumberFormat(locale, options);
  return format.format(num);
}
export {
  roundToX as precision,
  convertToCurrency
};
