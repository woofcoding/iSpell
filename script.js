// ======================
// WEEKS DATA (easy to update)
// ======================
const weeksData = [
  {
    id: "2025-10-23",
    label: "Set 23 Oct — Test Fri 7 Nov 2025",
    date: "2025-10-23",
    words: [
      { word: "rhyme", sentence: "The children learned a funny rhyme to help remember the spelling." },
      { word: "secretary", sentence: "The secretary typed up the meeting minutes quickly." },
      { word: "sincere", sentence: "He made a sincere apology after accidentally breaking the vase." },
      { word: "sufficient", sentence: "We have sufficient pencils for everyone in the class." },
      { word: "system", sentence: "The school's heating system was repaired over the holidays." },
      { word: "rhythm", sentence: "She clapped the rhythm of the song perfectly in music class." },
      { word: "shoulder", sentence: "He carried the bag on his shoulder as he walked home." },
      { word: "soldier", sentence: "The soldier marched bravely in the parade." },
      { word: "suggest", sentence: "May I suggest a different book for the class reading?" },
      { word: "temperature", sentence: "The nurse took my temperature before I returned to class." },
      { word: "sacrifice", sentence: "They made a small sacrifice of their break time to finish the experiment." },
      { word: "signature", sentence: "Please write your signature at the bottom of the form." },
      { word: "stomach", sentence: "Her stomach rumbled loudly during the quiet assembly." },
      { word: "symbol", sentence: "The dove is often used as a symbol of peace." },
      { word: "thorough", sentence: "Make a thorough check of your answers before handing them in." },
      { word: "twelfth", sentence: "This is the twelfth question on the worksheet." },
      { word: "variety", sentence: "The market sold a variety of fresh fruits and snacks." },
      { word: "vegetable", sentence: "He chose one vegetable from the tray for his soup." },
      { word: "vehicle", sentence: "A large vehicle delivered the new desks to the school." },
      { word: "sincerely", sentence: "She finished the letter with 'Yours sincerely' and signed her name." }
    ]
  },
  {
    id: "2025-11-07",
    label: "Set 7 Nov — Test Fri 14 Nov 2025",
    date: "2025-11-07",
    words: [
      { word: "observant", sentence: "The traffic warden was very observant and spotted the illegal parking." },
      { word: "hesitant", sentence: "She was hesitant to answer the question, taking a long pause first." },
      { word: "tolerance", sentence: "The garden grows well because of its high tolerance to frost." },
      { word: "decent", sentence: "I hope you have a decent amount of money saved for the trip." },
      { word: "frequency", sentence: "The bus runs at a high frequency, arriving every fifteen minutes." },
      { word: "observance", sentence: "The observance of rules is critical for safety." },
      { word: "hesitancy", sentence: "His slight hesitancy gave the opposition time to think." },
      { word: "innocent", sentence: "The court decided the boy was innocent of the crime." },
      { word: "decency", sentence: "The children were taught common decency, like saying please and thank you." },
      { word: "confident", sentence: "She felt confident in her ability to pass the difficult exam." },
      { word: "expectant", sentence: "The whole crowd was expectant as the singer walked onto the stage." },
      { word: "tolerant", sentence: "We must be tolerant of other people's views, even if we disagree." },
      { word: "innocence", sentence: "He maintained his innocence throughout the long trial." },
      { word: "frequent", sentence: "Frequent visits to the library improved her reading skills." },
      { word: "confidence", sentence: "Winning the tournament boosted the team's confidence." },
      { word: "assistant", sentence: "The shop assistant helped the customer find the correct size." },
      { word: "assistance", sentence: "The old man requested assistance with his heavy bags." },
      { word: "obedient", sentence: "The soldier was obedient and followed all the orders given." },
      { word: "independent", sentence: "She became independent after moving out of her family home." },
      { word: "independence", sentence: "The country celebrated its day of independence from foreign rule." }
    ]
  },
  {
    id: "2025-11-28",
    label: "Set 20 Nov — Test Fri 28 Nov 2025",
    date: "2025-11-28",
    words: [
      { word: "referring", sentence: "The teacher was referring to the page numbers in the book." },
      { word: "preferring", sentence: "She was preferring to stay inside rather than go out in the rain." },
      { word: "transferred", sentence: "The money was transferred from my savings account to my current account." },
      { word: "preference", sentence: "Do you have a preference for red or blue?" },
      { word: "suffering", sentence: "The injured dog was suffering from a broken leg." },
      { word: "referred", sentence: "The doctor referred the patient to a specialist." },
      { word: "preferred", sentence: "For the party, I would have preferred a chocolate cake." },
      { word: "reference", sentence: "Always check your work against a reliable reference source." },
      { word: "transference", sentence: "The emotional transference of feelings is complex." },
      { word: "differing", sentence: "They had differing opinions on which film to watch." },
      { word: "referral", sentence: "He got the new job through a personal referral." },
      { word: "transferring", sentence: "They are transferring the files to a new computer system." },
      { word: "referee", sentence: "The referee blew the whistle to end the football match." },
      { word: "different", sentence: "I chose a completely different style of painting this time." },
      { word: "inferred", sentence: "From his silence, she inferred that he was upset." },
      { word: "suffered", sentence: "The company suffered a great loss during the recession." },
      { word: "conferring", sentence: "The judges were conferring quietly before announcing the winner." },
      { word: "offered", sentence: "The café offered a free cookie with every hot drink." },
      { word: "offering", sentence: "He was offering to help his neighbour move furniture." },
      { word: "inferring", sentence: "By observing the evidence, we are inferring the cause of the problem." }
    ]
  }
];

