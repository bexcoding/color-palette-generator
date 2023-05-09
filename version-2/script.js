/*
Title: Color generator script, version 2
Description: Script to be used with the color generator website for creating 
             different types of color palettes of varying sizes.
Last Updated: May 8, 2023
Developer: Alexander Beck
Email: beckhv2@gmail.com
Github: https://github.com/bexcoding
*/


/**
 * converts a single number to a single hex value
 * @param {number} decimalNumber - the number to be converted
 * @returns string of a hex value
 */
function convertNumToHex(decimalNumber) {
    if (decimalNumber < 10) {
        return decimalNumber;
    } else if (decimalNumber === 10) {
        return "A";
    } else if (decimalNumber === 11) {
        return "B";
    } else if (decimalNumber === 12) {
        return "C";
    } else if (decimalNumber === 13) {
        return "D";
    } else if (decimalNumber === 14) {
        return "E";
    } else {
        return "F";
    }
}


/**
 * converts a single hex value to a single decimal number
 * @param {string} hexString - the string to be converted
 * @returns decimal number
 */
function convertHexToNum(hexString) {
    if (Number(hexString)) {
        return Number(hexString);
    } else if (hexString === "0") {
        return 0;
    } else if (hexString === "A") {
        return 10;
    } else if (hexString === "B") {
        return 11;
    } else if (hexString === "C") {
        return 12;
    } else if (hexString === "D") {
        return 13;
    } else if (hexString === "E") {
        return 14;
    } else {
        return 15;
    }
}


/**
 * converts hex values to rgb values
 * @param {string} hex - two hex values that represent a single rgb value
 * (example: 'A4' -> (10*16 + 4 = 164))
 * @returns rgb numerical value equivalent to two hex values
 */
function hexToRgb(hex) {
    let rgb = 0;
    let firstHex = hex.slice(0,1);
    firstHex = convertHexToNum(firstHex);
    rgb += (firstHex * 16);
    let secondHex = hex.slice(1);
    secondHex = convertHexToNum(secondHex);
    rgb += secondHex;
    return rgb;
}


/**
 * converts rgb values to hex values
 * @param {number} rgb - rgb value from 0 to 255
 * @returns string of hex value equivalent to one rgb value 
 * (example: 255 -> 'FF')
 */
function rgbToHex(rgb) {
    let hex = "";
    let firstNum = Math.floor(rgb / 16);
    hex += convertNumToHex(firstNum);
    let secondNum = Math.floor(rgb % 16);
    hex += convertNumToHex(secondNum);
    return hex;
}


/**
 * checks the brightness of the color square and returns the color that the 
 * text should be
 * @param {string} hex - a single hex color (example: '#A4B266')
 * @returns either 'white' or 'black'
 */
function getBrightness(hex) {
    let color = hex.slice(1);
    let first = color.slice(0,2);
    let second = color.slice(2,4);
    let third = color.slice(4,6);
    let total = hexToRgb(first) + hexToRgb(second) + hexToRgb(third);
    if (total < 300) {
        return 'white';
    } else {
        return 'black';
    };
}


/**
 * creates a random hex value for a single color
 * @returns string of hex color (example: '#FFA328')
 */
function randomHex() {
    let newHex = "#";
    for (let i = 0; i < 3; i++) {
        let newValue = Math.floor(Math.random() * 256); // number [0, 255]
        newHex += rgbToHex(newValue);
    }
    return newHex;
}


/**
 * creates a random hex value for a single light color
 * @returns string of hex color (example: '#FFA328')
 */
function lightHex() {
    let newHex = "#";
    for (let i = 0; i < 3; i++) {
        let newValue = Math.floor(Math.random() * 121); // number [0, 120]
        newValue = 255 - newValue; // number [134, 255]
        newHex += rgbToHex(newValue);
    }
    return newHex;
}


/**
 * creates a random hex value for a single dark color
 * @returns string of hex color (example: '#FFA328')
 */
function darkHex() {
    let newHex = "#";
    for (let i = 0; i < 3; i++) {
        let newValue = Math.floor(Math.random() * 121); // number [0, 120]
        newHex += rgbToHex(newValue);
    }
    return newHex;
}


/**
 * creates a random hex value for a single warm color
 * @returns string of hex color (example: '#FFA328')
 */
