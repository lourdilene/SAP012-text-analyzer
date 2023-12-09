import analyzer from "./analyzer.js";
const textarea = document.querySelector('[name="user-input"]');
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector(
  '[data-testid="character-count"]'
);
const characterNoSpacesCount = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
const wordLengthAverage = document.querySelector(
  '[data-testid="word-length-average"]'
);
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
textarea.addEventListener("keyup", allMetricsUpdate);
function allMetricsUpdate() {
  const text = textarea.value;
  wordCount.textContent = analyzer.getWordCount(text);
  characterCount.textContent = analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent =
    analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = analyzer.getNumberCount(text);
  numberSum.textContent = analyzer.getNumberSum(text);
  wordLengthAverage.textContent = analyzer.getAverageWordLength(text);
}
