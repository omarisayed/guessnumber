'use strict';
/*
document.querySelector(`.message`); //calls the class that has the name message from html file

console.log(document.querySelector(`.message`)); //will display on the console the html line where .message is. e.g. <p class  = "messasge"> Start guessing <p/>

console.log(document.querySelector(`.message`).textContent); //will display on the console the actual text content of the element of the <p> from the html file. i.e. Start guessing

//DOM is basically a connection point between HTML documents and JavaScript code.
//DOM stands for Document Object Model, and it is,basically, a structured representation of HTML documents.
//The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them. For example, we will be able to change text, to change HTML attributes and also to change CSS styles from our JavaScript.

//DOM is not a part of JS. It is actually a WEP API. API stands for Application Programming Interface.
//Web APIs are, basically, libraries that are also written in JavaScript and that are automatically available for us to use.

document.querySelector(`.message`).textContent = `Correct Number!`; //here, we set content to something else we want it to be. in this case, Correct Number!

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23; //without this, the input box would not have number 23 on display. it would be blank but you can write a number manually.
console.log(document.querySelector(`.guess`).value); //we are telling it to pick the default value 23 and show us on the console.

*/
//---------------------------HANDLING CLICK EVENTS--------------------------

//Now we make our application actually do something when we click on the Check button. So this is going to be the first time that our code reacts to something that happens in the DOM. And for that, we need to use an event listener.
//Now, an event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press, or many other events.
//Then, with an event listener,we can wait for a certain event to happen, and then react to it.

let secretNumber = Math.trunc(Math.random() * 20) + 1; //*20 because we want numbers between 0 and 19 then add +1 to make it between 0 and 20
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value); // we use the function  and we save the number to display into a variable to actually save it and retrieve it. the number displayed will be a string so we have to convert it into a number since we will compare with another number for the player to win the guessing game.
  console.log(guess, typeof guess); //so now when we select any other number it shows on the console.

  //when there is no input
  if (!guess) {
    //if no number is selected then display No Number! on the .message part of the page.
    document.querySelector(`.message`).textContent = `No Number!`;

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    displayMessage(`Correct Number`); //displaying using the function and we can do this for all of .message

    document.querySelector(`.number`).textContent = secretNumber; //displays number up there when player inputs correctly
    document.querySelector(`body`).style.backgroundColor = `#60b347`; //css manipulation(select whole body not .class then specify .style and the property to change)
    document.querySelector(`.number`).style.width = `30rem`; //remember when manipulating css the style has to be in a string. e.g. `30rem`

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //we have refactored the below blocks of code because it violated the DRY Princple (Dont Repeat Yourself)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `Too High!` : `Too low!`;
      displayMessage(guess > secretNumber ? `Too High!` : `Too low!`); //using function again
      score--; //score = score - 1
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  /*
  //when guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High!`;
      score--; //score = score - 1
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }

    //when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low!`;
      score--; //score = score - 1
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  */
});

/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //regenarate a number
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ` `; //Only input elements have a "value". It represent the input data supplied by the user or provided initially by the code.
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
