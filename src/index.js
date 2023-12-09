import analyzer from "./analyzer.js";
const textarea = document.querySelector('[name="user-input"]');
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector(
  '[data-testid="character-count"]'
);
const characterNoSpacesCount = document.querySelector(
  '[data-testid="character-no-spaces-count"]'
);
textarea.addEventListener("keyup", allMetricsUpdate);
function allMetricsUpdate() {
  const text = textarea.value;
  wordCount.textContent = analyzer.getWordCount(text);
  characterCount.textContent = analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent =
    analyzer.getCharacterCountExcludingSpaces(text);
}
