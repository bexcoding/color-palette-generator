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

function createNewHex() {
    let newHex = "#";
    for (let i = 0; i < 6; i++) {
        let newValue = Math.floor(Math.random() * 16); //number [0, 15]
        newValue = convertNumToHex(newValue) // hex [0, F]
        newHex += newValue;
    }
    return newHex;
}

function createPaletteList(paletteSize) {
    let paletteList = [];
    for (let i = 0; i < paletteSize; i++) {
        paletteList.push(createNewHex());
    }
    return paletteList;
}

function updateVal(sliderVal) {
    document.getElementById('slider-int').innerHTML = sliderVal;
}

function countSquares() {
    const squareCount = document.getElementsByClassName('square');
    return squareCount.length;
}

function getRows(items) {
    if (items > 5) {
        return Math.ceil(items / 5);
    } else {
        return 1;
    };
}

function getColumns(items) {
    if (items >= 5) {
        return 5;
    } else {
        return items;
    };
}

function makeSquare(color) {
    const square = document.createElement('div');
    square.innerHTML = color;
    square.style.backgroundColor = color;
    square.setAttribute('class', 'square');
    square.setAttribute('id', `square-${countSquares() + 1}`);
    document.getElementById('display-area').appendChild(square);
}

function resetScreen(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    };
}

function randomPalette() {
    resetScreen(document.getElementById('display-area'));
    const sliderVal = document.getElementById('slider').value;
    const paletteList = createPaletteList(sliderVal);
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
}