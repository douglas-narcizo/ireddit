import React from "react";

/* UTILITY --- Convert Number to 'K' notation String
export const kNotation = (num) => {
  if (num > 999) {
    return (num / 1000).toFixed(1).toString() + 'k';
  }
  return num.toString();
}
*/

// Shorten number to thousands, millions, billions, etc.
// Source: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
// @param {number} num Number to shorten
// @param {number} digits The number of digits to appear after the decimal point.
//
export const shortenNumber = (num, digits) => {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

  for (let i = units.length - 1; i >= 0; i -= 1) {
    const decimal = 1000 ** (i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
};
