---
layout: post
title: "Shopping Vocabulary Quiz - Ôn tập từ vựng chủ đề Mua sắm"
date: 2025-04-19
categories: Vocabulary
tags: [quiz, shopping, vocabulary, interactive]
featured_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBt4t0dnQtXgj6kq_NIQyhs4QNhY3QYUO-g&s"
excerpt: "Kiểm tra vốn từ vựng tiếng Anh về chủ đề Shopping với bài quiz tương tác. Có âm thanh, hiệu ứng và tổng kết điểm."
---

<style>
  /* CSS riêng cho quiz */
  .quiz-container {
    max-width: 700px;
    margin: 2rem auto;
    background: white;
    border-radius: 28px;
    box-shadow: 0 20px 35px rgba(0,0,0,0.1);
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }
  .quiz-header {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    padding: 1.5rem;
    text-align: center;
    color: white;
  }
  .quiz-header h2 {
    margin: 0;
    font-size: 1.8rem;
  }
  .quiz-body {
    padding: 2rem;
  }
  .question-text {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1e1e2a;
  }
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
  .option-btn {
    background: #f3f0ff;
    border: 1px solid #ddd;
    padding: 0.9rem 1.2rem;
    border-radius: 60px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    font-weight: 500;
  }
  .option-btn:hover {
    background: #e0d6ff;
    transform: scale(1.01);
  }
  .feedback {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: 16px;
    text-align: center;
    font-weight: bold;
    transition: 0.2s;
  }
  .feedback.correct {
    background: #d4edda;
    color: #155724;
    border-left: 5px solid #28a745;
  }
  .feedback.wrong {
    background: #f8d7da;
    color: #721c24;
    border-left: 5px solid #dc3545;
  }
  .next-btn, .restart-btn, .start-btn {
    background: linear-gradient(135deg, #a18cd1, #fbc2eb);
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 40px;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: 0.2s;
  }
  .next-btn:hover, .restart-btn:hover, .start-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(0,0,0,0.1);
  }
  .name-input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 40px;
    border: 1px solid #ccc;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .result-box {
    text-align: center;
    font-size: 1.2rem;
  }
  .score-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #a18cd1;
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media (max-width: 600px) {
    .quiz-body { padding: 1.2rem; }
    .question-text { font-size: 1.2rem; }
  }
</style>

<div class="quiz-container" id="shoppingQuiz">
  <div class="quiz-header">
    <h2>🛍️ Shopping Vocabulary Quiz</h2>
  </div>
  <div class="quiz-body" id="quizBody">
    <!-- Nội dung sẽ được render bằng JS -->
  </div>
</div>

