const analyzer = {
  getWordCount: (text) => {
    const countWordsInText = text.split(" ");
    return countWordsInText.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const regex = /[,." "]/g;
    const totalCharactere = text.replace(regex, "");
    // let totalCharactere = 0;
    // wordsInText.forEach((word) => {
    //   totalCharactere = totalCharactere + word.length;
    // });
    return totalCharactere.length;
  },
  getAverageWordLength: (text) => {
    return text;
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    return text;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    return text;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
