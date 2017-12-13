// fetch the restart-button from the html document
let restart = document.querySelector(".restart");

// när jag klickar på knappen - kalla på shuffle-funktionen
restart.addEventListener("click",function(event) {
  const all_cards = document.querySelectorAll('.card');
  const shuffled = shuffle(Array.from(all_cards));
  shuffled.forEach(function(newCard) {
    newCard.classList.add("card");
    memoryBoard.appendChild(newCard);
  });
});
