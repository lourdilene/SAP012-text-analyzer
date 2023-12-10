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
  wordCount.textContent = "Quant. de palavras: 0";
  characterCount.textContent = "Caracteres: 0";
  characterNoSpacesCount.textContent = "Quant. caracteres s/ espaços: 0";
  numberCount.textContent = "Números: 0";
  numberSum.textContent = "Soma de números: 0";
  wordLengthAverage.textContent = "Compr. médio das palavras: 0";
}

function allMetricsUpdate() {
  const text = textarea.value;
  wordCount.textContent = "Quant. de palavras: " + analyzer.getWordCount(text);
  characterCount.textContent =
    "Caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent =
    "Quant. caracteres s/ espaços: " +
    analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Números: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma de números: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent =
    "Compr. médio das palavras: " + analyzer.getAverageWordLength(text);
}
