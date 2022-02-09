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
    
    let encodedLetters = []; //массив из строк, (полученных нарезкой по 10 стмволов) переданного выражения

    for (let i = 0; i <= expr.length-10; i += 10) {
        encodedLetters.push(expr.substring(i, i + 10));             // добавить в массив извлеченную строку (состоящую из 0 и 1) нарезанную по 10 символов
    }

    let decodedString = '';                                         // переводим строки,состоящие из 10-ти 0 и 1 в строки состоящие из 2-х символов - и ., ну и пробел
    encodedLetters.forEach(function (encodedLetter) {

        if (encodedLetter == '**********') {                        // находим пробел
            decodedString = decodedString + ' ';
            return;
        }

        let letter = '';                                            //получаем вместо каждой строки в массиве,состоящей из десяти 0 и 1 строку состоящую из  "- .", ну и если были ********* то- " "
        for (let i = 0; i <= encodedLetter.length - 2; i += 2) {
            let symbol = encodedLetter.substring(i, i + 2);         // делим каждую строку (состоящую из 10-ти 0 и 1) по два 0 и 1 
            if (symbol == '00') {                                   // отсекаем 00 ()
                continue;
            }
            if (symbol == '10') {                                   // находим точки
                letter = letter + '.';
            }
            if (symbol == '11') {                                   // находим тире
                letter = letter + '-';
            }
            
        }
        decodedString = decodedString + MORSE_TABLE[letter];        // декодируем строку по ключу Letter
    });
    return decodedString;
}

module.exports = {
    decode
}