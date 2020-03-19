const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = Object.entries(MORSE_TABLE);
    const vocabulary = new Map();

    arr.forEach(item => vocabulary.set(toDigits(item[0]), item[1]));

    let num = Math.ceil(expr.length / 10);
    let chunks = new Array(num);

    for (let i = 0, j = 0; i < num; i += 1, j += 10) {
        chunks[i] = expr.substr(j, 10);
    }

    return chunks.map(item => {
        if (item === '**********') return ' ';
        return vocabulary.get(item);
    }).join('');
}

function toDigits(str) {
    const resArr = str.split('').map(char => {
        if (char === '.') return '10';
        if (char === '-') return '11';
    });
    if (resArr.length === 10) return resArr.join('');
    const num = 10 - (resArr.length * 2);
    const nullArray = new Array(num).fill('0');
    return nullArray.concat(resArr).join('');
}

module.exports = {
    decode
}
