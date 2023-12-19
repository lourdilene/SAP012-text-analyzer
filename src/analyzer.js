const analyzer = {
  isTextValid: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    return text.trim().length > 0 && pattern.test(text);
  },
  getWordCount: (text) => {
    if (!analyzer.isTextValid(text)) {
      return 0;
    }
    const countWordsInText = text.trim().split(" ");
    return countWordsInText.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (!analyzer.isTextValid(text)) {
      return 0;
    }
    const regex = /[,." "]/g;
    const totalCharactere = text.replace(regex, "");
    return totalCharactere.length;
  },
  getAverageWordLength: (text) => {
    if (!analyzer.isTextValid(text)) {
      return 0;
    }
    const wordsAndNumbersInText = text.trim().split(" ");
    let wordsLength = 0;
    for (let index = 0; index < wordsAndNumbersInText.length; index++) {
      const word = wordsAndNumbersInText[index];
      wordsLength += word.length;
    }

    const media = wordsLength / wordsAndNumbersInText.length;
    return parseFloat(media.toFixed(2));
  },
  getNumberCount: (text) => {
    if (!analyzer.isTextValid(text)) {
      return 0;
    }
    const regex = /[.,!?]$/g;
    const textWithoutPunctuation = text.replace(regex, "");
    const wordsAndNumbersInText = textWithoutPunctuation.trim().split(" ");
    let qntNumbers = 0;
    wordsAndNumbersInText.forEach((word) => {
      if (typeof parseInt(word) === "number" && !isNaN(word)) {
        qntNumbers += 1;
      }
    });
    return qntNumbers;
  },
  getNumberSum: (text) => {
    if (!analyzer.isTextValid(text)) {
      return 0;
    }
    const regex = /[.,!?]$/g;
    const textWithoutPunctuation = text.replace(regex, "");
    const wordsAndNumbersInText = textWithoutPunctuation.trim().split(" ");
    let numberSum = 0;
    wordsAndNumbersInText.forEach((word) => {
      if (
        (typeof parseInt(word) === "number" ||
          typeof parseFloat(word) === "number") &&
        !isNaN(word)
      ) {
        numberSum += +word; //convert a string to a number
      }
    });
    return numberSum;
  },
};

export default analyzer;
