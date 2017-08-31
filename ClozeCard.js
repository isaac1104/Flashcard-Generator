function ClozeCard(text, cloze) {
  if (text.includes(cloze) && this instanceof ClozeCard) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
  } else if (!text.includes(cloze)) {
    console.log("Oops! " + cloze + " is not in " + text);
  } else {
    return new ClozeCard(text, cloze);
  }
}

module.exports = ClozeCard;
