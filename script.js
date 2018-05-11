const fs = require('fs');
const dictionary = fs.readFileSync('/usr/share/dict/words').toString().trim().split('\n')


console.log(dictionary[22])