function warmHex() {
    let newHex = "#";
    let redValue = Math.floor(Math.random() * 31); // number [0, 30]
    redValue = 255 - redValue; // number [225, 255]
    newHex += rgbToHex(redValue);
    let greenValue = Math.floor(Math.random() * 201); // number [0, 200]
    newHex += rgbToHex(greenValue)
    let blueValue = Math.floor(Math.random() * 101); // number [0, 100]
    newHex += rgbToHex(blueValue)
    return newHex;
}


/**
 * creates a random hex value for a single cool color
 * @returns string of hex color (example: '#FFA328')
 */
function coolHex() {
    let newHex = "#";
    let redValue = Math.floor(Math.random() * 151); // number [0, 150]
    newHex += rgbToHex(redValue);
    let greenValue = Math.floor(Math.random() * 256); // number [0, 255]
    newHex += rgbToHex(greenValue)
    let blueValue = Math.floor(Math.random() * 51); // number [0, 50]
    blueValue = 255 - blueValue; // number [205, 255]
    newHex += rgbToHex(blueValue);
    return newHex;
}


/**
 * creates a list of hex values to represent the color palette
 * @param {number} paletteSize - number of different hex values to create
 * @param {function} f - function for creating different hex values
 * @returns list of hex strings
 */
function createPaletteList(paletteSize, f) {
    const paletteList = [];
    for (let i = 0; i < paletteSize; i++) {
        paletteList.push(f());
    }
    return paletteList;
}


/**
 * Updates the number displayed next to the slider
 * @param {number} sliderVal - value collected from the slider
 */
function updateVal(sliderVal) {
    document.getElementById('slider-int').innerHTML = sliderVal;
}


/**
* @returns number of color squares in the display area
*/
function countSquares() {
    const squareCount = document.getElementsByClassName('square');
    return squareCount.length;
}


/**
 * calculates how many rows are needed to display the colors
 * @param {number} squares - number of squares in the display area
 * @returns number 1 through 5
 */
function getRows(squares) {
    if (squares > 5) {
        return Math.ceil(squares / 5);
    } else {
        return 1;
    };
}


/**
 * calculates how many columns are needed to display the colors
 * @param {number} squares - number of squares in the display area
 * @returns number 1 through 5
 */
function getColumns(squares) {
    if (squares >= 5) {
        return 5;
    } else {
        return squares;
    };
}


/**
 * makes a color square in the display area
 * @param {string} color - a single hex value for a color 
 * (example: '#B233F0')
 */
function makeSquare(color) {
    const square = document.createElement('div');
    square.innerHTML = color;
    square.style.color = getBrightness(color);
    square.style.backgroundColor = color;
    square.setAttribute('class', 'square');
    square.setAttribute('id', `square-${countSquares() + 1}`);
    document.getElementById('display-area').appendChild(square);
}


/**
 * resets the screen to remove any color squares 
 * @param {*} parent - the display area where the color squares appear
 */
function resetScreen(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    };
}


/**
 * clears the current display and creates a new palette to display based on 
 * the input function
 * @param {function} f - function for selecting palette (example: randomHex())
 */
function createPalette(f) {
    // clear the display of any current colors
    resetScreen(document.getElementById('display-area'));
    const sliderVal = document.getElementById('slider').value;
    // create a list of hex numbers and make a color square for each
    const paletteList = createPaletteList(sliderVal, f);
    for (let p of paletteList) {
        makeSquare(p);
    };
    // count the total number of color squares and set height and width 
    const squares = countSquares();
    const widthPercent = (100 / getColumns(squares));
    const heightPercent = (100 / getRows(squares));
    for (let s of (document.getElementsByClassName('square'))) {
        s.style.width = `${widthPercent.toString()}%`;
        s.style.height = `${heightPercent.toString()}%`;
    }; 
}


/**
 * creates a random color palette and displays it in the 'display-area'
 */
const randomPalette = function() {
    createPalette(randomHex);
}


/**
 * creates a random light color palette and displays it in the 'display-area'
 */
const lightPalette = function() {
    createPalette(lightHex);
}


/**
 * creates a random dark color palette and displays it in the 'display-area'
 */
const darkPalette = function() {
    createPalette(darkHex);
}


/**
 * creates a random dark warm palette and displays it in the 'display-area'
 */
const warmPalette = function() {
    createPalette(warmHex);
}


/**
 * creates a random cool color palette and displays it in the 'display-area'
 */
const coolPalette = function() {
    createPalette(coolHex);
}