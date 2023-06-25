// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return (kind === 'car' || kind === 'truck') ? true : false
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let rest = ' is clearly the better choice.'
  let firstChar1 = option1.trim().charAt(0)
  let secondChar1 = option1.trim().split(' ')
  let firstChar2 = option2.trim().charAt(0)
  let secondChar2 = option2.trim().split(' ')

  if (firstChar1 == firstChar2 && secondChar1[1].charAt(0) < secondChar2[1].charAt(0)) {
    return option1 + rest
  } else if (firstChar1 == firstChar2 && secondChar1[1].charAt(0) > secondChar2[1].charAt(0)) {
    return option2 + rest
  } else if (firstChar1 < firstChar2) {
    return option1 + rest
  } else {
    return option2 + rest
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8
  } else if (age > 10) {
    return originalPrice * 0.5
  } else if (3 <= age && age <= 10) {
    return originalPrice * 0.7
  }
}