<script>
  // ---------- Dữ liệu câu hỏi ----------
  const questions = [
    {
      text: "What does 'bargain' mean?",
      options: ["A very expensive item", "A good deal / cheap price", "A type of receipt", "To return a product"],
      correct: 1
    },
    {
      text: "If something is 'on sale', it means...",
      options: ["It is sold out", "It is available at a reduced price", "It is only for members", "It is damaged"],
      correct: 1
    },
    {
      text: "Which word means 'to look around in a store without buying anything'?",
      options: ["Purchase", "Window-shopping", "Checkout", "Refund"],
      correct: 1
    },
    {
      text: "What is a 'receipt'?",
      options: ["A discount coupon", "A paper proving you paid", "A shopping bag", "A salesperson"],
      correct: 1
    },
    {
      text: "The place where you pay in a supermarket is called...",
      options: ["Counter", "Checkout", "Cashier desk", "All of the above"],
      correct: 3
    }
  ];

  let currentStep = 0;        // 0: name input, 1..N: questions, last: result
  let userName = "";
  let userAnswers = new Array(questions.length).fill(null); // lưu chỉ số đáp án đã chọn (0-3) hoặc null
  let answerStatus = new Array(questions.length).fill(false); // đúng hay sai

  // Audio context cho âm thanh beep
  function playBeep(isCorrect) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.value = isCorrect ? 880 : 440; // đúng: cao, sai: thấp
      gainNode.gain.value = 0.2;
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch(e) { console.log("Audio not supported"); }
  }

  // Render giao diện dựa trên currentStep
  function render() {
    const body = document.getElementById('quizBody');
    if (!body) return;

    if (currentStep === 0) {
      // Màn hình nhập tên
      body.innerHTML = `
        <div style="text-align: center;">
          <p style="margin-bottom: 1rem;">👋 Xin chào! Hãy nhập tên của bạn để bắt đầu quiz nhé.</p>
          <input type="text" id="userNameInput" class="name-input" placeholder="Tên của bạn" autocomplete="off">
          <button id="startQuizBtn" class="start-btn">Bắt đầu làm bài →</button>
        </div>
      `;
      const startBtn = document.getElementById('startQuizBtn');
      const nameInput = document.getElementById('userNameInput');
      if (startBtn) {
        startBtn.addEventListener('click', () => {
          const nameVal = nameInput.value.trim();
          if (nameVal === "") {
            alert("Vui lòng nhập tên của bạn.");
            return;
          }
          userName = nameVal;
          currentStep = 1;
          render();
        });
      }
      return;
    }

    if (currentStep === questions.length + 1) {
      // Màn hình tổng kết
      const totalCorrect = answerStatus.filter(v => v === true).length;
      body.innerHTML = `
        <div class="result-box">
          <p>🌟 <strong>${userName}</strong>, bạn đã hoàn thành quiz! 🌟</p>
          <p>Kết quả của bạn:</p>
          <div class="score-number">${totalCorrect} / ${questions.length}</div>
          <p>${totalCorrect === questions.length ? "🎉 Tuyệt vời! Bạn rất giỏi từ vựng shopping!" : "💪 Hãy ôn lại những câu sai và thử lại nhé!"}</p>
          <button id="restartQuizBtn" class="restart-btn">🔄 Làm lại từ đầu</button>
        </div>
      `;
      const restartBtn = document.getElementById('restartQuizBtn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          resetQuiz();
          render();
        });
      }
      return;
    }

    // Hiển thị câu hỏi thứ `currentStep` (1-indexed)
    const qIndex = currentStep - 1;
    const q = questions[qIndex];
    const selectedIdx = userAnswers[qIndex];
    // Kiểm tra nếu đã trả lời câu này rồi thì hiển thị feedback
    const alreadyAnswered = (selectedIdx !== null);
    let feedbackHtml = "";
    if (alreadyAnswered) {
      const isCorrect = answerStatus[qIndex];
      feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✅ Đúng rồi!' : '❌ Sai rồi!'} ${isCorrect ? 'Tuyệt vời!' : `Đáp án đúng là: ${q.options[q.correct]}`}</div>`;
    }

    // Tạo các nút đáp án
    let optionsHtml = "";
    q.options.forEach((opt, idx) => {
      let btnClass = "option-btn";
      let disabledAttr = alreadyAnswered ? "disabled" : "";
      optionsHtml += `<button class="${btnClass}" data-opt-index="${idx}" ${disabledAttr}>${String.fromCharCode(65+idx)}. ${opt}</button>`;
    });

    body.innerHTML = `
      <div class="question-text">📌 Câu ${currentStep}/${questions.length}: ${q.text}</div>
      <div class="options-list" id="optionsList">
        ${optionsHtml}
      </div>
      ${feedbackHtml}
      ${alreadyAnswered ? `<button id="nextQuestionBtn" class="next-btn">Tiếp theo →</button>` : ""}
    `;

    if (!alreadyAnswered) {
      // Gắn sự kiện cho các nút đáp án
      const optButtons = document.querySelectorAll('.option-btn');
      optButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (userAnswers[qIndex] !== null) return; // đã trả lời rồi
          const chosenIdx = parseInt(btn.dataset.optIndex);
          const isCorrect = (chosenIdx === q.correct);
          userAnswers[qIndex] = chosenIdx;
          answerStatus[qIndex] = isCorrect;
          // Phát âm thanh
          playBeep(isCorrect);
          // Re-render lại câu hỏi này để hiển thị feedback và nút next
          render();
        });
      });
    } else {
      const nextBtn = document.getElementById('nextQuestionBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentStep < questions.length) {
            currentStep++;
            render();
          } else {
            currentStep = questions.length + 1; // sang trang kết quả
            render();
          }
        });
      }
    }
  }

  function resetQuiz() {
    currentStep = 0;
    userName = "";
    userAnswers = new Array(questions.length).fill(null);
    answerStatus = new Array(questions.length).fill(false);
  }

  // Khởi tạo
  render();
</script>
