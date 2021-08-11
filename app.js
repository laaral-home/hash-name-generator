let generatedName             = document.getElementById("name");

const numberCharacterCodes    = arrayLowToHigh(48, 57);
const uppercaseCharacterCodes = arrayLowToHigh(65, 90);
const lowercaseCharacterCodes = arrayLowToHigh(97, 122);

const arraySimpleNumber       = [3, 5, 7, 11];

document.addEventListener('DOMContentLoaded', function () {
    generatedName.innerHTML = generateName();
});

/**
 * @param {number} low 
 * @param {number} high 
 * 
 * @returns {array}
 */
function arrayLowToHigh(low, high) {
    let array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

/**
 * @param {array} array
 * 
 * @returns {array} 
 */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**
 * @returns {string}
 */
function generateName() {
    let charCodes = numberCharacterCodes
                    .concat(lowercaseCharacterCodes)
                    .concat(uppercaseCharacterCodes);
    
    const shuffleArraySimpleNumber = shuffle(arraySimpleNumber);

    let genName = [];
    let name = '';

    shuffleArraySimpleNumber.forEach((value) => {
        genName = [];

        for (let i = 0; i < value; i++) {
            let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
            genName.push(String.fromCharCode(characterCode));
        }
        
        name += genName.join('');
        name += '-';
    });

    name = name.substring(0, name.length - 1);

    return name;
}