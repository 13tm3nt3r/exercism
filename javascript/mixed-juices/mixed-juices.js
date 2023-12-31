// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let totalTime
  switch (name) {
    case 'Pure Strawberry Joy':
      totalTime = 0.5
      break
    case 'Energizer':
    case 'Green Garden':
      totalTime = 1.5
      break
    case 'Tropical Island':
      totalTime = 3
      break
    case 'All or Nothing':
      totalTime = 5
      break
    default:
      totalTime = 2.5
  }
  return totalTime
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut (wedgesNeeded, limes) {
  let i = 0
  let wedgesCount = 0

  while (wedgesNeeded > wedgesCount) {
    if (i < limes.length) {
      switch (limes[i]) {
        case 'small':
          wedgesCount += 6
          break
        case 'medium':
          wedgesCount += 8
          break
        case 'large':
          wedgesCount += 10
          break
      }
    } else {
      break
    }

    i++        
  }

  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders[0]) // give me the time it takes to mix always the first juice of the array
    orders.shift() // remove the bottom of the stack -first item of the array-
  }

  return orders
}