// ----------------------
// DOM refs & state
// ----------------------
let spellingList = [];
let currentWeek = null;
let currentWordIndex = 0;
let score = 0;
let resultsLog = [];

// Student and Error Tracking
let currentStudentName = '';
// Format: { "word1": {errors: 2, correct: 5}, "word2": {errors: 0, correct: 1}, ... }
let historicalErrors = {}; 

// Known Students List
const KNOWN_STUDENTS_KEY = 'spellingKnownStudents'; 
let knownStudents = [];

const weekSelectEl = document.getElementById('weekSelect');
const weekBarEl = document.getElementById('weekBar');

const startScreenEl = document.getElementById('startScreen');
const startButtonEl = document.getElementById('startButton');

// Name and Practice Refs
const studentNameInputEl = document.getElementById('studentNameInput'); // Input for NEW names
const knownUsersDatalistEl = document.getElementById('knownUsersDatalist'); // Datalist for suggestions

const currentStudentDisplayEl = document.getElementById('currentStudentDisplay');
const practiceTestSectionEl = document.getElementById('practiceTestSection');
const practiceListInfoEl = document.getElementById('practiceListInfo');
const practiceButtonEl = document.getElementById('practiceButton');


const testInterfaceEl = document.getElementById('test-interface');
const progressEl = document.getElementById('progress');
const scoreEl = document.getElementById('score');
const progressBarContainerEl = document.getElementById('progressBarContainer');
const inputEl = document.getElementById('wordInput');
const messageEl = document.getElementById('message');
const contextDisplayEl = document.getElementById('contextDisplay'); // Added this ref for clarity
// Renamed button references
const sayAgainButtonEl = document.getElementById('sayAgainButton');
const submitButtonEl = document.getElementById('submitButton');
const continueButtonEl = document.getElementById('continueButton');

const resultsEl = document.getElementById('results');
const finalScoreDisplayEl = document.getElementById('finalScoreDisplay'); 
const resultsTableBodyEl = document.querySelector('#resultsTable tbody');
const menuButtonEl = document.getElementById('menuButton');

// Settings Panel Refs
const settingsIconEl = document.getElementById('settingsIcon');
const settingsPanelEl = document.getElementById('settingsPanel');
const closeSettingsButtonEl = document.getElementById('closeSettingsButton');
const settingsKnownStudentsListEl = document.getElementById('settingsKnownStudentsList'); // New settings list element

// Woofs Image Ref
const woofsImageEl = document.querySelector('.corner-woofs');

// toggles
const soundToggleEl = document.getElementById('soundToggle');
const showSentenceToggleEl = document.getElementById('showSentenceToggle');
const autoSpeakSentenceToggleEl = document.getElementById('autoSpeakSentenceToggle'); 
const disableSpellcheckToggleEl = document.getElementById('disableSpellcheckToggle'); 

