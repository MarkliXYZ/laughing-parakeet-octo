const searchForm = document.getElementById("searchForm");
const wordInput = document.getElementById("wordInput");
const resultsSection = document.getElementById("resultsSection");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const word = wordInput.value.trim();

  if (!word) return;

  await searchWord(word);
});

async function searchWord(word) {
  resultsSection.innerHTML = `<div class="loading">Searching...</div>`;

  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    displayResults(response.data[0]);
  } catch (error) {
    resultsSection.innerHTML = `
      <div class="error-message">
        Word not found. Please try another word.
      </div>
    `;
  }
}

function displayResults(wordData) {
  const phonetic = wordData.phonetic || wordData.phonetics?.[0]?.text || "";
  const audioUrl = wordData.phonetics?.find((p) => p.audio)?.audio || "";

  const meaningsHTML = wordData.meanings
    .map(
      (meaning) => `
    <div class="meaning-item">
      <h3 class="part-of-speech">${meaning.partOfSpeech}</h3>
      <ul class="definitions-list">
        ${meaning.definitions
          .map(
            (def) => `
          <li class="definition-item">
            <p class="definition-text">${def.definition}</p>
            ${def.example ? `<p class="example">"${def.example}"</p>` : ""}
          </li>
        `,
          )
          .join("")}
      </ul>
    </div>
  `,
    )
    .join("");

  resultsSection.innerHTML = `
    <div class="word-result">
      <div class="word-header">
        <h2 class="word-title">${wordData.word}</h2>
        ${
          phonetic
            ? `
          <div class="phonetic-wrapper">
            <p class="phonetic">${phonetic}</p>
            ${audioUrl ? `<button class="audio-button" onclick="playAudio('${audioUrl}')">🔊 Play</button>` : ""}
          </div>
        `
            : ""
        }
      </div>
      <div class="meanings-list">
        ${meaningsHTML}
      </div>
    </div>
  `;
}

window.playAudio = function (url) {
  const audio = new Audio(url);
  audio.play();
};
