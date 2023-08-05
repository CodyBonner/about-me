'use strict';


//console.log("hello world!");

alert("Welcome to the site! Hope you enjoy your stay. In the following prompt, I Cody the software developer will ask for your name as well as some follow up questions. Good luck and have fun!");

//User Question
let userName = prompt("What is your name?");
let a1 = userName;
alert("Welcome " + a1 + "." + " Let's see how much you know about Cody!");
//console.log("Username is: " + a1);

//Question One

let q1 = prompt("Does Cody like playing Video Games?").toLowerCase();

//conditionals

if(q1 === "y" || q1 === "yes"){

  alert("That's correct. Cody loves to play video games. So much so that he even streams them!");
  //console.log("Bingo!");
}
else{
  alert("That's wrong! He does in fact love playing video games");
  //console.log("Wrong, he loves them");

}

//question two

let q2 = prompt("Is Cody the youngest grandchild?").toLowerCase();

//question two conditionals

if(q2 === "y" || q2 ==="yes"){
  alert("That's incorrect, Cody is actually the oldest of the grandchildren in his family");
  //console.log("Nope, cody is the oldest");
}
else{
  alert("Right you are! Cody is actually the oldrest grandchild of his family, clocking in at 28 years old!");
  //console.log("Correct");
}

//question three

let q3 = prompt("Does Cody have any siblings?").toLowerCase();

//question three conditionals

if(q3 === "n"|| q3 ==="no"){
  alert("Not true! Cody actually does have siblings!");
  //console.log("Nope that's wrong");
}
else{
  alert("Winner Winner chicken dinner you're right! Cody does in fact have one sibling a younger brother");
  //console.log("Yes you're right!");
}

//question four

let q4 = prompt("Has Cody ever gone to college?").toLowerCase();

//question four conditionals

if(q4 === "yes" || q4 === "y"){
  alert("That's right! Cody has been to college, he's even graduated too!");
  //console.log("That's right cody has been to college!");
}
else{
  alert("Sorry my dear crusader, but you are incorrect. Cody has indeed been to college.");
  //console.log("That's not right!");
}


//question five

let q5 = prompt("Do you want to know more about Cody?");

if(q5 === "yes" || q5 === "y"){
  alert("Welcome to the site then! Here you'll learn just a little bit more about the software developer Cody!");
  alert("Enjoy your stay! And if needed ask questions.");
  //console.log("Awesome!");
}

else{
  alert("Oh...Well that's okay! Hope you enjoyed your time here anyways!");
// console.log("Rats");
}

alert("Once again as stated in the beginning, welcome to the page and enjoy your stay " + a1);


