// Pulled from https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
function roundToX(num, decimals) {
  return +(Math.round(num + `e+${decimals}`) + `e-${decimals}`);
}

export {
  roundToX as precision
};
