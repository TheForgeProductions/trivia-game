const subtitle = document.getElementById("subtitle");
const questionDiv = document.getElementById("question");
const answersDiv = document.getElementById("answers");
var answersArr = [];
const submit = document.querySelector("#submit");
const start = document.querySelector("#start");
var letter;
rightCount = 0;
wrongCount = 0;
var sec = 60;
alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// function questPicker(){
//     letter = alphabet[Math.ceil(Math.random() * (alphabet.length)) - 1];
//     alphabet.splice(alphabet.indexOf(letter), 1);
// }

var count = 0;

function question() {
    questionLet = alphabet[count];
    questionDiv.innerText = questions[questionLet].q;
    answers = questions[questionLet].a;
    answerDisp(answers);
}

function answerDisp(answers) {
    let answerArray = [];
    answerArray = Object.keys(answers);
    answersArr = [];
    answersDiv.innerHTML = ''
    for (let i = 0; i < answerArray.length; i++) {

        let rad = document.createElement("input");
        let answer = document.createElement('label');

        rad.setAttribute("type", "radio");
        rad.setAttribute("name", "answer");
        rad.setAttribute("value", questions[questionLet].a[answerArray[i]]);

        answer.setAttribute('for', i);
        answer.innerText = answerArray[i];
        answersDiv.append(rad, answer);
    };
};

function secs() {
    sec--;
    // document.getElementById('timer').innerText(sec);
    console.log(sec);
};

var finale = function finale () {
    answersDiv.innerText = 'Game Over';
    document.getElementById('scoreboard').innerText = `Correct: ${rightCount} Incorrect: ${wrongCount}`;
};

submit.onclick = function (event) {
    event.preventDefault();
    let correct = document.querySelector("input[type=radio]:checked").getAttribute("value");
    (correct === "true") ? rightCount++ : wrongCount++;
    document.getElementById('scoreboard').innerText = `Correct: ${rightCount} Incorrect: ${wrongCount}`;
    count++;
    question();
};

start.onclick = (event) => {
    event.preventDefault();
    question();
    start.setAttribute("style", "visibility: hidden");
    setTimeout(finale, 60000);
    setInterval(function () {sec--; document.getElementById('timer').innerText = `Time Left: ${sec}`;}, 1000)
};
