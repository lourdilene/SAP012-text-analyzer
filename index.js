import analyzer from "./analyzer.js";
const textarea = document.querySelector('[name="user-input"]');
const button = document.getElementById("reset-button");
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
button.addEventListener("click", clearAllMetricsAndText);

function clearAllMetricsAndText() {
  textarea.value = "";
  wordCount.textContent = "Word count: 0";
  characterCount.textContent = "Character count: 0";
  characterNoSpacesCount.textContent = "Character no spaces count: 0";
  numberCount.textContent = "Number: 0";
  numberSum.textContent = "Number sum: 0";
  wordLengthAverage.textContent = "Word length average: 0";
}

function allMetricsUpdate() {
  const text = textarea.value;
  wordCount.textContent = "Word count: " + analyzer.getWordCount(text);
  characterCount.textContent =
    "Character count: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent =
    "Character no spaces count: " +
    analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Number: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Number sum: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent =
    "Word length average: " + analyzer.getAverageWordLength(text);
}
