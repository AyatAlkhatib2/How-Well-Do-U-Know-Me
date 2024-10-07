function submitQuiz() {
    let score = 0;

    // Get user answers
    let q1 = document.querySelector('input[name="q1"]:checked')?.value;

    // Correct answers
    let correctAnswers = {
        q1: "blue",  // Change to your actual favorite color
        // Add more correct answers as you add questions
    };

    // Check the answer for Question 1
    if (q1 === correctAnswers.q1) {
        score += 1;
    }

    // Add checks for other questions if you add them

    // Display the result
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You scored ${score} out of 1`;  // Adjust based on the number of questions
}
