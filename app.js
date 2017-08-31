const BasicCard = require("./BasicCard");
const ClozeCard = require("./ClozeCard");

var flashCard = new BasicCard ("Who was the first president of the United States?", "George Washington");

console.log(flashCard.front);
console.log(flashCard.back);

var flashCard2 = BasicCard("Who was the first president of the United States?", "George Washington");

console.log(flashCard2.front);
console.log(flashCard2.back);

var clozeCard = new ClozeCard ("George Washington was the first president of the United States.", "George Washington");

console.log(clozeCard.fullText);
console.log(clozeCard.cloze);
console.log(clozeCard.partial);

var clozeCard2 = ClozeCard ("George Washington was the first president of the United States.", "George Washington");

console.log(clozeCard2.fullText);
console.log(clozeCard2.cloze);
console.log(clozeCard2.partial);

var brokenCloze = new ClozeCard("This doesn't work", "oops");
