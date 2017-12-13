// fetch the replay button from the DOM
let replay = document.querySelector(".replay");

// when pressing the replay button - reset the game and shuffle the cards position
replay.addEventListener("click",function(event) {
  const all_cards = document.querySelectorAll('.card');
  const shuffled = shuffle(Array.from(all_cards));

  /*
  * loop trough all the shuffled cards
  * remove the flipped class of every card (this will show the down-side image instead, like when we start a new game)
  * append the shuffled cards to the memory board
  */

  shuffled.forEach(function(card) {
    card.style.backgroundImage = "url(\"img/card_back.jpg\")";
    memoryBoard.appendChild(card);
  });
});
