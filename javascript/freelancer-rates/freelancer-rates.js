// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const DAILY_WORK_HOURS = 8

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return DAILY_WORK_HOURS * ratePerHour
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  let dayRateVar = dayRate(ratePerHour)
  let totalDays = budget / dayRateVar
  return Math.floor(totalDays)
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  // * Every month has 22 billable days
  // * If the project lasts a month, discount for the whole month
  // * then, days are counted normally
  
  // coste de 22 días * descuento mensual
  // + coste de días normales
  let normalDays = numDays % 22
  let restDaysPrice = normalDays * dayRate(ratePerHour)

  let monthsToDiscount = Math.floor(numDays / 22)
  let monthPriceTotal = dayRate(ratePerHour) * 22
  let discounted = monthPriceTotal * discount
  monthPriceTotal -= discounted
  let totalMonthsPrice = monthPriceTotal * monthsToDiscount
  
  let totalPrice = totalMonthsPrice + restDaysPrice

  return Math.ceil(totalPrice)
}
