const QUESTION_IMAGES = {
    けいさつ: 'socialStudies/keisatusyo.png',
    しょうぼう: 'socialStudies/syoubousyo.png',
    しやくしょ: 'socialStudies/shiyakusyo.png',
    はたけ: 'socialStudies/hatake.png',
    たんぼ: 'socialStudies/tanbo.png',
    がっこう: 'socialStudies/gakko.png',
    びょういん: 'socialStudies/byouin.png',
    ゆうびん: 'socialStudies/yuubinkyoku.png',
    てら: 'socialStudies/terakoya.png',
    じんじゃ: 'socialStudies/jinja.png',

    こうじょう: 'socialStudies/koujou.png',
    としょ: 'socialStudies/tosyokan.png',
    はくぶつ: 'socialStudies/hakubutsukan.png',
    ろうじん: 'socialStudies/kaigo_shisetsu.png',
    はつでん: 'socialStudies/hysteric_karyoku.png',
    かじゅ: 'socialStudies/kajuen_budou.png',
    とうだい: 'socialStudies/toudai.png',
    さいばん: 'socialStudies/saibansyo.png',
    ぜいむ: 'socialStudies/zeimusyo.png',
    おんせん: 'socialStudies/onsen.png',

    しろ: 'socialStudies/shiro.png',
    こうばん: 'socialStudies/kouban.png',
    さんかくてん: 'socialStudies/sankakuten.png',
    ほけんじょ: 'socialStudies/hokenjo.png',
    こうよう: 'socialStudies/kouyouju.png',
    しんよう: 'socialStudies/shinyouju.png',
    ヤシ: 'socialStudies/yashinoki.png',
    たけ: 'socialStudies/take.png',
    でんぱとう: 'socialStudies/denpato.png',
    ふうしゃ: 'socialStudies/husya.png',

    ぼち: 'socialStudies/bochi.png',
    ぎんこう: 'socialStudies/bank.png',
};

const QUESTION_TEXT = {
    けいさつ: '警察署',
    しょうぼう: '消防署',
    しやくしょ: '市役所',
    はたけ: '畑',
    たんぼ: '田んぼ',
    がっこう: '学校',
    びょういん: '病院',
    ゆうびん: '郵便局',
    てら: 'お寺',
    じんじゃ: '神社',
    こうじょう: '工場',
    としょ: '図書館',
    はくぶつ: '博物館',
    ろうじん: '老人ホーム',
    はつでん: '発電所',
    かじゅ: '果樹園',
    とうだい: '灯台',
    さいばん: '裁判所',
    ぜいむ: '税務署',
    おんせん: '温泉',
    しろ: 'お城',
    こうばん: '交番',
    さんかくてん: '三角点',
    ほけんじょ: '保健所',
    こうよう: '広葉樹林',
    しんよう: '針葉樹林',
    ヤシ: 'ヤシ科樹林',
    たけ: '竹林',
    でんぱとう: '電波塔',
    ふうしゃ: '風車',
    ぼち: '墓地',
    ぎんこう: '銀行',
};

const ANSWER_IMAGES = {
    けいさつ: 'socialStudies/mkg_010.png',
    しょうぼう: 'socialStudies/mkg_008.png',
    しやくしょ: 'socialStudies/mkg_001.png',
    はたけ: 'socialStudies/mkg_062.png',
    たんぼ: 'socialStudies/mkg_059.png',
    がっこう: 'socialStudies/mkg_013.png',
    びょういん: 'socialStudies/mkg_018.png',
    ゆうびん: 'socialStudies/mkg_012.png',
    てら: 'socialStudies/mkg_020.png',
    じんじゃ: 'socialStudies/mkg_019.png',

    こうじょう: 'socialStudies/mkg_024.png',
    としょ: 'socialStudies/mkg_022.png',
    はくぶつ: 'socialStudies/mkg_021.png',
    ろうじん: 'socialStudies/mkg_026.png',
    はつでん: 'socialStudies/mkg_023.png',
    かじゅ: 'socialStudies/mkg_060.png',
    とうだい: 'socialStudies/mkg_048.png',
    さいばん: 'socialStudies/mkg_004.png',
    ぜいむ: 'socialStudies/mkg_005.png',
    おんせん: 'socialStudies/mkg_045.png',

    しろ: 'socialStudies/mkg_051.png',
    こうばん: 'socialStudies/mkg_011.png',
    さんかくてん: 'socialStudies/mkg_025.png',
    ほけんじょ: 'socialStudies/mkg_009.png',
    こうよう: 'socialStudies/mkg_065.png',
    しんよう: 'socialStudies/mkg_069.png',
    ヤシ: 'socialStudies/mkg_071.png',
    たけ: 'socialStudies/mkg_070.png',
    でんぱとう: 'socialStudies/mkg_047.png',
    ふうしゃ: 'socialStudies/mkg_050.png',

    ぼち: 'socialStudies/mkg_036.png',
    ぎんこう: 'socialStudies/mkg_034.png',
};

