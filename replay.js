// fetch the replay-button from the html document
let replay = document.querySelector(".replay");

// när jag klickar på knappen - kalla på shuffle-funktionen
replay.addEventListener("click",function(event) {
  const all_cards = document.querySelectorAll('.card');
  const shuffled = shuffle(Array.from(all_cards));
  shuffled.forEach(function(newCard) {
    newCard.style.backgroundImage = "url('img/card_back.jpg')";
    newCard.style.removeProperty("background-color");
    memoryBoard.appendChild(newCard);
  });
});
