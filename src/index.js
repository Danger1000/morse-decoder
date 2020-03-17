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
  '': ' ',
};
function decode(expr) {
 let string = expr.replace(/(\d)(?=(\d{10})+(\D|$))/g, '$1 ')
 let arr = string.replace(/10/g, '.') ;
 arr = arr.replace(/11/g, '-');
 arr = arr.replace(/[0]+/g, '');
 for(let i = 0; i<arr.length; i++){
      arr = arr.replace('**********', '  ');
  }
  arr = arr.split(' ');
let dec = arr.reduce((string, obj) => {
string += table[obj];
return string;
}, '')
  return dec;
}
module.exports = {
  decode
}

module.exports = {
    decode
}
