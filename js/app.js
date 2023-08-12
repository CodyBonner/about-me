"use strict";

//console.log("hello world!");

alert(
  "Welcome to the site! Hope you enjoy your stay. In the following prompt, I Cody the software developer will ask for your name as well as some follow up questions. Good luck and have fun!"
);

//User Question
let finalScore = 0;
let userName = prompt("What is your name?");
let a1 = userName;
alert("Welcome " + a1 + "." + " Let's see how much you know about Cody!");
//console.log("Username is: " + a1);

//Question One

let q1 = prompt("Does Cody like playing Video Games?").toLowerCase();

//conditionals

if (q1 === "y" || q1 === "yes") {
  alert(
    "That's correct. Cody loves to play video games. So much so that he even streams them!"
  );
  finalScore++;
  //console.log("Bingo!");
} else {
  alert("That's wrong! He does in fact love playing video games");
  finalScore--;
  //console.log("Wrong, he loves them");
}

//question two

let q2 = prompt("Is Cody the youngest grandchild?").toLowerCase();

//question two conditionals

if (q2 === "y" || q2 === "yes") {
  alert(
    "That's incorrect, Cody is actually the oldest of the grandchildren in his family"
  );
  finalScore--;
  //console.log("Nope, cody is the oldest");
} else {
  alert(
    "Right you are! Cody is actually the oldrest grandchild of his family, clocking in at 28 years old!"
  );
  finalScore++;
  //console.log("Correct");
}

//question three

let q3 = prompt("Does Cody have any siblings?").toLowerCase();

//question three conditionals

if (q3 === "n" || q3 === "no") {
  alert("Not true! Cody actually does have siblings!");
  finalScore--;
  //console.log("Nope that's wrong");
} else {
  alert(
    "Winner Winner chicken dinner you're right! Cody does in fact have one sibling a younger brother"
  );
  finalScore++;
  //console.log("Yes you're right!");
}

//question four

let q4 = prompt("Has Cody ever gone to college?").toLowerCase();

//question four conditionals

if (q4 === "yes" || q4 === "y") {
  alert("That's right! Cody has been to college, he's even graduated too!");
  finalScore++;
  //console.log("That's right cody has been to college!");
} else {
  alert(
    "Sorry my dear crusader, but you are incorrect. Cody has indeed been to college."
  );
  finalScore--;
  //console.log("That's not right!");
}

//question five

let q5 = prompt("Do you want to know more about Cody?");

if (q5 === "yes" || q5 === "y") {
  alert(
    "Welcome to the site then! Here you'll learn just a little bit more about the software developer Cody!"
  );
  alert("Enjoy your stay! And if needed ask questions.");
  finalScore++;
  //console.log("Awesome!");
} else {
  alert("Oh...Well that's okay! Hope you enjoyed your time here anyways!");
  finalScore--;
  // console.log("Rats");
}

//6th question, involving number guessing

let correctAnswer = 4;
let userGuess;
let attempts = 3;

//starting with a while loop to conditionalize the correct answer to the user's guessed attempt
while (correctAnswer !== userGuess) {
  userGuess = prompt(
    "Guess a number between 1 and 10 on how many years you think cody has gone to college."
  );
  userGuess = parseInt(userGuess);

  //if users guess is less than right answer and attempts left isn't 0 run condition.
  if (userGuess < correctAnswer && attempts !== 0) {
    alert("Sorry but that's too few years, please try again");
    attempts--;
    finalScore--;
  }

  //else if, userguess is higher than answer and attempts left isnt 0 run condition
  else if (userGuess > correctAnswer && attempts !== 0) {
    alert("Sorry but that answer is too high, try somewhere lower.");
    attempts--;
    finalScore--;
  }

  //if userguess does equal answer run condition
  else if (userGuess === correctAnswer) {
    alert(
      "Ding Ding Ding! You got it, Cody has gone to college for four years!"
    );
    finalScore++;
  }

  //if the attempts turn up at 0, then alert user they ran out of attempts.
  else if (attempts === 0) {
    alert(
      "Sorry you are out of attempts! The correct answer was 4 years of college!"
    );
    finalScore--;
    break;
  }
}

//7th question utilizing array and array information

let gamesArray = [
  "Destiny",
  "Fortnite",
  "Minecraft",
  "Skyrim",
  "Apex Legends",
  "Call of Duty",
  "Satisfactory",
  "Phasmaphobia",
  "Assassins Creed",
  "The Sims",
];

let arrayAttempts = 6;

let arrayGuess;

guessingGame: while (arrayAttempts > 0) {
  arrayGuess = prompt("I'd like you to try and guess a game i've played.");
  arrayAttempts--;

  for (let aa = 0; aa < gamesArray.length; aa++) {
    if (arrayGuess === gamesArray[aa]) {
      console.log("The code reached here");
      alert("Congrats! You got it right " + arrayGuess + " is on that list");
      alert(
        "The list of games that were available to chooser were: " +
          gamesArray.toString()
      );
      break guessingGame;
    }
  }
  if (arrayAttempts === 0) {
    alert(
      "Sorry you are out of attempts! The possible answers were: " +
        gamesArray.toString()
    );
    break guessingGame;
  }

  alert("Sorry that's the wrong answer you have: " + arrayAttempts + " left.");
  console.log("Code reached last else if");
}

alert(
  "You're final score that you received based on the questions you answered is: " +
    finalScore
);

//final message at the end
alert(
  "Once again as stated in the beginning, welcome to the page and enjoy your stay " +
    a1
);
