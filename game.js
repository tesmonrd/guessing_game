
var ans1, ans2, ans3, ans4, ans5;

var name = prompt("Please enter your name.");

alert("Hey there, " + name + "! Please answer the questions with a 'Yes' or 'No'.");

var q1 = prompt('Is Rick from Seattle, Washington?');

if(q1.toLowerCase() === "yes" || "y" || "yeah") {
  alert("Wrong! He is from Cincinnati, Ohio.");
  ans1 = 0;
  console.log('The user answered incorrectly with ' + q1);
} else if(q1.toLowerCase() === "no" || "n" || "naw") {
  alert("Correct! He is from Cincinnati, Ohio");
  ans1=1;
  console.log('The user answered correctly with ' + q1);
} else {
  alert("That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.");
  ans1 = 0;
}

var q2 = prompt("Did Rick graduate college with a degree in psychology?");

if(q2.toLowerCase() === "yes" || "y" || "yeah") {
  alert("Correct! He specialized in research psychology.");
  ans2 = 1;
  console.log('The user answered correctly with ' + q2);
} else if(q2.toLowerCase() === "no" || "n" || "naw") {
  alert("Wrong! He majored in psychology with an emphasis on research.");
  ans2 = 0;
  console.log('The user answered incorrectly with ' + q2);
} else {
  alert("That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.");
  ans2 = 0;
}

var q3 = prompt("Did Rick live in Denmark?");

if(q3 === "yes" || "y" || "yeah") {
  alert("Correct! He lived in a town called Hareskov for 8 months.");
  ans3 = 1;
  console.log('The user answered correctly with ' + q3);
}   else if(q3.toLowerCase() === "no" || "n" || "naw") {
  alert("Wrong! He lived in a town called Hareskov for 8 months");
  ans3 = 0;
  console.log('The user answered incorrectly with ' + q3);
} else {
  alert("That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.");
  ans3 = 0;
}

var q4 = prompt("Is Rick a 'dog person'?");

if(q4 === "yes" || "y" || "yeah") {
  alert("Wrong! He is a 'cat person', but is very open to becomming a 'dog person'.");
  ans4 = 0;
  console.log('The user answered incorrectly with ' + q4);
} else if(q4.toLowerCase() === "no" || "n" || "naw") {
  alert("Correct, he is a self proclaimed 'cat person'.");
  ans4 = 1;
  console.log('The user answered correctly with ' + q4);
} else {
  alert("That is not a valid answer... moving on. Remember answer with a 'yes' or 'no'.");
  ans4 = 0;
}

var q5 = parseInt(prompt("What is Rick's lucky number? ANSWER WITH A NUMBER!"));

while (q5 !== 9) {
  alert("Not quite right... try again (hint: It's between 5 and 10");
  console.log('The user answered incorrectly with ' + q5);
  q5 = parseInt(prompt("What is Rick's lucky number? ANSWER WITH A NUMBER!"));
  ans5 = 0
}

alert("Correct! I'm not sure how you knew that; that's impressive");
console.log('The user answered correctly with ' + q5);
ans5 = 1;


var score = ans1 + ans2 + ans3 + ans4 + ans5;

if(score < 5) {
  alert("You got " + score + " out of 5 questions correct! Looks like you need to get to know Rick a bit more!");
} else{
  alert("You got a perfect score, " + score + " out of 5 right! You know Rick pretty well!");
}
