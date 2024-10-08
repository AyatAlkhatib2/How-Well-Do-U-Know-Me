function quizScore {
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

    if (q1 === correctAnswer.q1){
         score += 1
    }

    if (q2 === correctAnswer.q2){
        score += 1
    }

    if (q3 === correctAnswer.q3){
        score += 1
    }

    if (q4 === correctAnswer.q4){
        score += 1
    }

    if (q5 === correctAnswer.q5){
        score += 1
    }

    if (q6 === correctAnswer.q6){
        score += 1
    }

    if (q7 === correctAnswer.q7){
        score += 1
    }

    if (q8 === correctAnswer.q8){
        score += 1
    }

    if (q9 === correctAnswer.q9){
        score += 1
    }

    if (q10 === correctAnswer.q10){
        score += 1
    }

    let totalQuestions = 10; 

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `${userName}, you scored ${score} out of ${totalQuestions}!`;
}