function ClozeCard(text, cloze) {
  if (text.includes(cloze)) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
  } else {
    console.log("Oops!" + cloze + " is not in " + text);
  }
}

module.exports = ClozeCard;
