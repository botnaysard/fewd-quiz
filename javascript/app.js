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

// place the objects into an array, so we can step through it later

	var quizQuestions = [question1, question2, question3, question4, question5];

// initialize loop counting variable

	var loopCounter = 0;

// Map values from the first object to the radio buttons in the DOM; set correct answer variable


function loadQuestions(){

// radio 1
	document.getElementById('r1').value=quizQuestions[loopCounter].optionA;
	$('label[for=r1]').html(" " + quizQuestions[loopCounter].optionA);
// radio 2
	document.getElementById('r2').value=quizQuestions[loopCounter].optionB;
	$('label[for=r2]').html(" " + quizQuestions[loopCounter].optionB);
// radio 3
	document.getElementById('r3').value=quizQuestions[loopCounter].optionC;
	$('label[for=r3]').html(" " + quizQuestions[loopCounter].optionC);
// radio 4
	document.getElementById('r4').value=quizQuestions[loopCounter].optionD;
	$('label[for=r4]').html(" " + quizQuestions[loopCounter].optionD);
// correct answer variable
	var solution = quizQuestions[loopCounter].rightAnswer; 
}

// determine which radio button is selected on form submit

	$('#quiz-form').submit(function(event){
		event.preventDefault();
		if (document.getElementById('r1').checked) {
			userAnswer = document.getElementById('r1').value;
		} else if (document.getElementById('r2').checked) {
			userAnswer = document.getElementById('r2').value;
		} else if (document.getElementById('r3').checked) {
			userAnswer = document.getElementById('r3').value;
		} else {
			userAnswer = document.getElementById('r4').value;
		}
		console.log(userAnswer);
		if (userAnswer == solution) {
			console.log('correct, that is the ' + solution + ' muscle.');
		} else {
			console.log('sorry, that is not the ' + userAnswer + ' it is the ' + solution + '.');
		}
	});

});


//reset values for next question 

//function nextQuestion() {
//	loopCounter++;
//}









