// Back end logic
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var questions = [
  ["How old are you?", 25],
  ["What is your favorite number?", 7],
  ["How many pets do you have?", 3],
  ["How many wives do you have?", 1],
  ["How many days in a year?", 365],
];

var countRight = 0;
var questionsRight = [];
var questionsWrong = [];
var question;
var answer;
var response;
var html;

for(var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    countRight += 1;
    questionsRight.push(question);
  } else {
    questionsWrong.push(question);
  }
}

// User Interface
function buildList(array) {
  var listHTML = '<ol>';
  for(var i = 0; i < array.length; i += 1) {
    listHTML += '<li>' + array[i] + '</li>'
  }
  listHTML += '</ol>';
  return listHTML;
}

html = "You got " + countRight + " questions right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(questionsRight);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(questionsWrong);
print(html);
















//