const SOUND_KEY = 'spellingSoundEnabled';
const SHOW_SENTENCE_KEY = 'spellingShowSentence';
const AUTO_SPEAK_SENTENCE_KEY = 'spellingAutoSpeakSentence'; 
const DISABLE_SPELLCHECK_KEY = 'spellingDisableSpellcheck'; 
const LAST_NAME_KEY = 'spellingLastName'; 

let soundEnabled = localStorage.getItem(SOUND_KEY) === null ? true : localStorage.getItem(SOUND_KEY) === 'true';
let showSentenceEnabled = localStorage.getItem(SHOW_SENTENCE_KEY) === null ? true : localStorage.getItem(SHOW_SENTENCE_KEY) === 'true';
let autoSpeakSentenceEnabled = localStorage.getItem(AUTO_SPEAK_SENTENCE_KEY) === null ? true : localStorage.getItem(AUTO_SPEAK_SENTENCE_KEY) === 'true'; 
let disableSpellcheckEnabled = localStorage.getItem(DISABLE_SPELLCHECK_KEY) === null ? false : localStorage.getItem(DISABLE_SPELLCHECK_KEY) === 'true'; 

// Apply initial state to toggles
soundToggleEl.checked = soundEnabled;
showSentenceToggleEl.checked = showSentenceEnabled;
autoSpeakSentenceToggleEl.checked = autoSpeakSentenceEnabled; 
disableSpellcheckToggleEl.checked = disableSpellcheckEnabled; 

const soundLabelEl = document.getElementById('soundLabel');
const showSentenceLabelEl = document.getElementById('showSentenceLabel');
const autoSpeakSentenceLabelEl = document.getElementById('autoSpeakSentenceLabel'); 
const disableSpellcheckLabelEl = document.getElementById('disableSpellcheckLabel'); 

// Set initial label text
soundLabelEl.textContent = soundEnabled ? 'Sound effects (ON)' : 'Sound effects (OFF)';
showSentenceLabelEl.textContent = showSentenceEnabled ? 'Show sentence (ON)' : 'Show sentence (OFF)';
autoSpeakSentenceLabelEl.textContent = autoSpeakSentenceEnabled ? 'Speak word then sentence (ON)' : 'Speak word then sentence (OFF)'; 
disableSpellcheckLabelEl.textContent = disableSpellcheckEnabled ? 'Disable browser spellcheck (ON)' : 'Disable browser spellcheck (OFF)'; 

// Apply initial spellcheck state to input field
inputEl.spellcheck = !disableSpellcheckEnabled;

// ======================
// Student History Logic
// ======================

// Key for localStorage specific to a student's spelling history
const getStorageKey = (name) => `spelling_history_${name.trim().toLowerCase().replace(/\s+/g, '_')}`;

function loadKnownStudents() {
    const storedList = localStorage.getItem(KNOWN_STUDENTS_KEY);
    try {
        knownStudents = storedList ? JSON.parse(storedList) : [];
        if (!Array.isArray(knownStudents)) knownStudents = [];
        knownStudents = [...new Set(knownStudents.filter(n => typeof n === 'string' && n.trim()))];
    } catch (e) {
        console.error("Error parsing known students list:", e);
        knownStudents = [];
    }
    
    knownStudents.sort((a, b) => a.localeCompare(b));
    renderKnownStudentsList();
    renderDatalistSuggestions();
}

