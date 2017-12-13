// fetch the replay button from the DOM
let replay = document.querySelector(".replay");

// when pressing the replay button - reset the game and shuffle the cards position
replay.addEventListener("click",function(event) {
  const all_cards = document.querySelectorAll('.card');
  const shuffled = shuffle(Array.from(all_cards));

  /*
  * loop trough all the shuffled cards
  * set background image
  * remove the background color of each card
  * append the shuffled cards to the memory board
  */

  shuffled.forEach(function(newCard) {
    newCard.classList.add("flipped");
    // newCard.style.backgroundImage = "url('img/card_back.jpg')";
    // newCard.style.removeProperty("background-color");
    memoryBoard.appendChild(newCard);
  });
});
