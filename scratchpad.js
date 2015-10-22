// TASKS AND OBJECTIVES 
// 1. Create an object that contains the required data fields
// 2. Pull elements from the object and put them into the DOM
// 3. Allow the user to select an item from the list by radio button and submit it
// 4. Compare the user selection to the right answer, which is stored in the object
// 5. If they match, tell the user that they are correct and increment the score by 1
// 6. Move on to the next question, and repeat until the quiz is done
// 7. Provide the final score  


// Create a factory function to create the quiz questions

function makeQuestion(optionA, optionB, optionC, optionD, rightAnswer) {
	var question = {};
	question.optionA = optionA;
	question.optionB = optionB;
	question.optionC = optionC;
	question.optionD = optionD;
	question.rightAnswer = rightAnswer;
	user.printOptions = function(){
		return this.optionA + "|" + this.optionB + "|" + this.optionC + "|" + this.optionD + "|" + this.rightAnswer
	}
	return question;
}

var question1 = makeQuestion("biceps brachii", "deltoid", "triceps brachii", "latissimus dorsi", "latissimus dorsi")

console.log(question1.printOptions());