// Renders the list for DELETION in the Settings Panel
function renderKnownStudentsList() {
    settingsKnownStudentsListEl.innerHTML = '';
    
    if (knownStudents.length === 0) {
        settingsKnownStudentsListEl.textContent = "No saved users found.";
        return;
    }
    
    knownStudents.forEach(name => {
        const item = document.createElement('div');
        item.className = 'settings-user-item';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        item.appendChild(nameSpan);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Delete user ${name}`);
        deleteButton.onclick = (e) => {
            e.stopPropagation(); 
            deleteStudent(name);
        };
        item.appendChild(deleteButton);
        
        settingsKnownStudentsListEl.appendChild(item);
    });
}

// Renders the list for SELECTION on the main screen (datalist)
function renderDatalistSuggestions() {
    knownUsersDatalistEl.innerHTML = '';
    knownStudents.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        knownUsersDatalistEl.appendChild(option);
    });
}

function saveKnownStudent(name) {
    name = name.trim();
    if (!name) return;
    
    if (!knownStudents.includes(name)) {
        knownStudents.push(name);
        knownStudents.sort(); 
        try {
            localStorage.setItem(KNOWN_STUDENTS_KEY, JSON.stringify(knownStudents));
            renderKnownStudentsList(); // Update settings list
            renderDatalistSuggestions(); // Update main screen suggestions
        } catch (e) {
            console.error("Error saving known students list:", e);
        }
    }
    localStorage.setItem(LAST_NAME_KEY, name); // Save last used name
}

function deleteStudent(nameToDelete) {
    if (!confirm(`Are you sure you want to delete ${nameToDelete} and all their spelling progress? This cannot be undone.`)) {
        return;
    }

    // Remove from knownStudents list
    knownStudents = knownStudents.filter(name => name !== nameToDelete);
    try {
        localStorage.setItem(KNOWN_STUDENTS_KEY, JSON.stringify(knownStudents));
        // Also delete their individual history
        localStorage.removeItem(getStorageKey(nameToDelete));
        console.log(`Deleted student ${nameToDelete} and their history.`);

        // If the deleted student was the currently selected one, clear it
        if (currentStudentName === nameToDelete) {
            currentStudentName = '';
            studentNameInputEl.value = '';
            currentStudentDisplayEl.textContent = '';
            localStorage.removeItem(LAST_NAME_KEY);
            hidePracticeTestSection();
        }
    } catch (e) {
        console.error("Error deleting student:", e);
    }
    
    renderKnownStudentsList();
    renderDatalistSuggestions();
}

function loadStudentHistory(name) {
    if (!name) {
        historicalErrors = {};
        return;
    }
    const key = getStorageKey(name);
    const storedHistory = localStorage.getItem(key);
    try {
        historicalErrors = storedHistory ? JSON.parse(storedHistory) : {};
        if (typeof historicalErrors !== 'object' || historicalErrors === null) {
            historicalErrors = {}; // Reset if invalid
        }
    } catch (e) {
        console.error(`Error parsing history for ${name}:`, e);
        historicalErrors = {}; // Reset if parsing fails
    }
    console.log(`Loaded history for ${name}:`, historicalErrors);
}

function saveStudentHistory(name) {
    if (!name) return;
    const key = getStorageKey(name);
    try {
        localStorage.setItem(key, JSON.stringify(historicalErrors));
        console.log(`Saved history for ${name}:`, historicalErrors);
    } catch (e) {
        console.error(`Error saving history for ${name}:`, e);
    }
}

function updateWordHistory(word, isCorrect) {
    const cleanWord = word.toLowerCase();
    if (!historicalErrors[cleanWord]) {
        historicalErrors[cleanWord] = { errors: 0, correct: 0 };
    }
    if (isCorrect) {
        historicalErrors[cleanWord].correct++;
        // If they got it right after previous errors, reduce errors slightly for practice logic
        if (historicalErrors[cleanWord].errors > 0) {
             historicalErrors[cleanWord].errors = Math.max(0, historicalErrors[cleanWord].errors - 0.5); // Reduce "error weight"
        }
    } else {
        historicalErrors[cleanWord].errors++;
    }
}

// Determine if practice test is needed
function checkPracticeTestNeeded(studentName, weekId) {
    if (!studentName || !weekId) {
        hidePracticeTestSection();
        return;
    }

    const wordsForWeek = weeksData.find(week => week.id === weekId)?.words || [];
    const wordsWithErrors = wordsForWeek.filter(wordObj => {
        const history = historicalErrors[wordObj.word.toLowerCase()];
        // Consider a word for practice if it has more errors than correct attempts for this student
        return history && history.errors > history.correct;
    });

    if (wordsWithErrors.length > 0) {
        showPracticeTestSection(wordsWithErrors.map(w => w.word));
    } else {
        hidePracticeTestSection();
    }
}

let practiceWords = []; // Stores words for the practice test
function showPracticeTestSection(words) {
    practiceWords = words;
    practiceListInfoEl.textContent = `You have ${words.length} words from this week's list with repeated errors. Click below to practice them!`;
    practiceTestSectionEl.style.display = 'flex';
}

function hidePracticeTestSection() {
    practiceTestSectionEl.style.display = 'none';
    practiceWords = [];
}

// ======================
// Core Functions
// ======================
function populateWeekSelect() {
    weekSelectEl.innerHTML = '';
    weeksData.forEach(week => {
        const option = document.createElement('option');
        option.value = week.id;
        option.textContent = week.label;
        weekSelectEl.appendChild(option);
    });
    
    // NEW: Set the selected option to the ID of the last week (latest)
    if (weeksData.length > 0) {
        weekSelectEl.value = weeksData[weeksData.length - 1].id;
    }

    updateWeekInfo(); // Call initially to set info for default selected week
}

function updateWeekInfo() {
    const selectedId = weekSelectEl.value;
    currentWeek = weeksData.find(week => week.id === selectedId);
    if (currentWeek) {
        // For now, weekInfo is empty, but could be used to display details:
        // weekInfoEl.textContent = `Words: ${currentWeek.words.length}`;
    }
    // After changing week, re-check practice needed
    checkPracticeTestNeeded(currentStudentName, currentWeek?.id);
}

function speak(text, rate = 1.0) {
    if (!soundEnabled || !('speechSynthesis' in window)) {
        console.log("Speech synthesis not enabled or not supported.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = 'en-GB'; // Keep the language preference

    const setVoice = () => {
        const voices = speechSynthesis.getVoices();
        let selectedVoice = null;

        // Try to find the specific voice by name first
        selectedVoice = voices.find(voice => voice.name === "Google UK English Female");

        // Fallback: If not found, try to find any British English voice
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang === 'en-GB');
        }

        // Further fallback: If still not found, try any English voice
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang.startsWith('en-'));
        }
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log("Using voice:", selectedVoice.name);
        } else {
            console.warn("Could not find 'Google UK English Female' or any 'en-GB' voice. Using default.");
        }
        
        speechSynthesis.speak(utterance);
    };

    // Event listener to ensure voices are loaded before trying to set
    // This is crucial because getVoices() might return an empty array initially
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = setVoice;
    } else {
        // Voices are already loaded, proceed directly
        setVoice();
    }
}