const easyQuizList = [
    {
        question: QUESTION_IMAGES['けいさつ'],
        answer: ANSWER_IMAGES['けいさつ'],
    },
    {
        question: QUESTION_IMAGES['しょうぼう'],
        answer: ANSWER_IMAGES['しょうぼう'],
    },
    {
        question: QUESTION_IMAGES['しやくしょ'],
        answer: ANSWER_IMAGES['しやくしょ'],
    },
    {
        question: QUESTION_IMAGES['はたけ'],
        answer: ANSWER_IMAGES['はたけ'],
    },
    {
        question: QUESTION_IMAGES['たんぼ'],
        answer: ANSWER_IMAGES['たんぼ'],
    },
    {
        question: QUESTION_IMAGES['がっこう'],
        answer: ANSWER_IMAGES['がっこう'],
    },
    {
        question: QUESTION_IMAGES['びょういん'],
        answer: ANSWER_IMAGES['びょういん'],
    },
    {
        question: QUESTION_IMAGES['ゆうびん'],
        answer: ANSWER_IMAGES['ゆうびん'],
    },
    {
        question: QUESTION_IMAGES['てら'],
        answer: ANSWER_IMAGES['てら'],
    },
    {
        question: QUESTION_IMAGES['じんじゃ'],
        answer: ANSWER_IMAGES['じんじゃ'],
    },
    {
        question: QUESTION_IMAGES['こうじょう'],
        answer: ANSWER_IMAGES['こうじょう'],
    },
    {
        question: QUESTION_IMAGES['としょ'],
        answer: ANSWER_IMAGES['としょ'],
    },
]

const normalQuizList = [
    {
        question: QUESTION_IMAGES['はくぶつ'],
        answer: ANSWER_IMAGES['はくぶつ'],
    },
    {
        question: QUESTION_IMAGES['ろうじん'],
        answer: ANSWER_IMAGES['ろうじん'],
    },
    {
        question: QUESTION_IMAGES['はつでん'],
        answer: ANSWER_IMAGES['はつでん'],
    },
    {
        question: QUESTION_IMAGES['かじゅ'],
        answer: ANSWER_IMAGES['かじゅ'],
    },
    {
        question: QUESTION_IMAGES['とうだい'],
        answer: ANSWER_IMAGES['とうだい'],
    },
    {
        question: QUESTION_IMAGES['さいばん'],
        answer: ANSWER_IMAGES['さいばん'],
    },
    {
        question: QUESTION_IMAGES['ぜいむ'],
        answer: ANSWER_IMAGES['ぜいむ'],
    },
    {
        question: QUESTION_IMAGES['おんせん'],
        answer: ANSWER_IMAGES['おんせん'],
    },
]

const hardQuizList = [
    {
        question: QUESTION_IMAGES['しろ'],
        answer: ANSWER_IMAGES['しろ'],
    },
    {
        question: QUESTION_IMAGES['こうばん'],
        answer: ANSWER_IMAGES['こうばん'],
    },
    {
        question: QUESTION_IMAGES['さんかくてん'],
        answer: ANSWER_IMAGES['さんかくてん'],
    },
    {
        question: QUESTION_IMAGES['ほけんじょ'],
        answer: ANSWER_IMAGES['ほけんじょ'],
    },
    {
        question: QUESTION_IMAGES['こうよう'],
        answer: ANSWER_IMAGES['こうよう'],
    },
    {
        question: QUESTION_IMAGES['しんよう'],
        answer: ANSWER_IMAGES['しんよう'],
    },
    {
        question: QUESTION_IMAGES['たけ'],
        answer: ANSWER_IMAGES['たけ'],
    },
    {
        question: QUESTION_IMAGES['でんぱとう'],
        answer: ANSWER_IMAGES['でんぱとう'],
    },
    {
        question: QUESTION_IMAGES['ふうしゃ'],
        answer: ANSWER_IMAGES['ふうしゃ'],
    },
    {
        question: QUESTION_IMAGES['ぼち'],
        answer: ANSWER_IMAGES['ぼち'],
    },
    {
        question: QUESTION_IMAGES['ぎんこう'],
        answer: ANSWER_IMAGES['ぎんこう'],
    },
]

