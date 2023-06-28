// @ts-check
/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return (Number(array1.join('')) + Number(array2.join('')))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) { 
  // let isPalindrome = true

  // let stringValue = String(value)
  // let splitted = stringValue.split('')
  
  // for (let i=0, j=0; i<splitted.length && isPalindrome; i++, j++) {
  //   if (splitted[i] !== splitted.reverse()[j]) {
  //     isPalindrome = false
  //   }
  // }
  // return isPalindrome

  let stringValue = String(value)
  let splitted = stringValue.split('')
  let reversed = stringValue.split('').reverse()
  
  let splittedString = splitted.join('')
  let reversedString = reversed.join('')

  let joined = Number(splittedString)
  let reversedJoined = Number(reversedString)

  return joined === reversedJoined ? true : false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Boolean(input) === false || input === '') {
    return 'Required field' 
  } else if (isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0'
  } else {
    return ''
  }
}

// Si no da ningún input --> o lo ha borrado o no ha escrito nada
// Si lo borra --> ''
// Si no pone nada --> null/undefined