let correct = 0;
let wrong = 0;
var subtitle;
var questionsLeft = [0, 1, 2, 3];
var answerBuffer = [];
var questionNumber;
var questionSelected;
// //picks question out of array with our random number
// console.log(questionNumber);



//shuffles array to randomize answers
function shuffle(array) {
    var ctr = array.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
};





function end() {
    document.getElementById("answers").innerText("");
    document.getElementById("question").innerText("No More Questions");
    // subtitle = `Finished: You Answered ${correct} questions correctly out of ${questions.length}`;
};

// console.log(questionsLeft.length);

//submit button and answer validation
submit = function submit(val) {
    if (val === "radio-0") {
        alert("shyeah!");
        correct++;
    }
    else {
        console.log("nah!");
        wrong++;
    };
};

var newQuestion = function newQuestion() {


    // picks random question number from available
    questionNumber = Math.floor(Math.random() * questionsLeft.length);
    questionSelected = questionsLeft[questionNumber];
    question = questions[questionSelected];

    // create radio buttons with unique ids, add them to a buffer we will shuffle

    for (let index = 0; index < 4; index++) {
        let rad = `<input type="radio" id="radio-${index}" name="radios" class="radios">`;
        let answer = $("<span>").attr("value", index).text(answers[questionNumber][index]);
        answer.append(rad);
        answerBuffer.push(answer);
    };

    // shuffle and add to DOM
    shuffle(answerBuffer);

};
newQuestion();
document.getElementById("answers").innerHTML(answerBuffer);
document.getElementById("question").innerText(question);
document.getElementById("subtitle").innerText(`${questionsLeft.length} Questions Left Out Of ${questions.length}`);

document.getElementById("submit").on("click", function (event) {
    event.preventDefault();
    let selected = document.querySelector("input[type=radio]:checked").attr("id");
    console.log(selected);
    submit(selected);
    questionsLeft.splice(questionNumber, 1);
    $("#subtitle").text(`${questionsLeft.length} Questions Left Out Of ${questions.length}`)
    console.log(questionsLeft);
    if (questionsLeft.length === 0) {
        end();
    }
    else {
        newQuestion();
    }
}
);