const board = document.getElementById('game-board');
const quizBase = document.getElementById('quiz-base');
const message = document.getElementById('message');
const titleScreen = document.getElementById('titleScreen');
const titleText = document.getElementById('titleText');
const gameScreen = document.getElementById('gameScreen');
const timerDisplay = document.getElementById('timer');
const gameClearScreen = document.getElementById('gameClearScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const clearedArea = document.getElementById('clearedArea');

let currentQuizIndex = 0;
let firstCard = null;
let lock = false;
let timeMax = 90;
let timeElapsed = 0;
let timerInterval = null;

// 配列をランダムに並べ替える関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function startTimer() {
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();

        if (timeElapsed >= timeMax) {
            clearInterval(timerInterval);
            disableAllCards();
            showGameOver();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timeRemaining = timeMax - timeElapsed;
    timerDisplay.textContent = formatTime(timeRemaining);
}

function disableAllCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.style.pointerEvents = 'none';
    });
}

let currentShuriken = null;
let isGameStarted = false;

function showShurikenOnButton(buttonEl) {
    if (isGameStarted || currentShuriken) return;

    const rect = buttonEl.getBoundingClientRect();
    const parentRect = titleText.getBoundingClientRect();

    const shuriken = document.createElement('img');
    shuriken.src = 'socialStudies/mappin.png';
    shuriken.classList.add('shuriken-stamp');

    const offsetX = rect.left - parentRect.left;
    const offsetY = rect.top + rect.height / 2 - parentRect.top;

    const shurikenSize = 30;
    shuriken.style.width = `${shurikenSize}px`;
    shuriken.style.height = `${shurikenSize}px`;

    shuriken.style.left = `${offsetX - shurikenSize / 2}px`;
    shuriken.style.top = `${offsetY - shurikenSize / 2}px`;

    titleText.appendChild(shuriken);
    currentShuriken = shuriken;
    shuriken.addEventListener('animationend', () => {
        if (!buttonEl?.matches(':hover') && !isGameStarted) {
            removeShuriken();
        }
    });
}

function removeShuriken() {
    if (currentShuriken) {
        currentShuriken.remove();
        currentShuriken = null;
    }
}

document.querySelectorAll('#titleText button').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        handleHoverEnter(e);
    });
    btn.addEventListener('mouseleave', () => {
        handleHoverLeave();
    });
});

function handleHoverEnter(e) {
    showShurikenOnButton(e.currentTarget);
}

function handleHoverLeave() {
    removeShuriken();
}

let currentDifficulty = null;

function startGame(difficulty, buttonEl) {
    currentDifficulty = difficulty;
    if (buttonEl.disabled) return;

    isGameStarted = true;
    removeShuriken();

    document.querySelectorAll('#titleText button').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('selected');
        btn.removeEventListener('mouseenter', handleHoverEnter);
        btn.removeEventListener('mouseleave', handleHoverLeave);
    });
    buttonEl.classList.add('selected');

    const loadingEl = document.querySelector('.load');
    loadingEl.style.display = 'block';

    setTimeout(() => {
        titleScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        loadingEl.style.display = 'none';

        beginGame(difficulty);
    }, 3000);
}

let combinedQuizList;

function beginGame(difficulty) {
    board.innerHTML = "";
    currentQuizIndex = 0;
    clearedArea.innerHTML = "";
    lock = false;

    let itemCount;

    if (difficulty === 'easy') {
        combinedQuizList = easyQuizList;
        itemCount = 12;
        // gridCols = 3; // 3×4
    } else if (difficulty === 'normal') {
        combinedQuizList = [...easyQuizList, ...normalQuizList];
        itemCount = 20;
        // gridCols = 4; // 4×5
    } else if (difficulty === 'hard') {
        combinedQuizList = [...easyQuizList, ...normalQuizList, ...hardQuizList];
        itemCount = 30;
        // gridCols = 5; // 6×5
    } else {
        combinedQuizList = easyQuizList;
        itemCount = 12;
        // gridCols = 4;
    }

    shuffledQuizList = shuffleArray([...combinedQuizList]).slice(0, itemCount);

    const dispalyQuizList = shuffleArray([...shuffledQuizList]);

    titleScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    timerDisplay.style.display = 'block';
    quizBase.style.display = 'block';
    clearedArea.style.display = 'flex';

    // board.style.gridTemplateColumns = `repeat(${gridCols}, 1fr)`;
    board.className = `board ${difficulty}`;

    dispalyQuizList.forEach((quizItem, index) => {
        const card = document.createElement('div');
        card.classList.add('card', difficulty);
        card.dataset.image = quizItem.answer;
        card.dataset.index = index;
        // card.style.width = `${cardSize}px`;
        // card.style.height = `${cardSize}px`;

        const img = document.createElement('img');
        img.src = quizItem.answer;
        img.classList.add('card-image');
        card.appendChild(img);

        card.addEventListener('click', () => handleCardClick(card));

        board.appendChild(card);
    });

    showCurrentQuiz();
    startTimer();
}

