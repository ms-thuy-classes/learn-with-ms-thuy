---
layout: post
title: "🌱 Gardening Vocabulary: Flashcards, Table & Quiz"
date: 2025-04-20
categories: Vocabulary
tags: [gardening, flashcards, quiz, interactive]
featured_image: "https://images.pexels.com/photos/1264247/pexels-photo-1264247.jpeg?auto=compress&cs=tinysrgb&w=800"
excerpt: "Learn 20 gardening words with interactive flashcards, a sortable table, and a mixed‑type quiz. Includes audio, favourites, and progress tracking."
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
  /* Cards & buttons */
  .pastel-card {
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(4px);
    border-radius: 32px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.05);
    padding: 1.2rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .pastel-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.08);
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
  }
  button:hover {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    color: white;
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(161,140,209,0.3);
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
  .flip-card-front {
    background: linear-gradient(145deg, #ffffff, #fef5f7);
  }
  .flip-card-back {
    background: linear-gradient(145deg, #f0f7ff, #ffffff);
    transform: rotateY(180deg);
    overflow-y: auto;
  }
  .flash-word {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .flash-ipa {
    font-family: monospace;
    color: #888;
  }
  .flash-meaning {
    font-size: 1.5rem;
    color: #f5576c;
    margin-bottom: 1rem;
  }
  .flash-example {
    font-size: 1rem;
    line-height: 1.4;
    background: #f9f3ff;
    padding: 0.8rem;
    border-radius: 20px;
  }
  .card-controls {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
  }
  .progress-bar {
    text-align: center;
    font-weight: 500;
    margin-top: 10px;
  }
  /* ========== VOCABULARY TABLE ========== */
  .table-wrapper {
    overflow-x: auto;
  }
  .vocab-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  }
  .vocab-table th, .vocab-table td {
    padding: 12px 8px;
    text-align: left;
    border-bottom: 1px solid #f0e6ff;
    vertical-align: middle;
  }
  .vocab-table th {
    background: #f9f0ff;
    color: #5a3e7c;
    font-weight: 600;
  }
  .star-btn {
    background: none;
    font-size: 1.3rem;
    padding: 0;
    width: 32px;
    color: #ffc107;
  }
  .star-btn.active {
    color: #f5576c;
  }
  .filter-group {
    margin: 1rem 0;
    display: flex;
    gap: 12px;
  }
  /* ========== QUIZ ========== */
  .quiz-section {
    margin-top: 2rem;
  }
  .quiz-options {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 12px;
    margin: 20px 0;
  }
  @media (max-width: 700px) {
    .quiz-options { grid-template-columns: 1fr; }
  }
  .quiz-option {
    background: #f3f0ff;
    padding: 12px;
    border-radius: 60px;
    cursor: pointer;
    transition: 0.2s;
    text-align: center;
  }
  .quiz-option:hover { background: #e0d6ff; }
  .quiz-feedback {
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
    animation: fadeIn 0.3s;
  }
  @keyframes shake {
    0%,100%{ transform: translateX(0); }
    25%{ transform: translateX(-5px); }
    75%{ transform: translateX(5px); }
  }
  .shake {
    animation: shake 0.3s ease;
  }
  .glow {
    box-shadow: 0 0 12px #28a745;
  }
  .quiz-input {
    width: 100%;
    padding: 12px;
    border-radius: 60px;
    border: 1px solid #ddd;
    margin: 10px 0;
  }
  .result-screen {
    background: white;
    border-radius: 28px;
    padding: 1.5rem;
    margin-top: 1rem;
  }
  .wrong-list {
    background: #fff0f0;
    border-radius: 20px;
    padding: 1rem;
    margin-top: 1rem;
  }
</style>

<div class="vocab-container" id="vocabApp">
  <h1>🌱 Gardening Vocabulary</h1>
  <p>Learn 20 essential words with flashcards, table, and quiz. Click the star ⭐ to save difficult words.</p>

  <!-- SECTION 1: FLASHCARDS -->
  <h2>📇 Flashcards</h2>
  <div class="flashcard-area">
    <div class="flip-card" id="flipCard">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="flash-word" id="flashWord"></div>
          <div class="flash-ipa" id="flashIpa"></div>
          <button id="playFlashAudio" style="margin-top: 1rem;">🔊 Play word</button>
          <p style="margin-top: 1rem; font-size:0.8rem;">👆 Tap card to flip</p>
        </div>
        <div class="flip-card-back">
          <div class="flash-meaning" id="flashMeaning"></div>
          <div class="flash-example" id="flashExample"></div>
          <div class="flash-example-meaning" id="flashExampleMeaning" style="font-size:0.85rem; margin-top:0.5rem;"></div>
          <button id="playExampleAudio" style="margin-top: 1rem;">🔊 Play example</button>
        </div>
      </div>
    </div>
  </div>
  <div class="card-controls">
    <button id="prevCardBtn">◀ Previous</button>
    <button id="nextCardBtn">Next ▶</button>
  </div>
  <div class="progress-bar" id="flashProgress"></div>

  <!-- SECTION 2: VOCABULARY TABLE -->
  <h2>📋 Vocabulary Table</h2>
  <div class="filter-group">
    <button id="filterAllBtn" class="filter-btn">All</button>
    <button id="filterStarBtn" class="filter-btn">⭐ Starred only</button>
  </div>
  <div class="table-wrapper">
    <table class="vocab-table" id="vocabTable">
      <thead>
        <tr><th>#</th><th>Word</th><th>IPA</th><th>Audio</th><th>Meaning</th><th>Example</th><th>Example meaning</th><th>⭐</th></tr>
      </thead>
      <tbody id="tableBody"></tbody>
    </table>
  </div>

  <!-- SECTION 3: QUIZ -->
  <h2>📝 Quiz</h2>
  <button id="startQuizBtn">🌱 Start Quiz (20 questions)</button>
  <div id="quizArea" style="display:none;">
    <div id="quizContainer"></div>
  </div>
  <div id="resultArea" style="display:none;"></div>
</div>

<script>
  // --------------------------------------------------------------
  // 1. VOCABULARY DATA (fully editable)
  //    Add new words following the same structure.
  //    Audio uses Web Speech API – no external files needed.
  // --------------------------------------------------------------
  const vocabList = [
    { word: "green thumb", ipa: "/ɡriːn θʌm/", meaning: "khiếu làm vườn", example: "My grandmother has a real green thumb; she can make almost any plant thrive.", exampleMeaning: "Bà tôi thực sự có khiếu làm vườn; bà có thể khiến hầu hết mọi loại cây phát triển tươi tốt." },
    { word: "germinate", ipa: "/ˈdʒɜːmɪneɪt/", meaning: "nảy mầm", example: "Seeds require the right balance of moisture and warmth to germinate successfully.", exampleMeaning: "Hạt giống cần sự cân bằng đúng giữa độ ẩm và độ ấm để nảy mầm thành công." },
    { word: "cultivate", ipa: "/ˈkʌltɪveɪt/", meaning: "trồng trọt, canh tác", example: "Many people today choose to cultivate their own vegetables to ensure they are organic.", exampleMeaning: "Nhiều người ngày nay chọn tự trồng trọt rau củ để đảm bảo chúng là thực phẩm hữu cơ." },
    { word: "prune", ipa: "/pruːn/", meaning: "tỉa cành", example: "It is essential to prune the rose bushes in early spring to encourage new growth.", exampleMeaning: "Việc tỉa các bụi hoa hồng vào đầu xuân là rất quan trọng để kích thích sự phát triển mới." },
    { word: "sprout up", ipa: "/spraʊt ʌp/", meaning: "mọc lên nhanh chóng", example: "After the first spring rain, tiny green shoots began to sprout up all over the garden.", exampleMeaning: "Sau cơn mưa xuân đầu tiên, những mầm xanh nhỏ bé bắt đầu mọc lên khắp vườn." },
    { word: "nutrient-rich soil", ipa: "/ˈnjuːtriənt rɪtʃ sɔɪl/", meaning: "đất giàu dinh dưỡng", example: "Lush gardens are usually the result of planting in nutrient-rich soil.", exampleMeaning: "Những khu vườn tươi tốt thường là kết quả của việc trồng cây trên đất giàu dinh dưỡng." },
    { word: "wither away", ipa: "/ˈwɪðər əˈweɪ/", meaning: "héo úa, tàn lụi", example: "If you neglect your indoor plants during the summer, they will quickly wither away.", exampleMeaning: "Nếu bạn bỏ bê cây trồng trong nhà suốt mùa hè, chúng sẽ nhanh chóng héo úa đi." },
    { word: "hardy", ipa: "/ˈhɑːrdi/", meaning: "chịu đựng tốt (thời tiết khắc nghiệt)", example: "Lavender is a hardy plant that can survive even in very poor soil conditions.", exampleMeaning: "Oải hương là một loài cây chịu đựng tốt, có thể sống sót ngay cả trong điều kiện đất rất nghèo nàn." },
    { word: "take root", ipa: "/teɪk ruːt/", meaning: "bén rễ", example: "It takes about two weeks for the cuttings to take root in the new compost.", exampleMeaning: "Mất khoảng hai tuần để các cành giâm bén rễ trong lớp phân hữu cơ mới." },
    { word: "perennial", ipa: "/pəˈreniəl/", meaning: "cây lâu năm", example: "I prefer perennials over annuals because they bloom year after year without replanting.", exampleMeaning: "Tôi thích cây lâu năm hơn cây một năm vì chúng nở hoa năm này qua năm khác mà không cần trồng lại." },
    { word: "pot on", ipa: "/pɒt ɒn/", meaning: "chuyển cây sang chậu lớn hơn", example: "The seedlings have grown significantly, so I need to pot them on this weekend.", exampleMeaning: "Cây con đã lớn lên đáng kể, vì vậy tôi cần chuyển chúng sang chậu lớn hơn vào cuối tuần này." },
    { word: "in full bloom", ipa: "/ɪn fʊl bluːm/", meaning: "nở rộ", example: "The botanical garden is breathtaking when the cherry blossoms are in full bloom.", exampleMeaning: "Vườn bách thảo đẹp đến nín thở khi hoa anh đào đang nở rộ." },
    { word: "pest control", ipa: "/pest kənˈtrəʊl/", meaning: "kiểm soát sâu bệnh", example: "Organic gardeners often use natural predators like ladybugs for pest control.", exampleMeaning: "Những người làm vườn hữu cơ thường sử dụng các loài thiên địch như bọ rùa để kiểm soát sâu bệnh." },
    { word: "lush vegetation", ipa: "/lʌʃ ˌvedʒɪˈteɪʃn/", meaning: "thảm thực vật tươi tốt", example: "The tropical region is known for its lush vegetation and high biodiversity.", exampleMeaning: "Vùng nhiệt đới nổi tiếng với thảm thực vật tươi tốt và đa dạng sinh học cao." },
    { word: "die back", ipa: "/daɪ bæk/", meaning: "héo đi (nhưng gốc vẫn sống)", example: "Don't worry if the lilies die back in winter; they will return in the spring.", exampleMeaning: "Đừng lo lắng nếu hoa ly héo đi vào mùa đông; chúng sẽ mọc lại vào mùa xuân." },
    { word: "sow the seeds", ipa: "/səʊ ðə siːdz/", meaning: "gieo hạt", example: "April is the ideal month to sow the seeds for your summer vegetable patch.", exampleMeaning: "Tháng Tư là tháng lý tưởng để gieo hạt cho mảnh vườn rau mùa hè của bạn." },
    { word: "drainage", ipa: "/ˈdreɪnɪdʒ/", meaning: "sự thoát nước", example: "Poor drainage can lead to root rot, which is fatal for most potted plants.", exampleMeaning: "Thoát nước kém có thể dẫn đến thối rễ, điều này gây hại nghiêm trọng cho hầu hết các loại cây trồng trong chậu." },
    { word: "thrive", ipa: "/θraɪv/", meaning: "phát triển mạnh mẽ", example: "Succulents thrive in bright sunlight and require very little maintenance.", exampleMeaning: "Cây mọng nước phát triển mạnh mẽ trong ánh nắng rực rỡ và cần rất ít sự chăm sóc." },
    { word: "fragrant", ipa: "/ˈfreɪɡrənt/", meaning: "thơm ngát", example: "I planted jasmine near the window so its fragrant scent could drift into the house.", exampleMeaning: "Tôi đã trồng hoa nhài gần cửa sổ để hương thơm ngát của nó có thể bay vào trong nhà." },
    { word: "drought-resistant", ipa: "/draʊt rɪˈzɪstənt/", meaning: "chịu hạn", example: "Many Australian native plants are drought-resistant, making them perfect for dry climates.", exampleMeaning: "Nhiều loài cây bản địa của Úc có khả năng chịu hạn, khiến chúng trở nên hoàn hảo cho khí hậu khô hạn." }
  ];

  // --------------------------------------------------------------
  // 2. GLOBAL VARIABLES & LOCALSTORAGE (favorites & progress)
  // --------------------------------------------------------------
  let favorites = JSON.parse(localStorage.getItem('gardeningFavs')) || new Array(vocabList.length).fill(false);
  let currentCard = 0;
  let quizActive = false;
  let quizQuestions = [];
  let userAnswers = [];
  let userName = "";
  let quizIndex = 0;
  let score = 0;
  let wrongItems = [];  // store { word, example, userAnswer, correctAnswer, type }

  // Helper: speak text using Web Speech API (natural voices)
  function speakText(text, rate = 0.85) {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  // Update flashcard UI
  function updateFlashcard() {
    const item = vocabList[currentCard];
    document.getElementById('flashWord').innerText = item.word;
    document.getElementById('flashIpa').innerText = item.ipa;
    document.getElementById('flashMeaning').innerText = item.meaning;
    document.getElementById('flashExample').innerText = item.example;
    document.getElementById('flashExampleMeaning').innerText = item.exampleMeaning;
    document.getElementById('flashProgress').innerText = `${currentCard+1} / ${vocabList.length}`;
    const card = document.getElementById('flipCard');
    card.classList.remove('flipped');
  }
  document.getElementById('prevCardBtn').addEventListener('click', () => {
    currentCard = (currentCard - 1 + vocabList.length) % vocabList.length;
    updateFlashcard();
    speakText(vocabList[currentCard].word);
  });
  document.getElementById('nextCardBtn').addEventListener('click', () => {
    currentCard = (currentCard + 1) % vocabList.length;
    updateFlashcard();
    speakText(vocabList[currentCard].word);
  });
  document.getElementById('flipCard').addEventListener('click', () => {
    document.getElementById('flipCard').classList.toggle('flipped');
  });
  document.getElementById('playFlashAudio').addEventListener('click', (e) => {
    e.stopPropagation();
    speakText(vocabList[currentCard].word);
  });
  document.getElementById('playExampleAudio').addEventListener('click', (e) => {
    e.stopPropagation();
    speakText(vocabList[currentCard].example);
  });

  // Render vocabulary table with star toggle
  function renderTable(filter = 'all') {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    vocabList.forEach((item, idx) => {
      if (filter === 'starred' && !favorites[idx]) return;
      const row = tbody.insertRow();
      row.insertCell(0).innerText = idx+1;
      row.insertCell(1).innerText = item.word;
      row.insertCell(2).innerText = item.ipa;
      const audioCell = row.insertCell(3);
      const audioBtn = document.createElement('button');
      audioBtn.innerText = '🔊';
      audioBtn.onclick = () => speakText(item.word);
      audioCell.appendChild(audioBtn);
      row.insertCell(4).innerText = item.meaning;
      row.insertCell(5).innerText = item.example;
      row.insertCell(6).innerText = item.exampleMeaning;
      const starCell = row.insertCell(7);
      const starBtn = document.createElement('button');
      starBtn.innerText = favorites[idx] ? '⭐' : '☆';
      starBtn.classList.add('star-btn');
      if (favorites[idx]) starBtn.classList.add('active');
      starBtn.onclick = () => {
        favorites[idx] = !favorites[idx];
        localStorage.setItem('gardeningFavs', JSON.stringify(favorites));
        renderTable(document.querySelector('.filter-btn.active')?.innerText === '⭐ Starred only' ? 'starred' : 'all');
      };
      starCell.appendChild(starBtn);
    });
  }
  document.getElementById('filterAllBtn').addEventListener('click', () => {
    document.getElementById('filterAllBtn').classList.add('active');
    document.getElementById('filterStarBtn').classList.remove('active');
    renderTable('all');
  });
  document.getElementById('filterStarBtn').addEventListener('click', () => {
    document.getElementById('filterStarBtn').classList.add('active');
    document.getElementById('filterAllBtn').classList.remove('active');
    renderTable('starred');
  });
  renderTable('all');

  // --------------------------------------------------------------
  // 3. QUIZ GENERATOR (mix 3 types)
  // --------------------------------------------------------------
  function generateQuiz() {
    let qs = [];
    for (let i = 0; i < vocabList.length; i++) {
      const type = i % 3; // 0: multiple choice, 1: translation typing, 2: listening typing
      if (type === 0) {
        // multiple choice: fill blank with word definition
        const correct = vocabList[i].word;
        let options = [correct];
        while (options.length < 4) {
          const rand = vocabList[Math.floor(Math.random() * vocabList.length)].word;
          if (!options.includes(rand)) options.push(rand);
        }
        options = shuffleArray(options);
        qs.push({
          type: 'mc',
          question: `What does "${vocabList[i].meaning}" mean in English?`,
          correct: correct,
          options: options
        });
      } else if (type === 1) {
        qs.push({
          type: 'translate',
          question: `Translate to English: "${vocabList[i].meaning}"`,
          correct: vocabList[i].word,
          exampleSentence: vocabList[i].example
        });
      } else {
        qs.push({
          type: 'listening',
          question: `Listen and type the sentence:`,
          audioText: vocabList[i].example,
          correct: vocabList[i].example,
          wordHint: vocabList[i].word
        });
      }
    }
    return shuffleArray(qs);
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Feedback effects
  function playSoundEffect(isCorrect) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.value = isCorrect ? 880 : 440;
    gain.gain.value = 0.1;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.4);
    osc.stop(audioCtx.currentTime + 0.4);
  }

  function showFeedback(correct, element) {
    const feedbackDiv = document.getElementById('quizFeedback') || (() => { const d = document.createElement('div'); d.id = 'quizFeedback'; document.getElementById('quizContainer').appendChild(d); return d; })();
    feedbackDiv.innerHTML = `<div class="quiz-feedback ${correct ? 'correct' : 'wrong'}">${correct ? '✔ Correct!' : '❌ Incorrect'}</div>`;
    if (correct) {
      element?.classList.add('glow');
      setTimeout(() => element?.classList.remove('glow'), 500);
    } else {
      element?.classList.add('shake');
      setTimeout(() => element?.classList.remove('shake'), 500);
    }
    playSoundEffect(correct);
    setTimeout(() => { feedbackDiv.innerHTML = ''; }, 1000);
  }

  // Render current quiz question
  function renderQuizQuestion() {
    const q = quizQuestions[quizIndex];
    const container = document.getElementById('quizContainer');
    if (!container) return;
    let html = `<div class="pastel-card"><p><strong>Question ${quizIndex+1}/${quizQuestions.length}</strong></p>`;
    if (q.type === 'mc') {
      html += `<p>${q.question}</p><div class="quiz-options" id="mcOptions">`;
      q.options.forEach(opt => {
        html += `<div class="quiz-option" data-value="${opt}">${opt}</div>`;
      });
      html += `</div>`;
    } else if (q.type === 'translate') {
      html += `<p>${q.question}</p><input type="text" id="translateInput" class="quiz-input" placeholder="Type your answer"><button id="submitTranslate">Check</button>`;
    } else {
      html += `<p>${q.question}</p><button id="playListeningAudio">🔊 Play sentence</button><input type="text" id="listenInput" class="quiz-input" placeholder="Type the sentence"><button id="submitListen">Check</button>`;
    }
    html += `<div id="quizFeedback"></div></div>`;
    container.innerHTML = html;

    if (q.type === 'mc') {
      document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          const selected = e.currentTarget.dataset.value;
          const correct = (selected === q.correct);
          if (correct) score++;
          else wrongItems.push({ word: q.correct, example: q.correct, userAnswer: selected, correctAnswer: q.correct, type: 'mc' });
          showFeedback(correct, e.currentTarget);
          setTimeout(() => nextQuestion(), 1000);
        });
      });
    } else if (q.type === 'translate') {
      document.getElementById('submitTranslate').addEventListener('click', () => {
        const answer = document.getElementById('translateInput').value.trim().toLowerCase();
        const correct = q.correct.toLowerCase();
        const isOk = (answer === correct);
        if (isOk) score++;
        else wrongItems.push({ word: q.correct, example: q.exampleSentence, userAnswer: answer, correctAnswer: q.correct, type: 'translate' });
        showFeedback(isOk, document.getElementById('submitTranslate'));
        setTimeout(() => nextQuestion(), 1000);
      });
    } else {
      document.getElementById('playListeningAudio').addEventListener('click', () => speakText(q.audioText, 0.7));
      document.getElementById('submitListen').addEventListener('click', () => {
        const answer = document.getElementById('listenInput').value.trim().toLowerCase();
        const correct = q.correct.toLowerCase();
        const isOk = (answer === correct);
        if (isOk) score++;
        else wrongItems.push({ word: q.wordHint, example: q.correct, userAnswer: answer, correctAnswer: q.correct, type: 'listening' });
        showFeedback(isOk, document.getElementById('submitListen'));
        setTimeout(() => nextQuestion(), 1000);
      });
    }
  }

  function nextQuestion() {
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      renderQuizQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    const quizDiv = document.getElementById('quizArea');
    const resultDiv = document.getElementById('resultArea');
    quizDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    let wrongHtml = '';
    if (wrongItems.length > 0) {
      wrongHtml = `<div class="wrong-list"><h4>❌ Wrong answers:</h4><ul>`;
      wrongItems.forEach(w => {
        wrongHtml += `<li><strong>${w.word}</strong> – your answer: "${w.userAnswer}" | correct: "${w.correctAnswer}"</li>`;
      });
      wrongHtml += `</ul><button id="reviewWrongBtn">Review wrong answers</button></div>`;
    } else {
      wrongHtml = `<p>🎉 Perfect! No mistakes.</p>`;
    }
    resultDiv.innerHTML = `
      <div class="result-screen">
        <h3>📊 Result for ${userName}</h3>
        <p>Correct: ${score} / ${quizQuestions.length}</p>
        ${wrongHtml}
        <button id="restartQuizBtn">🔄 Restart Quiz</button>
      </div>
    `;
    document.getElementById('restartQuizBtn')?.addEventListener('click', () => location.reload());
    document.getElementById('reviewWrongBtn')?.addEventListener('click', () => {
      // scroll to table and filter starred? but we can simply highlight
      alert('Review wrong words manually in the vocabulary table above.');
    });
  }

  // Start quiz flow
  document.getElementById('startQuizBtn').addEventListener('click', () => {
    const name = prompt("Enter your name to start the quiz:", "Student");
    if (!name) return;
    userName = name;
    quizQuestions = generateQuiz();
    userAnswers = [];
    quizIndex = 0;
    score = 0;
    wrongItems = [];
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('resultArea').style.display = 'none';
    renderQuizQuestion();
  });
  updateFlashcard();
  speakText(vocabList[0].word);
</script>

<!-- BEGINNER INSTRUCTIONS (visible in HTML but not intrusive) -->
<details style="margin-top: 3rem; background: #f9f3ff; padding: 1rem; border-radius: 20px;">
  <summary>📘 How to edit this vocabulary post (for beginners)</summary>
  <ul>
    <li><strong>Add new words:</strong> Edit the <code>vocabList</code> array inside the script. Each object must have <code>word, ipa, meaning, example, exampleMeaning</code>. No external files needed.</li>
    <li><strong>Change audio:</strong> The code uses browser's Web Speech API. To change voice/rate, edit <code>speakText()</code> parameters. No audio uploads required.</li>
    <li><strong>Quiz behavior:</strong> Questions are automatically generated from the list. Modify <code>generateQuiz()</code> to change question types ratio.</li>
    <li><strong>Favorites:</strong> Stored in localStorage – they persist across sessions.</li>
    <li><strong>To use in Jekyll:</strong> Copy this entire markdown file into <code>_posts/</code> with a date prefix. The layout <code>post</code> will wrap it nicely.</li>
  </ul>
</details>