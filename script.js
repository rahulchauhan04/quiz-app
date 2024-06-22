document.addEventListener('DOMContentLoaded', function() {
     let startButton = document.getElementById("startQuiz");
     let nextButton = document.getElementById('nextButton');
     let prevButton = document.getElementById('prevButton');
     let mainContainer = document.getElementById('mainContainer');
     let homeContainer = document.getElementById('home');
     let questionContainer = document.getElementById('questionContainer');
     let timerElement = document.getElementById('timer');
     
     let currentSection = 0;
     let currentQuestion = 0;
     let userScore = 0;
     let userAnswers = [];
     let quizData;
     let timer;
     const TIME_LIMIT = 15; // 15 seconds for each question
 
     // Fetch the JSON data
     fetch('questions.json')
         .then(response => response.json())
         .then(data => {
             quizData = data.quizData;
         })
         .catch(error => console.error('Error loading the quiz data:', error));
 
     startButton.addEventListener('click', function() {
         homeContainer.style.display = 'none';
         mainContainer.style.display = 'block';
         displayQuestion();
     });
 
     nextButton.addEventListener('click', function() {
         nextQuestion();
     });
 
     prevButton.addEventListener('click', function() {
         if (currentQuestion > 0) {
             currentQuestion--;
         } else if (currentSection > 0) {
             currentSection--;
             currentQuestion = quizData[currentSection].questions.length - 1;
         }
         displayQuestion();
     });
 
     function startTimer() {
         let timeLeft = TIME_LIMIT;
         updateTimer(timeLeft);
         timer = setInterval(() => {
             timeLeft--;
             updateTimer(timeLeft);
             if (timeLeft <= 0) {
                 clearInterval(timer);
                 nextQuestion();
             }
         }, 1000);
     }
 
     function updateTimer(timeLeft) {
         timerElement.style.width = `${(timeLeft / TIME_LIMIT) * 100}%`;
         timerElement.textContent = `${timeLeft}s`;
     }
 
     function nextQuestion() {
         clearInterval(timer);
         let selectedOption = document.querySelector('input[name="option"]:checked');
         if (selectedOption) {
             let userAnswer = selectedOption.value;
             userAnswers[currentSection] = userAnswers[currentSection] || [];
             userAnswers[currentSection][currentQuestion] = userAnswer;
 
             let correctAnswer = quizData[currentSection].questions[currentQuestion].answer;
             if (userAnswer === correctAnswer) {
                 userScore++;
             }
         }
 
         currentQuestion++;
         if (currentQuestion >= quizData[currentSection].questions.length) {
             currentQuestion = 0;
             currentSection++;
         }
 
         if (currentSection >= quizData.length) {
             endQuiz();
         } else {
             displayQuestion();
         }
     }
 
     function displayQuestion() {
         questionContainer.innerHTML = '';
         nextButton.style.display = 'block';
         prevButton.style.display = currentSection === 0 && currentQuestion === 0 ? 'none' : 'block';
 
         let currentQuestionObj = quizData[currentSection].questions[currentQuestion];
         let questionElement = generateQuestion(currentQuestionObj);
 
         questionContainer.appendChild(questionElement);
         startTimer();
 
         let storedAnswer = userAnswers[currentSection] ? userAnswers[currentSection][currentQuestion] : null;
         if (storedAnswer) {
             document.querySelector(`input[name="option"][value="${storedAnswer}"]`).checked = true;
         }
     }
 
     function generateQuestion(questionObj) {
         let questionElement = document.createElement('div');
 
         let questionText = document.createElement('p');
         questionText.textContent = questionObj.question;
         questionElement.appendChild(questionText);
 
         for (let i = 0; i < questionObj.options.length; i++) {
             let option = document.createElement('input');
             option.type = 'radio';
             option.name = 'option';
             option.value = questionObj.options[i];
 
             let label = document.createElement('label');
             label.textContent = questionObj.options[i];
             label.className = 'question-label';
 
             let optionContainer = document.createElement('div');
             optionContainer.className = 'option-container';
 
             optionContainer.appendChild(option);
             optionContainer.appendChild(label);
             questionElement.appendChild(optionContainer);
         }
 
         return questionElement;
     }
 
     function endQuiz() {
         mainContainer.innerHTML = '';
 
         let resultText = document.createElement('h1');
         let scoreMessage = userScore > (quizData.length * quizData[0].questions.length) / 2 
             ? `Congratulations! You scored ${userScore} out of ${quizData.length * quizData[0].questions.length}!` 
             : `You scored ${userScore} out of ${quizData.length * quizData[0].questions.length}. Better luck next time!`;
         
         resultText.textContent = scoreMessage;
         mainContainer.appendChild(resultText);
 
         if (userScore <= (quizData.length * quizData[0].questions.length) / 2) {
             let emoji = document.createElement('div');
             emoji.className = 'emoji';
             emoji.textContent = '😞';
             mainContainer.appendChild(emoji);
         }
 
         let retryButton = document.createElement('button');
         retryButton.textContent = 'Retry Quiz';
         retryButton.addEventListener('click', function() {
             userScore = 0;
             currentSection = 0;
             currentQuestion = 0;
             userAnswers = [];
             homeContainer.style.display = 'block';
             mainContainer.style.display = 'none';
             questionContainer.innerHTML = '';
         });
         mainContainer.appendChild(retryButton);
     }
 });