function handleCardClick(card) {
    if (lock || card.classList.contains('hidden')) return;

    const img = card.querySelector('.card-image');
    if (img.classList.contains('flash')) return;

    const currentAnswer = shuffledQuizList[currentQuizIndex].answer;

    if (card.dataset.image === currentAnswer) {
        img.classList.add('flash');
        lock = true;

        setTimeout(() => {
            img.classList.remove('flash');
            card.classList.add('hidden');

            const clearedImg = document.createElement('img');
            clearedImg.src = img.src;
            clearedImg.classList.add('cleared-image');
            clearedArea.appendChild(clearedImg);

            currentQuizIndex++;

            if (currentQuizIndex < shuffledQuizList.length) {
                showCurrentQuiz();
                lock = false;
            } else {
                checkWin();
            }
        }, 500);
    } else {
        img.classList.add('wrong');
        lock = true;

        setTimeout(() => {
            img.classList.remove('wrong');
            lock = false;
        }, 600);
    }
}

function showCurrentQuiz() {
    const q = shuffledQuizList[currentQuizIndex];
    showQuiz(q.question);
}

function showQuiz(image) {
    quizBase.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('quiz-wrapper');

    const img = document.createElement('img');
    img.src = image;
    img.classList.add('quiz-img');

    const quizEntry = Object.entries(QUESTION_IMAGES).find(([key, value]) => value === image);
    const label = document.createElement('p');
    label.textContent = quizEntry ? QUESTION_TEXT[quizEntry[0]] : '';
    label.classList.add('quiz-label');

    wrapper.appendChild(img);
    wrapper.appendChild(label);

    quizBase.appendChild(wrapper);
}

function showGameClear() {
    const clearMessage = document.getElementById('clearMessage');
    const medalDisplay = document.getElementById('medalDisplay');
    const clearSeconds = timeElapsed;

    const { emoji, className } = getMedal(currentDifficulty, clearSeconds);

    clearMessage.textContent = `クリアタイム：${clearSeconds}秒`;
    medalDisplay.innerHTML = emoji;

    medalDisplay.classList.remove('gold-medal', 'silver-medal', 'bronze-medal');
    if (className) medalDisplay.classList.add(className);

    gameClearScreen.classList.add('active');
}

const MEDALS = {
    special: { emoji: '🎖️', className: 'gold-medal' },   // 🎖️
    gold: { emoji: '&#x1f947;', className: 'gold-medal' },  // 🥇
    silver: { emoji: '&#x1f948;', className: 'silver-medal' }, // 🥈
    bronze: { emoji: '&#x1f949;', className: 'bronze-medal' }  // 🥉
};

function getMedal(difficulty, clearSeconds) {
    if (difficulty === 'easy') {
        if (clearSeconds <= 15) return MEDALS.special;
        if (clearSeconds <= 20) return MEDALS.gold;
        if (clearSeconds <= 25) return MEDALS.silver;
        return MEDALS.bronze;
    }
    if (difficulty === 'normal') {
        if (clearSeconds <= 30) return MEDALS.special;
        if (clearSeconds <= 40) return MEDALS.gold;
        if (clearSeconds <= 50) return MEDALS.silver;
        return MEDALS.bronze;
    }
    if (difficulty === 'hard') {
        if (clearSeconds <= 55) return MEDALS.special;
        if (clearSeconds <= 65) return MEDALS.gold;
        if (clearSeconds <= 75) return MEDALS.silver;
        return MEDALS.bronze;
    }
    return { emoji: '', className: '' };
}

function showGameOver() {
    gameOverScreen.classList.add('active');
}

function returnToTitle() {
    clearInterval(timerInterval);
    timeElapsed = 0;
    lock = false;
    gameClearScreen.classList.remove('active');
    gameOverScreen.classList.remove('active');
    gameScreen.style.display = 'none';
    titleScreen.style.display = 'block';
    quizBase.style.display = 'none';
    clearedArea.style.display = 'none';
    isGameStarted = false;

    document.querySelectorAll('#titleText button').forEach(btn => {
        btn.disabled = false;
        btn.addEventListener('mouseenter', handleHoverEnter);
        btn.addEventListener('mouseleave', handleHoverLeave);
    });

    removeShuriken();

    const loadingEl = document.querySelector('.load');
    loadingEl.style.display = 'none';
}

function checkWin() {
    const remaining = document.querySelectorAll('.card:not(.hidden)');
    if (remaining.length === 0) {
        clearInterval(timerInterval);
        showGameClear();
    }
}