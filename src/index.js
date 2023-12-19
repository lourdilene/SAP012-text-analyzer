import analyzer from "./analyzer.js";

const textarea = document.querySelector('[name="user-input"]');
const button = document.getElementById("reset-button");
const copyButton = document.getElementById("copy-button");

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
copyButton.addEventListener("click", copyContent);

const textWordCount = "Word count: ";
const textCharacterCount = "Character count: ";
const textCharacterNoSpacesCount = "Character no spaces count: ";
const textNumberCount = "Number count: ";
const textNumberSum = "Number sum: ";
const textWordLengthAverage = "Word length average: ";

function clearAllMetricsAndText() {
  textarea.value = "";
  wordCount.textContent = textWordCount + 0;
  characterCount.textContent = textCharacterCount + 0;
  characterNoSpacesCount.textContent = textCharacterNoSpacesCount + 0;
  numberCount.textContent = textNumberCount + 0;
  numberSum.textContent = textNumberSum + 0;
  wordLengthAverage.textContent = textWordLengthAverage + 0;
}

function allMetricsUpdate() {
  const text = textarea.value;
  wordCount.textContent = `${textWordCount} ${analyzer.getWordCount(text)}`;
  characterCount.textContent = `${textCharacterCount} ${analyzer.getCharacterCount(
    text
  )}`;
  characterNoSpacesCount.textContent = `${textCharacterNoSpacesCount} ${analyzer.getCharacterCountExcludingSpaces(
    text
  )}`;
  numberCount.textContent = `${textNumberCount} ${analyzer.getNumberCount(
    text
  )}`;
  numberSum.textContent = `${textNumberSum} ${analyzer.getNumberSum(text)}`;
  wordLengthAverage.textContent = `${textWordLengthAverage} ${analyzer.getAverageWordLength(
    text
  )}`;
}

function copyContent() {
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard
    .writeText(textarea.value)
    .then(() => {
      alert("Copied the text: " + textarea.value);
    })
    .catch((err) => {
      alert("Something is wrong: " + err);
    });
}
