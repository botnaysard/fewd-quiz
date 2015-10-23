$(document).ready(function() {


// create a factory function to create quiz items

function makeQuestion(optionA, optionB, optionC, optionD, rightAnswer) {
	var question = {};
	question.optionA = optionA;
	question.optionB = optionB;
	question.optionC = optionC;
	question.optionD = optionD;
	question.rightAnswer = rightAnswer;
	question.printOptions = function(){
		return this.optionA + "|" + this.optionB + "|" + this.optionC + "|" + this.optionD + "|" + this.rightAnswer
	}
	return question;
}

// create quiz items

var question1 = makeQuestion("biceps brachii", "deltoid", "triceps brachii", "latissimus dorsi", "latissimus dorsi");
var question2 = makeQuestion("abductor magnus", "vastus lateralis", "biceps brachii", "triceps brachii", "gluteus maximus");
var question3 = makeQuestion("deltoid", "serratus anterior", "biceps brachii", "trapezius", "trapezius");
var question4 = makeQuestion("biceps brachii", "pectoralis major", "deltoid", "rectus abdominis", "pectoralis major")
var question5 = makeQuestion("gluteus maximus", "vastus medialis", "rectus abdominis", "pectoralis minor", "rectus abdominis");

// make sure the variables are stored properly

//console.log(question1.printOptions());
//console.log(question2.printOptions());
//console.log(question3.printOptions());
//console.log(question4.printOptions());
//console.log(question5.printOptions());

// place the objects into an array, so we can step through it later

var quizQuestions = [question1, question2, question3, question4, question5];

// make sure the objects/array work correctly

//console.log(quizQuestions[0]);
//console.log(quizQuestions[1]);
//console.log(quizQuestions[2]);
//console.log(quizQuestions[3]);
//console.log(quizQuestions[4]);

// Map values from the first object to the DOM

document.getElementById('1').value=quizQuestions[0].optionA;
$('label[for=1]').html(" " + quizQuestions[0].optionA);


});