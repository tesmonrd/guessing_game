
var value1, value2, value3, value4, value5, value6;

var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');
var ans7 = document.getElementById('answer7');
var ans8 = document.getElementById('answer8');

function questionZero() {
  var quest0 = prompt("Please enter your name.");

  ans1.innerHTML = "Hey there, " + quest0 + "! Please answer the questions with a 'Yes' or 'No'. <br /> <img style= 'width: 200px;' src='images/greetings.jpg' alt='greetings'/>"
}

function questionOne() {
  var quest1 = prompt('Is Rick from Seattle, Washington?');

  if(quest1.toLowerCase() === "yes" || quest1.toLowerCase() === "y" || quest1.toLowerCase() === "yeah") {
    ans2.innerHTML = "Wrong! He is from Cincinnati, Ohio.";
    ans2.className = "red";
    value1 = 0;
    console.log('The user answered incorrectly with ' + quest1);
  } else if(quest1.toLowerCase() === "no" || quest1.toLowerCase() === "n" || quest1.toLowerCase() === "naw") {
    ans2.innerHTML = 'Correct! He is from Cincinnati, Ohio <br /> <img style= "width: 200px;" src="images/Cincinnati-Bengals-Logo.gif" alt="Cincy"/>';
    ans2.className = "green";
    value1 = 1;
    console.log('The user answered correctly with ' + quest1);
  } else {
    ans2.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    ans2.className = "red";
    value1 = 0;
  }
}

function questionTwo() {
  var quest2 = prompt("Did Rick graduate college with a degree in psychology?");

  if(quest2.toLowerCase() === "yes" || quest2.toLowerCase() === "y" || quest2.toLowerCase() === "yeah") {
    ans3.innerHTML = 'Correct! He specialized in research psychology. <br /> <img style= "width: 200px;" src="images/Whitman.jpg" alt="College"/>';
    ans3.className = "green";
    value2 = 1;
    console.log('The user answered correctly with ' + quest2);
  } else if(quest2.toLowerCase() === "no" || quest2.toLowerCase() === "n" || quest2.toLowerCase() === "naw") {
    ans3.innerHTML = "Wrong! He majored in psychology with an emphasis on research.";
    ans3.className = "red";
    value2 = 0;
    console.log('The user answered incorrectly with ' + quest2);
  } else {
    ans3.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    ans3.className = "red";
    value2 = 0;
  }
}

function questionThree() {
  var quest3 = prompt("Did Rick live in Denmark?");

  if(quest3.toLowerCase() === "yes" || quest3.toLowerCase() === "y" || quest3.toLowerCase() === "yeah") {
    ans4.innerHTML = 'Correct! He lived in a town called Hareskov for 8 months. <br /> <img style= "width: 200px;" src="images/denmark-01.jpg" alt="Denmark"/>';
    ans4.className = "green";
    value3 = 1;
    console.log('The user answered correctly with ' + quest3);
  }   else if(quest3.toLowerCase() === "no" || quest3.toLowerCase() === "n" || quest3.toLowerCase() === "naw") {
    ans4.innerHTML = "Wrong! He lived in a town called Hareskov for 8 months";
    ans4.className = "red";
    value3 = 0;
    console.log('The user answered incorrectly with ' + quest3);
  } else {
    ans4.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    ans4.className = "red";
    value3 = 0;
  }
}

function questionFour() {
  var quest4 = prompt("Is Rick a 'dog person'?");

  if(quest4.toLowerCase() === "yes" || quest4.toLowerCase() === "y" || quest4.toLowerCase() === "yeah") {
    ans5.innerHTML = "Wrong! He is a 'cat person', but is very open to becomming a 'dog person'.";
    ans5.className = "red";
    value4 = 0;
    console.log('The user answered incorrectly with ' + quest4);
  } else if(quest4.toLowerCase() === "no" || quest4.toLowerCase() === "n" || quest4.toLowerCase() === "naw") {
    ans5.innerHTML = "Correct, he is a self proclaimed cat person. <br /> <img style= 'width: 200px;' src='images/cat.jpg' alt='Cat'/>";
    ans5.className = "green";
    value4 = 1;
    console.log('The user answered correctly with ' + quest4);
  } else {
    ans5.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    ans5.className = "red";
    value4 = 0;
  }
}


function questionFive() {
  var quest5 = parseInt(prompt("What is Rick's lucky number? ANSWER WITH A NUMBER!"));

  while (quest5 !== 9) {
    ans6.innerHTML = "Not quite right... try again (hint: It's between 5 and 10)";
    console.log('The user answered incorrectly with ' + quest5);
    quest5 = parseInt(prompt("What is Rick's lucky number? ANSWER WITH A NUMBER!"));
  }

  ans6.innerHTML = 'Correct! Have a free point! <br /> <img style= "width: 200px;" src="images/number9.png" alt="Number"/>';
  console.log('The user answered correctly with ' + quest5);
  ans6.className = "green";
  value5 = 1;
}

function questionSix() {
  var quest6 = parseInt(prompt("How old is Rick?"));

  while (quest6 !== 22) {
    ans7.innerHTML = "Not quite right...try again (hint: It's between 20 and 24)";
    console.log('The user answered incorrectly with ' + quest6);
    quest6 = parseInt(prompt("How old is Rick?"));
  }

  ans7.innerHTML = 'Correct! Have a free point! <br /> <img style= "width: 200px;" src="images/twentytwo.jpg" alt="22"/>';
    console.log('The user answered correctly with ' + quest6);
    ans7.className = "green";
    value6 = 1;
}

function questionSeven(){
  var score = value1 + value2 + value3 + value4 + value5 + value6;

  if(score < 5) {
    ans8.innerHTML = "You got " + score + " out of 6 questions correct! Looks like you need to get to know Rick a bit more!";
  } else{
    ans8.innerHTML = "You got a perfect score, " + score + " out of 6 correct! You know Rick pretty well!";
    }
}

questionZero();
window.setTimeout(questionOne, 1000);
window.setTimeout(questionTwo, 1050);
window.setTimeout(questionThree, 1100);
window.setTimeout(questionFour, 1150);
window.setTimeout(questionFive, 1200);
window.setTimeout(questionSix, 1250);
window.setTimeout(questionSeven, 1300);