function startTest(isPractice = false) {
    const studentName = studentNameInputEl.value.trim();
    if (!studentName) {
        messageEl.textContent = "Please enter your name to start!";
        messageEl.style.color = 'var(--bad)';
        inputEl.focus();
        return;
    }
    currentStudentName = studentName;
    saveKnownStudent(currentStudentName); // Save the student name
    loadStudentHistory(currentStudentName); // Load their history

    // If it's a practice test, we need to ensure sentences are included from the main data
    if (isPractice) {
        spellingList = practiceWords.map(wordText => {
            const originalWord = currentWeek.words.find(w => w.word === wordText);
            return originalWord || { word: wordText, sentence: null }; // Fallback if not found
        });
        spellingList.sort(() => Math.random() - 0.5); // Shuffle practice words
    } else {
        spellingList = currentWeek.words;
    }

    currentWordIndex = 0;
    score = 0;
    resultsLog = [];
    
    startScreenEl.style.display = 'none';
    testInterfaceEl.style.display = 'block';
    resultsEl.style.display = 'none';
    weekBarEl.ariaHidden = "true"; // Hide week selection
    weekBarEl.style.display = 'none'; // Visually hide

    inputEl.value = ''; // Ensure input is clear on test start
    inputEl.focus();
    messageEl.textContent = '';
    continueButtonEl.style.display = 'none';
    submitButtonEl.style.display = 'inline-block'; // Ensure submit button is visible

    updateProgressBar();
    nextWord();
}

