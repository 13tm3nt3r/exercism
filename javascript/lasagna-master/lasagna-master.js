/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determine the status of the lasagna and return the minutes left to take it from the oven.
 * 
 * @param {number} minutes remaining
 * @returns {string|undefined}
 */
export function cookingStatus (minutes) {
    if (minutes === 0) {
        return 'Lasagna is done.'
    } else if (minutes === undefined) {
        return 'You forgot to set the timer.'
    } else if (minutes !== 0) {
        return 'Not done, please wait.'
    }
}

/**
 * Gives the time needed to prepare the lasagna and all its layers
 * 
 * @param {string[]} layers 
 * @param {number} minutes per layer needed for the preparation
 * @returns {number}
 */
export function preparationTime (layers, minutes=2) {
    return layers.length * minutes
}

/**
 * Determine the quantity of noodles and sauce needed
 * 
 * @param {string[]} layers 
 * @returns {object} noodles: value, sauce: value
 */
export function quantities (layers) {
    let grams = 0
    let liters = 0
    for (let ingredient of layers) {
        if (ingredient === 'noodles') {
            grams += 50
        } else if (ingredient === 'sauce') {
            liters += 0.2
        }
    }
    return {
        'noodles': grams,
        'sauce': liters
    }
}

/**
 * Add the secret ingredient -last item- to the top of my stack -end of the array-
 * 
 * @param {string[]} hisRecipe 
 * @param {string[]} myRecipe 
 * @returns
 */
export function addSecretIngredient (hisRecipe, myRecipe) {
    let hisRecipeCopy = []
    for (let item of hisRecipe) {
        hisRecipeCopy.push(item)
    }
    let lastChar = hisRecipeCopy.pop()
    if (lastChar) myRecipe.push(lastChar)
    console.log(myRecipe);
}

/**
 * Gives the recipe needed for the given portions
 * 
 * @param {object} recipe object [noodles:, sauce:, mozzarella:, meat:]
 * @param {number} portions 
 * @returns {object} recipe
 */
export function scaleRecipe (recipe, portions) {
    let newRecipe = Object.assign({}, recipe)

    let product = portions / 2
    if (product !== 0) {
        for (let ingredient in recipe) {
            newRecipe[ingredient] = recipe[ingredient] * product
        }
    }

    return newRecipe
}