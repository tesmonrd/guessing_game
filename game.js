
var value1, value2, value3, value4, value5, value6;

var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');
var ans7 = document.getElementById('answer7');

var name = prompt("Please enter your name.");

ans1.innerHTML = "Hey there, " + name + "! Please answer the questions with a 'Yes' or 'No'.";

function questionOne() {
  var q1 = prompt('Is Rick from Seattle, Washington?');

  if(q1.toLowerCase() === "yes" || q1.toLowerCase() === "y" || q1.toLowerCase() === "yeah") {
    ans2.innerHTML = "Wrong! He is from Cincinnati, Ohio.";
    value1 = 0;
    console.log('The user answered incorrectly with ' + q1);
  } else if(q1.toLowerCase() === "no" || q1.toLowerCase() === "n" || q1.toLowerCase() === "naw") {
    ans2.innerHTML = "Correct! He is from Cincinnati, Ohio";
    value1 = 1;
    console.log('The user answered correctly with ' + q1);
  } else {
    ans2.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value1 = 0;
  }
}

function questionTwo() {
  var q2 = prompt("Did Rick graduate college with a degree in psychology?");

  if(q2.toLowerCase() === "yes" || q2.toLowerCase() === "y" || q2.toLowerCase() === "yeah") {
    ans3.innerHTML = "Correct! He specialized in research psychology.";
    value2 = 1;
    console.log('The user answered correctly with ' + q2);
  } else if(q2.toLowerCase() === "no" || q2.toLowerCase() === "n" || q2.toLowerCase() === "naw") {
    ans3.innerHTML = "Wrong! He majored in psychology with an emphasis on research.";
    value2 = 0;
    console.log('The user answered incorrectly with ' + q2);
  } else {
    ans3.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value2 = 0;
  }
}

function questionThree() {
  var q3 = prompt("Did Rick live in Denmark?");

  if(q3.toLowerCase() === "yes" || q3.toLowerCase() === "y" || q3.toLowerCase() === "yeah") {
    ans4.innerHTML = "Correct! He lived in a town called Hareskov for 8 months.";
    value3 = 1;
    console.log('The user answered correctly with ' + q3);
  }   else if(q3.toLowerCase() === "no" || q3.toLowerCase() === "n" || q3.toLowerCase() === "naw") {
    ans4.innerHTML = "Wrong! He lived in a town called Hareskov for 8 months";
    value3 = 0;
    console.log('The user answered incorrectly with ' + q3);
  } else {
    ans4.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value3 = 0;
  }
}

function questionFour() {
  var q4 = prompt("Is Rick a 'dog person'?");

  if(q4.toLowerCase() === "yes" || q4.toLowerCase() === "y" || q4.toLowerCase() === "yeah") {
    ans5.innerHTML = "Wrong! He is a 'cat person', but is very open to becomming a 'dog person'.";
    value4 = 0;
    console.log('The user answered incorrectly with ' + q4);
  } else if(q4.toLowerCase() === "no" || q4.toLowerCase() === "n" || q4.toLowerCase() === "naw") {
    ans5.innerHTML = "Correct, he is a self proclaimed 'cat person'.";
    value4 = 1;
    console.log('The user answered correctly with ' + q4);
  } else {
    ans5.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value4 = 0;
  }
}


function questionFive() {
  var q5 = parseInt(prompt("What is Rick's lucky number? ANSWER WITH A NUMBER!"));

  while (q5 !== 9) {
    ans6.innerHTML = "Not quite right... try again (hint: It's between 5 and 10)";
    console.log('The user answered incorrectly with ' + q5);
    q5 = parseInt(prompt("What is Rick's lucky number? ANSWER WITH A NUMBER!"));
    value5 = 0
  }

  ans6.innerHTML = "Correct! I'm not sure how you knew that; that's impressive!";
  console.log('The user answered correctly with ' + q5);
  value5 = 1;
}

function questionSix() {
  var q6 = parseInt(prompt("How old is Rick?"));

  while (q6 !== 22) {
    ans7.innerHTML = "Not quite right...try again (hint: It's between 20 and 24)";
    console.log('The user answered incorrectly with ' + q6);
    q6 = parseInt(prompt("How old is Rick?"));
    value6 = 0
  }

  ans7.innerHTML = "Correct! I'm not sure how you knew that; that's impressive!";
    console.log('The user answered correctly with ' + q6);
    value6 = 1;
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();

var score = value1 + value2 + value3 + value4 + value5 + value6;

if(score < 5) {
  alert("You got " + score + " out of 6 questions correct! Looks like you need to get to know Rick a bit more!");
} else{
  alert("You got a perfect score, " + score + " out of 6 right! You know Rick pretty well!");
};