function nextWord() {
    inputEl.value = ''; // Clear input for the NEXT word
    inputEl.focus();
    messageEl.textContent = '';
    continueButtonEl.style.display = 'none';
    submitButtonEl.style.display = 'inline-block'; // Enable submit button

    contextDisplayEl.textContent = ''; // Always reset contextDisplay
    contextDisplayEl.style.display = 'none'; // Hide by default

    if (currentWordIndex < spellingList.length) {
        const currentWordObj = spellingList[currentWordIndex];
        progressEl.textContent = `Word ${currentWordIndex + 1} of ${spellingList.length}`;
        
        if (autoSpeakSentenceEnabled && currentWordObj.sentence) { // Only speak sentence if available
            speak(currentWordObj.word, 0.8); // Speak word first, slightly slower
            setTimeout(() => {
                speak(currentWordObj.sentence); // Then speak sentence
                if (showSentenceEnabled) { // Only show sentence if setting is ON
                     contextDisplayEl.textContent = currentWordObj.sentence;
                     contextDisplayEl.style.display = 'block'; // Make visible
                }
            }, 1500); // Delay sentence slightly
        } else {
            // Either auto-speak sentence is OFF, or no sentence is available
            speak(currentWordObj.word); // Just speak the word
            if (showSentenceEnabled && currentWordObj.sentence) { // Only show sentence if setting is ON and sentence available
                contextDisplayEl.textContent = currentWordObj.sentence;
                contextDisplayEl.style.display = 'block'; // Make visible
            }
        }
    } else {
        endTest();
    }
}

function handleSubmit() {
    const userInput = inputEl.value.trim();
    const correctWord = spellingList[currentWordIndex].word;
    const isCorrect = userInput.toLowerCase() === correctWord.toLowerCase();
    
    // IMPORTANT: Clear the input field immediately after getting user input for current word
    inputEl.value = ''; 

    updateWordHistory(correctWord, isCorrect); // Update student's history

    resultsLog.push({
        attempt: userInput,
        correct: correctWord,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        score++;
        messageEl.textContent = "✅ Correct!";
        messageEl.style.color = 'var(--ok)';
        if (soundEnabled) {
            const audio = new Audio('success.mp3'); 
            audio.play();
        }
        woofsImageEl.classList.add('animate-woof'); // Trigger animation
        setTimeout(() => {
            woofsImageEl.classList.remove('animate-woof');
        }, 1200);
    } else {
        messageEl.innerHTML = `❌ Incorrect. The word was: <strong>${correctWord}</strong>`;
        messageEl.style.color = 'var(--bad)';
        if (soundEnabled) {
            const audio = new Audio('fail.mp3'); 
            audio.play();
        }
    }
    scoreEl.textContent = `Score: ${score} / ${currentWordIndex + 1}`;
    updateProgressBar(isCorrect);

    submitButtonEl.style.display = 'none'; // Hide submit button
    continueButtonEl.style.display = 'block'; // Show continue button
    continueButtonEl.focus(); // Focus continue button
    speak(correctWord); // Speak the correct word again AFTER feedback
}

function updateProgressBar(lastResult = null) {
    progressBarContainerEl.innerHTML = ''; // Clear existing segments
    for (let i = 0; i < spellingList.length; i++) {
        const segment = document.createElement('div');
        segment.className = 'progressSegment';
        if (i < currentWordIndex) {
            // Apply result for past words
            segment.classList.add(resultsLog[i].isCorrect ? 'correct' : 'incorrect');
        } else if (i === currentWordIndex && lastResult !== null) {
            // Apply result for the current word if already submitted
            segment.classList.add(lastResult ? 'correct' : 'incorrect');
        }
        progressBarContainerEl.appendChild(segment);
    }
}

function endTest() {
    testInterfaceEl.style.display = 'none';
    resultsEl.style.display = 'block';
    weekBarEl.ariaHidden = "false"; // Show week selection
    weekBarEl.style.display = 'flex'; // Visually show

    finalScoreDisplayEl.textContent = `Final Score: ${score} / ${spellingList.length}`;
    finalScoreDisplayEl.style.color = score / spellingList.length > 0.7 ? 'var(--ok)' : 'var(--bad)'; // Green for good score, red for low

    resultsTableBodyEl.innerHTML = '';
    resultsLog.forEach((log, index) => {
        const row = resultsTableBodyEl.insertRow();
        row.className = log.isCorrect ? 'correct' : 'incorrect';
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = log.attempt || 'No attempt';
        row.insertCell().textContent = log.correct;
        row.insertCell().textContent = log.isCorrect ? 'Correct' : 'Incorrect';
    });

    // Save history for the current student
    saveStudentHistory(currentStudentName);
    // After test, re-check if practice is needed based on updated history
    checkPracticeTestNeeded(currentStudentName, currentWeek?.id);
}

// ======================
// Event Listeners
// ======================
window.addEventListener('load', () => {
    populateWeekSelect();
    loadKnownStudents();
    const lastUsedName = localStorage.getItem(LAST_NAME_KEY);
    if (lastUsedName) {
        studentNameInputEl.value = lastUsedName;
        currentStudentName = lastUsedName;
        currentStudentDisplayEl.textContent = `(Currently: ${lastUsedName})`;
        loadStudentHistory(lastUsedName);
        checkPracticeTestNeeded(lastUsedName, weekSelectEl.value);
    }
});

weekSelectEl.addEventListener('change', updateWeekInfo);

startButtonEl.addEventListener('click', () => startTest(false));
practiceButtonEl.addEventListener('click', () => startTest(true));

submitButtonEl.addEventListener('click', handleSubmit);
sayAgainButtonEl.addEventListener('click', () => {
    if (currentWordIndex < spellingList.length) {
        const currentWordObj = spellingList[currentWordIndex];
        if (autoSpeakSentenceEnabled && currentWordObj.sentence) { // Only speak sentence if available
            speak(currentWordObj.word, 0.8);
            setTimeout(() => speak(currentWordObj.sentence), 1500);
        } else {
            speak(currentWordObj.word);
        }
    }
});

continueButtonEl.addEventListener('click', () => {
    currentWordIndex++;
    nextWord();
});

menuButtonEl.addEventListener('click', () => {
    resultsEl.style.display = 'none';
    startScreenEl.style.display = 'flex';
    // Ensure student name and practice section are correctly displayed/hidden
    if (currentStudentName) {
        currentStudentDisplayEl.textContent = `(Currently: ${currentStudentName})`;
        checkPracticeTestNeeded(currentStudentName, weekSelectEl.value);
    } else {
        currentStudentDisplayEl.textContent = '';
        hidePracticeTestSection();
    }
    inputEl.value = studentNameInputEl.value; // Keep name in input
});

inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent default form submission behavior
        if (submitButtonEl.style.display !== 'none') { // Only submit if visible
            handleSubmit();
        } else if (continueButtonEl.style.display !== 'none') { // Only continue if visible
            continueButtonEl.click();
        }
    }
});

