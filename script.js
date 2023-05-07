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

function randomHex() {
    let newHex = "#";
    for (let i = 0; i < 6; i++) {
        let newValue = Math.floor(Math.random() * 16); //number [0, 15]
        newValue = convertNumToHex(newValue) // hex [0, F]
        newHex += newValue;
    }
    return newHex;
}

function createPaletteList(paletteSize, f) {
    let paletteList = [];
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
 * makes a random color palette and displays it in the 'display-area'
 */
function randomPalette() {
    resetScreen(document.getElementById('display-area'));
    const sliderVal = document.getElementById('slider').value;
    const paletteList = createPaletteList(sliderVal, randomHex);
    for (let p of paletteList) {
        makeSquare(p);
    };
    const squares = countSquares();
    const widthPercent = (100 / getColumns(squares));
    const heightPercent = (100 / getRows(squares));
    for (let s of (document.getElementsByClassName('square'))) {
        s.style.width = `${widthPercent.toString()}%`;
        s.style.height = `${heightPercent.toString()}%`;
    }; 

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
     */
    function makeSquare(color) {
        const square = document.createElement('div');
        square.innerHTML = color;
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
}