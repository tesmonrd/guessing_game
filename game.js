
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
  var quest1 = prompt('Is Rick from Seattle, Washington?');

  if(quest1.toLowerCase() === "yes" || quest1.toLowerCase() === "y" || quest1.toLowerCase() === "yeah") {
    ans2.innerHTML = "Wrong! He is from Cincinnati, Ohio.";
    value1 = 0;
    console.log('The user answered incorrectly with ' + quest1);
  } else if(quest1.toLowerCase() === "no" || quest1.toLowerCase() === "n" || quest1.toLowerCase() === "naw") {
    ans2.innerHTML = "Correct! He is from Cincinnati, Ohio";
    value1 = 1;
    console.log('The user answered correctly with ' + quest1);
  } else {
    ans2.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value1 = 0;
  }
}

function questionTwo() {
  var quest2 = prompt("Did Rick graduate college with a degree in psychology?");

  if(quest2.toLowerCase() === "yes" || quest2.toLowerCase() === "y" || quest2.toLowerCase() === "yeah") {
    ans3.innerHTML = "Correct! He specialized in research psychology.";
    value2 = 1;
    console.log('The user answered correctly with ' + quest2);
  } else if(quest2.toLowerCase() === "no" || quest2.toLowerCase() === "n" || quest2.toLowerCase() === "naw") {
    ans3.innerHTML = "Wrong! He majored in psychology with an emphasis on research.";
    value2 = 0;
    console.log('The user answered incorrectly with ' + quest2);
  } else {
    ans3.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value2 = 0;
  }
}

function questionThree() {
  var quest3 = prompt("Did Rick live in Denmark?");

  if(quest3.toLowerCase() === "yes" || quest3.toLowerCase() === "y" || quest3.toLowerCase() === "yeah") {
    ans4.innerHTML = "Correct! He lived in a town called Hareskov for 8 months.";
    value3 = 1;
    console.log('The user answered correctly with ' + quest3);
  }   else if(quest3.toLowerCase() === "no" || quest3.toLowerCase() === "n" || quest3.toLowerCase() === "naw") {
    ans4.innerHTML = "Wrong! He lived in a town called Hareskov for 8 months";
    value3 = 0;
    console.log('The user answered incorrectly with ' + quest3);
  } else {
    ans4.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
    value3 = 0;
  }
}

function questionFour() {
  var quest4 = prompt("Is Rick a 'dog person'?");

  if(quest4.toLowerCase() === "yes" || quest4.toLowerCase() === "y" || quest4.toLowerCase() === "yeah") {
    ans5.innerHTML = "Wrong! He is a 'cat person', but is very open to becomming a 'dog person'.";
    value4 = 0;
    console.log('The user answered incorrectly with ' + quest4);
  } else if(quest4.toLowerCase() === "no" || quest4.toLowerCase() === "n" || quest4.toLowerCase() === "naw") {
    ans5.innerHTML = "Correct, he is a self proclaimed 'cat person'.";
    value4 = 1;
    console.log('The user answered correctly with ' + quest4);
  } else {
    ans5.innerHTML = "That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.";
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

  ans6.innerHTML = "Correct! Have a free point!";
  console.log('The user answered correctly with ' + quest5);
  value5 = 1;
}

function questionSix() {
  var quest6 = parseInt(prompt("How old is Rick?"));

  while (quest6 !== 22) {
    ans7.innerHTML = "Not quite right...try again (hint: It's between 20 and 24)";
    console.log('The user answered incorrectly with ' + quest6);
    quest6 = parseInt(prompt("How old is Rick?"));
  }

  ans7.innerHTML = "Correct! Have a free point!";
    console.log('The user answered correctly with ' + quest6);
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
