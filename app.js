const BasicCard = require("./BasicCard");
const ClozeCard = require("./ClozeCard");

var flashCard = new BasicCard ("Who was the first president of the United States?", "George Washington");

var clozeCard = new ClozeCard ("George Washington was the first president of the United States.", "George Washington");

var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log(clozeCard.cloze);
console.log(clozeCard.fullText);
console.log(clozeCard.partial);
