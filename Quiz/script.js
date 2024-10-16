let currentQuestion = 0;
const totalQuestions = 10;

const correctAnswers = {
    q1: "New Jeresy",
    q2: "March 9th 2005",
    q3: "6'3, Nerd, Don't care what Major , sarcastic, loser, sleeper build, awkward, bob the builder hands, religious, calm, absurdly smart, golden retriever, wears glasses, interesting hobbies, has a passion for learning, and reads",
    q4: "As Long As the Lemon Trees Grow",
    q5: "She doesn't even know",
    q6: "Slytherin",
    q7: "Life Goes On",
    q8: "She Misses the Food",
    q9: "Jawaker",
    q10: "Turmasaya"
};

function beganQuiz() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('section-starter').style.display = 'none';
        document.getElementById('quiz-form').style.display = 'block';
        showQuestion(currentQuestion);
    } else {
        alert("Please enter your name to start the quiz.");
    }
}

function showQuestion(index) {
    const questions = document.getElementsByClassName('question');
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none'; // Hide all questions
    }
    questions[index].style.display = 'block'; // Show the current question
}

function nextQuestion(index) {
    // Check if an answer is selected
    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedAnswer) {
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            showQuestion(currentQuestion);
        } else {
            quizScore();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function quizScore() {
    let score = 0;
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }
    
    // Display the result
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'block';
    resultSection.innerHTML = `<h2>Your Score: ${score} out of ${totalQuestions}</h2>`;
}

// Optionally, you can add this function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('section-starter').style.display = 'block';
}
