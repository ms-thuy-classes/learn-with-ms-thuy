---
layout: post
title: "🌿 Listening Lesson: Gardening Vocabulary in Action"
date: 2025-04-20
categories: Listening
tags: [listening, gardening, audio, quiz]
featured_image: "https://images.pexels.com/photos/1264247/pexels-photo-1264247.jpeg"
excerpt: "Practice listening with a real-life story about gardening. Learn vocabulary, take a quiz, and check your answers with a pie chart."
---

<style>
  /* ========== GLOBAL PASTEL STYLES ========== */
  .listening-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  h2 {
    font-size: 1.8rem;
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    display: inline-block;
    padding: 0 0.8rem 0.2rem;
    border-radius: 40px;
    margin: 2rem 0 1rem;
  }
  .pastel-card {
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(4px);
    border-radius: 32px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.05);
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .pastel-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.08);
  }
  button {
    background: linear-gradient(135deg, #f9f0ff, #ffe4f0);
    border: none;
    border-radius: 60px;
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    color: #5a3e7c;
  }
  button:hover {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    color: white;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(161,140,209,0.3);
  }
  /* Vocabulary grid */
  .vocab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.2rem;
    margin-top: 1rem;
  }
  .vocab-item {
    background: white;
    border-radius: 24px;
    padding: 1rem;
    border-left: 6px solid #f5576c;
    transition: 0.2s;
  }
  .vocab-word {
    font-weight: 700;
    font-size: 1.2rem;
    color: #1e1e2a;
  }
  .vocab-ipa {
    font-family: monospace;
    color: #888;
    font-size: 0.85rem;
  }
  .vocab-meaning {
    color: #f5576c;
    margin-top: 0.3rem;
  }
  /* Audio player */
  .audio-player {
    background: #fef5f7;
    border-radius: 80px;
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
  }
  .audio-controls {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }
  .audio-controls button {
    background: #e0d6ff;
    padding: 0.5rem 1rem;
  }
  input[type="range"] {
    flex: 1;
    min-width: 150px;
  }
  .speed-control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .speed-control select {
    padding: 0.3rem 0.8rem;
    border-radius: 40px;
    border: 1px solid #ddd;
    background: white;
  }
  /* Quiz */
  .quiz-question {
    margin: 1.5rem 0;
    padding: 1rem;
    background: #f9f3ff;
    border-radius: 24px;
  }
  .quiz-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }
  .quiz-opt {
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.1s;
  }
  .quiz-opt.selected {
    background: #a18cd1;
    color: white;
  }
  .result-area {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  .pie-chart {
    width: 120px;
    height: 120px;
  }
  .transcript {
    background: #fff9f0;
    border-radius: 24px;
    padding: 1rem;
    margin-top: 1.5rem;
    max-height: 300px;
    overflow-y: auto;
    display: none;
  }
  .transcript.show {
    display: block;
  }
  @media (max-width: 700px) {
    .audio-controls { flex-direction: column; align-items: stretch; }
    .result-area { flex-direction: column; }
  }
</style>

<div class="listening-container">
  <h1>🎧 Listening: A Green Thumb Story</h1>
  <p>Listen to the audio about gardening, learn key vocabulary, then test your understanding.</p>

  <!-- SECTION 1: VOCABULARY -->
  <h2>📚 Vocabulary Preview</h2>
  <div class="vocab-grid" id="vocabList">
    <!-- Filled by JS -->
  </div>

  <!-- SECTION 2: AUDIO PLAYER -->
  <h2>🔊 Audio Lesson</h2>
  <div class="audio-player pastel-card">
    <div class="audio-controls">
      <button id="playBtn">▶ Play</button>
      <button id="pauseBtn">⏸ Pause</button>
      <input type="range" id="seekSlider" value="0" step="0.01">
      <span id="timeDisplay">0:00 / 0:00</span>
      <div class="speed-control">
        <label>⚡ Speed:</label>
        <select id="speedSelect">
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1" selected>1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>
    <audio id="audioElement" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="metadata"></audio>
    <p style="font-size:0.8rem; margin-top:0.5rem;">🎧 *Audio sample – replace with your own audio URL*</p>
  </div>

  <!-- SECTION 3: LISTENING TEST -->
  <h2>📝 Listening Test</h2>
  <div id="quizContainer" class="pastel-card"></div>

  <div class="result-area">
    <button id="checkBtn">✅ Check Answers</button>
    <div class="pie-chart">
      <canvas id="resultChart" width="120" height="120"></canvas>
    </div>
    <div>
      <span id="scoreText">Score: --/--</span>
    </div>
  </div>

  <button id="transcriptBtn">📄 Show Transcript</button>
  <div id="transcriptDiv" class="transcript">
    <strong>📜 Transcript:</strong><br>
    (Replace with your own transcript text. Example: "My grandmother has a real green thumb. She can make any plant thrive. Last spring, she decided to cultivate her own vegetable patch. First, she sowed the seeds in nutrient-rich soil. Within a week, tiny sprouts started to germinate. She pruned the roses and used natural pest control. By summer, the garden was in full bloom – lush vegetation everywhere. Even during a dry spell, her hardy perennials didn't wither away. Gardening is her therapy!")
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  // ========== VOCABULARY DATA ==========
  const vocab = [
    { word: "green thumb", ipa: "/ɡriːn θʌm/", meaning: "khiếu làm vườn" },
    { word: "germinate", ipa: "/ˈdʒɜːmɪneɪt/", meaning: "nảy mầm" },
    { word: "cultivate", ipa: "/ˈkʌltɪveɪt/", meaning: "trồng trọt, canh tác" },
    { word: "prune", ipa: "/pruːn/", meaning: "tỉa cành" },
    { word: "sprout up", ipa: "/spraʊt ʌp/", meaning: "mọc lên nhanh chóng" },
    { word: "nutrient-rich soil", ipa: "/ˈnjuːtriənt rɪtʃ sɔɪl/", meaning: "đất giàu dinh dưỡng" },
    { word: "hardy", ipa: "/ˈhɑːrdi/", meaning: "chịu đựng tốt" },
    { word: "in full bloom", ipa: "/ɪn fʊl bluːm/", meaning: "nở rộ" }
  ];

  // Render vocabulary
  const vocabContainer = document.getElementById('vocabList');
  vocab.forEach(item => {
    const div = document.createElement('div');
    div.className = 'vocab-item';
    div.innerHTML = `
      <div class="vocab-word">${item.word}</div>
      <div class="vocab-ipa">${item.ipa}</div>
      <div class="vocab-meaning">${item.meaning}</div>
    `;
    vocabContainer.appendChild(div);
  });

  // ========== AUDIO PLAYER LOGIC ==========
  const audio = document.getElementById('audioElement');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const seekSlider = document.getElementById('seekSlider');
  const timeDisplay = document.getElementById('timeDisplay');
  const speedSelect = document.getElementById('speedSelect');

  audio.addEventListener('loadedmetadata', () => {
    seekSlider.max = audio.duration;
    updateTimeDisplay();
  });
  audio.addEventListener('timeupdate', () => {
    seekSlider.value = audio.currentTime;
    updateTimeDisplay();
  });
  function updateTimeDisplay() {
    const cur = formatTime(audio.currentTime);
    const dur = formatTime(audio.duration);
    timeDisplay.innerText = `${cur} / ${dur}`;
  }
  function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const mins = Math.floor(sec / 60);
    const remainSec = Math.floor(sec % 60);
    return `${mins}:${remainSec.toString().padStart(2,'0')}`;
  }
  playBtn.addEventListener('click', () => audio.play());
  pauseBtn.addEventListener('click', () => audio.pause());
  seekSlider.addEventListener('input', () => {
    audio.currentTime = seekSlider.value;
  });
  speedSelect.addEventListener('change', () => {
    audio.playbackRate = parseFloat(speedSelect.value);
  });

  // ========== QUIZ QUESTIONS (based on the transcript) ==========
  const questions = [
    { text: "What does 'green thumb' mean?", options: ["Khiếu làm vườn", "Ngón tay xanh", "Cây leo", "Dụng cụ làm vườn"], correct: 0 },
    { text: "What did the grandmother decide to cultivate?", options: ["Roses", "Vegetable patch", "Fruit trees", "Herbs"], correct: 1 },
    { text: "What happens to the seeds within a week?", options: ["They die", "They are harvested", "They germinate", "They are pruned"], correct: 2 },
    { text: "What did she use for pest control?", options: ["Chemicals", "Natural predators", "Soap", "Neem oil"], correct: 1 },
    { text: "What does 'in full bloom' mean?", options: ["Nở rộ", "Héo úa", "Đơm hoa", "Rụng lá"], correct: 0 }
  ];

  let userSelections = new Array(questions.length).fill(null);
  let chart = null;

  function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;
    let html = '';
    questions.forEach((q, idx) => {
      html += `<div class="quiz-question"><strong>${idx+1}. ${q.text}</strong><div class="quiz-options">`;
      q.options.forEach((opt, optIdx) => {
        const isSelected = (userSelections[idx] === optIdx);
        html += `<div class="quiz-opt ${isSelected ? 'selected' : ''}" data-qidx="${idx}" data-optidx="${optIdx}">${opt}</div>`;
      });
      html += `</div></div>`;
    });
    container.innerHTML = html;
    // attach event listeners
    document.querySelectorAll('.quiz-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const qIdx = parseInt(opt.dataset.qidx);
        const optIdx = parseInt(opt.dataset.optidx);
        userSelections[qIdx] = optIdx;
        // re-render to update selected style
        renderQuiz();
      });
    });
  }

  function calculateScore() {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (userSelections[idx] === q.correct) correct++;
    });
    return { correct, total: questions.length };
  }

  function updatePieChart(correct, total) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    if (chart) chart.destroy();
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Correct', 'Wrong'],
        datasets: [{ data: [correct, total - correct], backgroundColor: ['#a18cd1', '#fbc2eb'], borderWidth: 0 }]
      },
      options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'bottom' } } }
    });
  }

  document.getElementById('checkBtn').addEventListener('click', () => {
    const { correct, total } = calculateScore();
    document.getElementById('scoreText').innerText = `Score: ${correct}/${total}`;
    updatePieChart(correct, total);
    // flash animation
    const btn = document.getElementById('checkBtn');
    btn.style.transform = 'scale(0.98)';
    setTimeout(() => btn.style.transform = '', 200);
  });

  // Transcript toggle
  document.getElementById('transcriptBtn').addEventListener('click', () => {
    const transcriptDiv = document.getElementById('transcriptDiv');
    transcriptDiv.classList.toggle('show');
    const btn = document.getElementById('transcriptBtn');
    btn.innerText = transcriptDiv.classList.contains('show') ? '📄 Hide Transcript' : '📄 Show Transcript';
  });

  // Initialize
  renderQuiz();
</script>

<!-- INSTRUCTIONS FOR BEGINNERS (visible but collapsible) -->
<details style="margin-top: 3rem; background: #f9f3ff; padding: 1rem; border-radius: 20px;">
  <summary>📘 How to customize this Listening post</summary>
  <ul>
    <li><strong>Change audio file:</strong> Replace the <code>src</code> attribute of the <code>&lt;audio&gt;</code> tag with your own MP3 URL.</li>
    <li><strong>Edit vocabulary:</strong> Modify the <code>vocab</code> array inside the script – add/remove objects with <code>word, ipa, meaning</code>.</li>
    <li><strong>Edit questions:</strong> Change the <code>questions</code> array – each question needs <code>text, options, correct</code> (index starting from 0).</li>
    <li><strong>Update transcript:</strong> Replace the content inside <code>&lt;div id="transcriptDiv"&gt;</code> with your own transcript text.</li>
    <li><strong>Colors & styling:</strong> Adjust the gradient values in the <code>&lt;style&gt;</code> section (search for <code>linear-gradient</code>).</li>
  </ul>
</details>