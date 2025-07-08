const sentence = "Javascript is fun and powerful to learn"
const splitedSentence = sentence.split(" ") ;
console.log(splitedSentence);
longerWords = splitedSentence.filter(word=>word.length>4).reverse().join(' ').toLocaleUpperCase()
                        
console.log(longerWords)

