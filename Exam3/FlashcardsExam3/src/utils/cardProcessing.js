/**
 * Adds an isKnown flag to each card object in the array.
 * Modifies the array in-place by setting isKnown to false for all cards.
 *
 * @param {Array<object>} cardArray - Array of card objects to modify
 * @returns {void}
 */
export function addFlags(cardArray){
    // NOTE: this function does change the array in-place. 
    // This was done because altering the data here did not corrupt the file/data.
    // This way currently saves memory, but should chnaging the array in-place become an issue,
    // use the .map() function instead. :)
    cardArray.forEach((cardObject) => {
        cardObject.isKnown = false
    })
  }

/**
 * Shuffles an array of cards using the Fisher-Yates algorithm.
 * Modifies the array in-place and returns it.
 *
 * @param {Array<object>} cardArray - Array of card objects to shuffle
 * @returns {Array<object>} The shuffled array (same reference)
 */
export function shuffleCards(cardArray){
    let length = cardArray?.length

    for (let i = length - 1; i >= 0; i--)
    {

        // Throw some randomness in
        const randomNum = Math.random()

        const k = Math.floor(randomNum * (i + 1))

        const temp = cardArray[i]
        cardArray[i] = cardArray[k]
        cardArray[k] = temp
    }

    return cardArray;
}