// Settings Panel Event Listeners
settingsIconEl.addEventListener('click', () => {
    settingsPanelEl.style.display = 'flex';
    settingsPanelEl.setAttribute('aria-hidden', 'false');
    settingsPanelEl.focus(); // Focus the panel for accessibility
});

closeSettingsButtonEl.addEventListener('click', () => {
    settingsPanelEl.style.display = 'none';
    settingsPanelEl.setAttribute('aria-hidden', 'true');
});

soundToggleEl.addEventListener('change', () => {
    soundEnabled = soundToggleEl.checked;
    localStorage.setItem(SOUND_KEY, soundEnabled);
    soundLabelEl.textContent = soundEnabled ? 'Sound effects (ON)' : 'Sound effects (OFF)';
});

showSentenceToggleEl.addEventListener('change', () => {
    showSentenceEnabled = showSentenceToggleEl.checked;
    localStorage.setItem(SHOW_SENTENCE_KEY, showSentenceEnabled);
    showSentenceLabelEl.textContent = showSentenceEnabled ? 'Show sentence (ON)' : 'Show sentence (OFF)';
    
    // Immediately update sentence display if test is active and setting changed
    if (testInterfaceEl.style.display === 'block' && currentWordIndex < spellingList.length) {
        const currentWordObj = spellingList[currentWordIndex];
        if (showSentenceEnabled && currentWordObj.sentence) {
            contextDisplayEl.textContent = currentWordObj.sentence;
            contextDisplayEl.style.display = 'block';
        } else {
            contextDisplayEl.textContent = '';
            contextDisplayEl.style.display = 'none';
        }
    }
});

autoSpeakSentenceToggleEl.addEventListener('change', () => {
    autoSpeakSentenceEnabled = autoSpeakSentenceToggleEl.checked;
    localStorage.setItem(AUTO_SPEAK_SENTENCE_KEY, autoSpeakSentenceEnabled);
    autoSpeakSentenceLabelEl.textContent = autoSpeakSentenceEnabled ? 'Speak word then sentence (ON)' : 'Speak word then sentence (OFF)';
});

disableSpellcheckToggleEl.addEventListener('change',
