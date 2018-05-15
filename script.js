const fs = require('fs');
const dictionary = fs.readFileSync('/usr/share/dict/words').toString().trim().split('\n')


scrabbleWords = (letters) => {
  let arrayOfWords = findWords(letters)

  return sortWords(arrayOfWords)
}

findWords = (letters) => {
  let wordArray = dictionary.reduce((acc, word) => {
    if(checkLetters(letters, word)){
      acc.push({word: word, score: calculateScore(word)})
    }
    return acc
  },[])
  return wordArray
}

checkLetters = (letters, word) => {
  let lettersArray = letters.toLowerCase().split('')
  let wordArray = word.toLowerCase().split('')
  for (var i = 0; i < wordArray.length; i++) {
    if(lettersArray.indexOf(wordArray[i]) !== -1){
      lettersArray.splice(lettersArray.indexOf(wordArray[i]), 1);
    } else {
      return false
    }
  }
  return true
}


calculateScore = (word) => {
  const letterScore = { e: 1, a: 1, i: 1, l: 1, n: 1, o: 1, r: 1, s: 1, t: 1, u:1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y:4, k: 5, j: 8, x: 8, q: 10, z:10  }
  return word.toLowerCase().split('').reduce((acc, letter)=> {
    return acc += letterScore[letter]
  }, 0)
}

sortWords=(array)=>{
  return array.sort((a, b)=> {
    return b.score - a.score 
  })

}




console.log(scrabbleWords('god'))