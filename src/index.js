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
    
    expr = expr.split('**********');
    let resultArr = [];

label: for (let str of expr) {
        let tempArr = [];
        for (let i = 0; i < str.length; i += 2) {
            let tempS = ''
            if (str[i] + str[i + 1] == '00') {
                    continue;
            }
            else if (str[i] + str[i + 1] == '10') {
                    tempS = '.';
            }
            else if (str[i] + str[i + 1] == '11') {
                    tempS = '-';
            }
            tempArr.push(tempS);

            if ( i != 0 && (i + 2) % 10 == 0) {
                resultArr.push([tempArr.join("")]);
                tempArr = [];
            }
        }
        resultArr.push(' ');
    }

    resultArr = resultArr.map(w => {
        if (w == ' ') return ' ';
        else {
        return MORSE_TABLE[w];
        }

    }).join('').trim();


    return resultArr;
}

module.exports = {
    decode
}