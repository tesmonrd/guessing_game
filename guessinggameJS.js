var name = prompt("Please enter your name.");
alert("Hey there, " + name +"! Please answer the questions with a 'Yes' or 'No'.");

  var q1= prompt('Is Rick from Seattle, Washington?');
    if(q1.toLowerCase() === "yes") {
      alert("Wrong! He is from Cincinnati, Ohio.");
      q1=0;
      console.log('The user answered incorrectly with' + q1);
    } else {
      alert("Correct! He is from Cincinnati, Ohio");
      q1=1;
      console.log('The user answered correctly with' + q1);
    };

  var q2= prompt("Did Rick graduate college with a degree in psychology?");
    if(q2.toLowerCase() === "yes") {
      alert("Correct! He specialized in research psychology.");
      q2=1;
      console.log('The user answered correctly with' + q2);
    } else {
      alert("Wrong! He majored in psychology with an emphasis on research.");
      q2=0;
      console.log('The user answered incorrectly with' + q2);
    };

  var q3= prompt("Did Rick live in Denmark?");

    if(q3.toLowerCase() === "yes") {
      alert("Correct! He lived in a town called Hareskov for 8 months.");
      q3=1;
      console.log('The user answered correctly with' + q3);
    } else{
        alert("Wrong! He lived in a town called Hareskov for 8 months");
      q3=0;
      console.log('The user answered incorrectly with' + q3);
      };

  var score= q1 + q2 + q3;

    if(score < 3) {
      alert("You got "+ score + " out of 3 questions correct! Looks like you need to get to know Rick a bit more!");
    } else{
      alert("You got a perfect score, " + score + " out of 3 right! You know Rick pretty well!");
    };
