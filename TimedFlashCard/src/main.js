import './styles.css';
import { FlashCards } from './flashcards.js';

let currentScore = 0; //this is global variable
$(document).ready(function() {
  let currentFlashCard = new FlashCards();
  let keyword = currentFlashCard.randomKeyword; //it points randomKeyword in getRandomVals function
  let value = currentFlashCard.randomValue; // it points randomValue in getRandomVals function
  $("#keyword").text(currentFlashCard.keywords[keyword]);
  $("#value").text(currentFlashCard.values[value]);

  $('.answer').click( function (event){
    event.preventDefault();
    let userInput = $(this).attr('id'); // $(this) refers to button that was clicked
    let computerAnswer = currentFlashCard.computerAnswer();
    currentScore = currentFlashCard.scoreKeeper(userInput, computerAnswer); //shouldn't start with let or var in order to maintain global variable.
    $("#score").text(currentScore);

    setTimeout(function(currentScore) {
      $("#score").text(currentScore);
      // $('#keyword').load('#keyword'); // somehow the .load() reload whole page rather than #keyword section
      // $('#value').load('#value'); // somehow the .load() reload whole page rather than #value section
      currentFlashCard.getRandomVals(); // We should call the getRandomVals function. 
      $("#keyword").text(currentFlashCard.keywords[currentFlashCard.randomKeyword]); // currentFlashCard.randomKeyword is equal to keyword but cannot
      $("#value").text(currentFlashCard.values[currentFlashCard.randomValue]);       // replaced in here becasuse the scope of variable.

    }, 5000);
  });
});



// let reload = setInterval(startLoad, 3000);
// function startLoad() {
//   console.log("Today is so hard....");
//   $('#keyword').load('#keyword');
//   $('#value').load('#value');
// }
// function stopLoad() {
//   clearInterval(reload);
//   stopLoad();
// }
