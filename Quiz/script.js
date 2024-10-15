function quizScore() {
    let score = 0; 
    let userName = document.getElementById('username').value;
    let q1 = document.querySelector('input[name="q1"]:checked')?.value;
    let q2 = document.querySelector('input[name="q2"]:checked')?.value;
    let q3 = document.querySelector('input[name="q3"]:checked')?.value;
    let q4 = document.querySelector('input[name="q4"]:checked')?.value;
    let q5 = document.querySelector('input[name="q5"]:checked')?.value;
    let q6 = document.querySelector('input[name="q6"]:checked')?.value;
    let q7 = document.querySelector('input[name="q7"]:checked')?.value;
    let q8 = document.querySelector('input[name="q8"]:checked')?.value;
    let q9 = document.querySelector('input[name="q9"]:checked')?.value;
    let q10 = document.querySelector('input[name="q10"]:checked')?.value;


    let correctAnswer = {
        q1: "New Jeresy",
        q2: "March 9th 2005", 
        q3: "6'3, Nerd, Don't care what Major , sarcastic, loser, sleeper build, awkward, bob the builder hands, religious, calm, absurdly smart, golden retriever, wears glasses, interesting hobbies, has a passion for learning, and reads",
        q4: "As Long As the Lemon Trees Grow",
        q5: "She doesn't even know",
        q6: "Slytherin", 
        q7: "Life Goes On",
        q8: "She Misses the Food",
        q9: "Jawaker",
        q10:"Turmasaya"
    };

    // Check if the answer is correct and increment the score if correct
    if (userAnswers[`q${questionNumber}`] === correctAnswer[`q${questionNumber}`]) {
        score += 1;
        else {
            showResult(); // If the last question is answered, show the result
        }
    } else {
        // Alert the user to select an answer before proceeding
        alert("Please select an answer before proceeding.");
    }
}
function showResult() {
    let resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    let userName = document.getElementById('username')?.value || 'User'; // Optional: get user name if there's an input field
    resultDiv.innerHTML = `${userName}, you scored ${score} out of ${totalQuestions}!`;
}