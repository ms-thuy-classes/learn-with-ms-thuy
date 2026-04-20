---
layout: post
title: "🌱 Gardening Vocabulary: Flashcards, Table & Quiz"
date: 2026-04-20
categories: Vocabulary
tags: [gardening, flashcards, quiz, interactive]
featured_image: "https://images.pexels.com/photos/1264247/pexels-photo-1264247.jpeg?auto=compress&cs=tinysrgb&w=800"
excerpt: "Learn 20 gardening words with interactive flashcards, a sortable table, and a mixed‑type quiz."
---

<style>
  /* ========== GLOBAL PASTEL GRADIENT STYLES ========== */
  .vocab-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  h2 {
    font-size: 1.8rem;
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    display: inline-block;
    padding: 0 0.5rem 0.2rem;
    border-radius: 20px;
    margin: 1.5rem 0 1rem;
  }
  .pastel-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(4px);
    border-radius: 32px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.05);
    padding: 1.2rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  button, .filter-btn {
    background: linear-gradient(135deg, #f9f0ff, #ffe4f0);
    border: none;
    border-radius: 60px;
    padding: 0.5rem 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    color: #5a3e7c;
    margin: 5px;
  }
  button:hover, .filter-btn.active {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    color: white;
    transform: scale(1.02);
  }
  /* ========== FLASHCARD 3D ========== */
  .flashcard-area {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .flip-card {
    background-color: transparent;
    width: 100%;
    max-width: 500px;
    height: 320px;
    perspective: 1000px;
    cursor: pointer;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border-radius: 28px;
    box-shadow: 0 20px 30px rgba(0,0,0,0.1);
  }
  .flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 28px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
  }
  .flip-card-front { background: linear-gradient(145deg, #ffffff, #fef5f7); }
  .flip-card-back {
    background: linear-gradient(145deg, #f0f7ff, #ffffff);
    transform: rotateY(180deg);
    overflow-y: auto;
  }
  .flash-word { font-size: 2.2rem; font-weight: 700; margin-bottom: 0.5rem; }
  .flash-ipa { font-family: monospace; color: #888; }
  .flash-meaning { font-size: 1.5rem; color: #f5576c; margin-bottom: 1rem; }
  .flash-example { font-size: 1rem; line-height: 1.4; background: #f9f3ff; padding: 0.8rem; border-radius: 20px; }
  .card-controls { display: flex; justify-content: center; gap: 20px; margin: 20px 0; }
  .progress-bar { text-align: center; font-weight: 500; margin-top: 10px; }
  /* ========== VOCABULARY TABLE ========== */
  .table-wrapper { overflow-x: auto; margin-top: 1rem; }
  .vocab-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
    font-size: 0.85rem;
  }
  .vocab-table th, .vocab-table td {
    padding: 12px 10px;
    text-align: left;
    border: 1px solid #e6d9f0;
  }
  .vocab-table th { background: #f9f0ff; color: #5a3e7c; }
  .star-btn { background: none; border: none; font-size: 1.3rem; cursor: pointer; color: #ccc; }
  .star-btn.active { color: #f5576c; }
  /* ========== QUIZ ========== */
  .quiz-options { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; margin: 20px 0; }
  .quiz-option { background: #f3f0ff; padding: 12px; border-radius: 60px; cursor: pointer; text-align: center; }
  .quiz-input { width: 100%; padding: 12px; border-radius: 60px; border: 1px solid #ddd; margin: 10px 0; }
  .quiz-feedback { margin-top: 20px; font-weight: bold; text-align: center; }
  .correct { color: #28a745; }
  .wrong { color: #dc3545; }
</style>

<div class="vocab-container" id="vocabApp">
  <h1>🌱 Gardening Vocabulary</h1>
  <p>Learn 20 essential words for IELTS 7.0+. Use flashcards, table, and quiz to master them.</p>

  <h2>📇 Flashcards</h2>
  <div class="flashcard-area">
    <div class="flip-card" id="flipCard">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="flash-word" id="flashWord"></div>
          <div class="flash-ipa" id="flashIpa"></div>
          <button id="playFlashAudio">🔊 Play word</button>
          <p style="font-size:0.8rem; margin-top:10px;">👆 Tap to flip</p>
        </div>
        <div class="flip-card-back">
          <div class="flash-meaning" id="flashMeaning"></div>
          <div class="flash-example" id="flashExample"></div>
          <button id="playExampleAudio" style="margin-top:10px;">🔊 Play example</button>
        </div>
      </div>
    </div>
  </div>
  <div class="card-controls">
    <button id="prevCardBtn">◀ Previous</button>
    <button id="nextCardBtn">Next ▶</button>
  </div>
  <div class="progress-bar" id="flashProgress"></div>

  <h2>📋 Vocabulary Table</h2>
  <div class="filter-group">
    <button id="filterAllBtn" class="filter-btn active">All Words</button>
    <button id="filterStarBtn" class="filter-btn">⭐ Starred Only</button>
  </div>
  <div class="table-wrapper">
    <table class="vocab-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Word</th>
          <th>IPA</th>
          <th>Audio</th>
          <th>Meaning</th>
          <th>Example</th>
          <th>⭐</th>
        </tr>
      </thead>
      <tbody id="tableBody"></tbody>
    </table>
  </div>

  <h2>📝 Quiz</h2>
  <button id="startQuizBtn">🌱 Start Quiz (20 questions)</button>
  <div id="quizArea" style="display:none;">
    <div id="quizContainer"></div>
  </div>
  <div id="resultArea" style="display:none;"></div>
</div>

<script>
  const vocabList = [
    { word: "green thumb", ipa: "/ɡriːn θʌm/", meaning: "khiếu làm vườn", example: "My grandmother has a real green thumb; she can make almost any plant thrive." },
    { word: "germinate", ipa: "/ˈdʒɜːmɪneɪt/", meaning: "nảy mầm", example: "Seeds require the right balance of moisture and warmth to germinate successfully." },
    { word: "cultivate", ipa: "/ˈkʌltɪveɪt/", meaning: "trồng trọt, canh tác", example: "Many people today choose to cultivate their own vegetables to ensure they are organic." },
    { word: "prune", ipa: "/pruːn/", meaning: "tỉa cành", example: "It is essential to prune the rose bushes in early spring to encourage new growth." },
    { word: "sprout up", ipa: "/spraʊt ʌp/", meaning: "mọc lên nhanh chóng", example: "After the first spring rain, tiny green shoots began to sprout up all over the garden." },
    { word: "nutrient-rich soil", ipa: "/ˈnjuːtriənt rɪtʃ sɔɪl/", meaning: "đất giàu dinh dưỡng", example: "Lush gardens are usually the result of planting in nutrient-rich soil." },
    { word: "wither away", ipa: "/ˈwɪðər əˈweɪ/", meaning: "héo úa, tàn lụi", example: "If you neglect your indoor plants during the summer, they will quickly wither away." },
    { word: "hardy", ipa: "/ˈhɑːrdi/", meaning: "chịu đựng tốt", example: "Lavender is a hardy plant that can survive even in very poor soil conditions." },
    { word: "take root", ipa: "/teɪk ruːt/", meaning: "bén rễ", example: "It takes about two weeks for the cuttings to take root in the new compost." },
    { word: "perennial", ipa: "/pəˈreniəl/", meaning: "cây lâu năm", example: "I prefer perennials over annuals because they bloom year after year." },
    { word: "pot on", ipa: "/pɒt ɒn/", meaning: "chuyển cây sang chậu lớn", example: "The seedlings have grown significantly, so I need to pot them on this weekend." },
    { word: "in full bloom", ipa: "/ɪn fʊl bluːm/", meaning: "nở rộ", example: "The botanical garden is breathtaking when the cherry blossoms are in full bloom." },
    { word: "pest control", ipa: "/pest kənˈtrəʊl/", meaning: "kiểm soát sâu bệnh", example: "Organic gardeners often use natural predators like ladybugs for pest control." },
    { word: "lush vegetation", ipa: "/lʌʃ ˌvedʒɪˈteɪʃn/", meaning: "thảm thực vật tươi tốt", example: "The tropical region is known for its lush vegetation and high biodiversity." },
    { word: "die back", ipa: "/daɪ bæk/", meaning: "héo đi (gốc vẫn sống)", example: "Don't worry if the lilies die back in winter; they will return in the spring." },
    { word: "sow the seeds", ipa: "/səʊ ðə siːdz/", meaning: "gieo hạt", example: "April is the ideal month to sow the seeds for your summer vegetable patch." },
    { word: "drainage", ipa: "/ˈdreɪnɪdʒ/", meaning: "sự thoát nước", example: "Poor drainage can lead to root rot, which is fatal for most potted plants." },
    { word: "thrive", ipa: "/θraɪv/", meaning: "phát triển mạnh mẽ", example: "Succulents thrive in bright sunlight and require very little maintenance." },
    { word: "fragrant", ipa: "/ˈfreɪɡrənt/", meaning: "thơm ngát", example: "I planted jasmine near the window so its fragrant scent could drift into the house." },
    { word: "drought-resistant", ipa: "/draʊt rɪˈzɪstənt/", meaning: "chịu hạn", example: "Many Australian native plants are drought-resistant, perfect for dry climates." }
  ];

  let favorites = JSON.parse(localStorage.getItem('gardeningFavs')) || new Array(vocabList.length).fill(false);
  let currentCard = 0;
  let quizIndex = 0;
  let score = 0;
  let quizQuestions = [];
  let wrongItems = [];

  function speakText(text) {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function updateFlashcard() {
    const item = vocabList[currentCard];
    document.getElementById('flashWord').innerText = item.word;
    document.getElementById('flashIpa').innerText = item.ipa;
    document.getElementById('flashMeaning').innerText = item.meaning;
    document.getElementById('flashExample').innerText = item.example;
    document.getElementById('flashProgress').innerText = `${currentCard + 1} / ${vocabList.length}`;
    document.getElementById('flipCard').classList.remove('flipped');
  }

  function renderTable(filter = 'all') {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    vocabList.forEach((item, idx) => {
      if (filter === 'starred' && !favorites[idx]) return;
      const row = tbody.insertRow();
      row.innerHTML = `
        <td>${idx + 1}</td>
        <td><strong>${item.word}</strong></td>
        <td>${item.ipa}</td>
        <td><button onclick="speakText('${item.word.replace(/'/g, "\\'")}')">🔊</button></td>
        <td>${item.meaning}</td>
        <td>${item.example}</td>
        <td><button class="star-btn ${favorites[idx] ? 'active' : ''}" onclick="toggleStar(${idx}, this)">${favorites[idx] ? '⭐' : '☆'}</button></td>
      `;
    });
  }

  window.toggleStar = function(idx, btn) {
    favorites[idx] = !favorites[idx];
    localStorage.setItem('gardeningFavs', JSON.stringify(favorites));
    btn.classList.toggle('active');
    btn.innerText = favorites[idx] ? '⭐' : '☆';
    if (document.getElementById('filterStarBtn').classList.contains('active') && !favorites[idx]) {
      renderTable('starred');
    }
  };

  // Flashcard Controls
  document.getElementById('prevCardBtn').onclick = () => { currentCard = (currentCard - 1 + vocabList.length) % vocabList.length; updateFlashcard(); };
  document.getElementById('nextCardBtn').onclick = () => { currentCard = (currentCard + 1) % vocabList.length; updateFlashcard(); };
  document.getElementById('flipCard').onclick = () => document.getElementById('flipCard').classList.toggle('flipped');
  document.getElementById('playFlashAudio').onclick = (e) => { e.stopPropagation(); speakText(vocabList[currentCard].word); };
  document.getElementById('playExampleAudio').onclick = (e) => { e.stopPropagation(); speakText(vocabList[currentCard].example); };

  // Filter Controls
  document.getElementById('filterAllBtn').onclick = function() {
    this.classList.add('active');
    document.getElementById('filterStarBtn').classList.remove('active');
    renderTable('all');
  };
  document.getElementById('filterStarBtn').onclick = function() {
    this.classList.add('active');
    document.getElementById('filterAllBtn').classList.remove('active');
    renderTable('starred');
  };

  // Quiz Logic
  function generateQuiz() {
    let qs = vocabList.map((item, i) => {
      const type = i % 2; // 0: MC, 1: Typing
      if (type === 0) {
        let options = [item.word];
        while (options.length < 4) {
          let r = vocabList[Math.floor(Math.random() * vocabList.length)].word;
          if (!options.includes(r)) options.push(r);
        }
        return { type: 'mc', q: `What is the English word for "${item.meaning}"?`, correct: item.word, options: options.sort() };
      } else {
        return { type: 'fitb', q: `Translate to English: "${item.meaning}"`, correct: item.word };
      }
    });
    return qs.sort(() => Math.random() - 0.5);
  }

  document.getElementById('startQuizBtn').onclick = () => {
    quizQuestions = generateQuiz();
    quizIndex = 0; score = 0; wrongItems = [];
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('resultArea').style.display = 'none';
    renderQuizQuestion();
  };

  function renderQuizQuestion() {
    const q = quizQuestions[quizIndex];
    let html = `<div class="pastel-card"><h3>Question ${quizIndex + 1}/20</h3><p>${q.q}</p>`;
    if (q.type === 'mc') {
      html += `<div class="quiz-options">` + q.options.map(opt => `<div class="quiz-option" onclick="checkAnswer('${opt}')">${opt}</div>`).join('') + `</div>`;
    } else {
      html += `<input type="text" id="quizInput" class="quiz-input" placeholder="Type here..."><button onclick="checkAnswer(document.getElementById('quizInput').value)">Check</button>`;
    }
    html += `<div id="quizFeedback"></div></div>`;
    document.getElementById('quizContainer').innerHTML = html;
  }

  window.checkAnswer = function(ans) {
    const q = quizQuestions[quizIndex];
    const isCorrect = ans.trim().toLowerCase() === q.correct.toLowerCase();
    const feedback = document.getElementById('quizFeedback');
    if (isCorrect) {
      score++;
      feedback.innerHTML = `<p class="correct">✔ Correct!</p>`;
    } else {
      wrongItems.push({ q: q.correct, user: ans });
      feedback.innerHTML = `<p class="wrong">❌ Wrong! Answer: ${q.correct}</p>`;
    }
    setTimeout(() => {
      quizIndex++;
      if (quizIndex < 20) renderQuizQuestion();
      else showResults();
    }, 1000);
  };

  function showResults() {
    document.getElementById('quizArea').style.display = 'none';
    const res = document.getElementById('resultArea');
    res.style.display = 'block';
    res.innerHTML = `<div class="pastel-card"><h2>Quiz Finished!</h2><p>Your score: ${score}/20</p>
      ${wrongItems.length > 0 ? `<h4>Review:</h4><ul>` + wrongItems.map(w => `<li>${w.q} (You said: ${w.user || 'empty'})</li>`).join('') + `</ul>` : '<p>Perfect!</p>'}
      <button onclick="location.reload()">Try Again</button></div>`;
  }

  // Init
  updateFlashcard();
  renderTable();
</script>