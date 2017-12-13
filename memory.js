// fetch the memory board from the DOM
let memoryBoard = document.querySelector("#card-container");

// fetch the memory board cards from the DOM
let all_cards = document.querySelectorAll('.card');

// create new empty array
let array_compare = [];

// loop trough all cards from the DOM
all_cards.forEach(function(card) {

  /*
  * 1. enable event listener (click) on each card
  * 2. push the selected cards (card x2) into the empty array named array_compare
  * 3. remove the background image on selected card
  * 4. based on which dataset-id the card has, change background color.
  */

  card.addEventListener('click', function(event) {

    array_compare.push(card);

    // card.classList.add("flipped");
    card.style.backgroundImage = "img/" + card.dataset.id +  ".png";
    console.log(card.style.backgroundImage = "url(img/" + card.dataset.id +  ".png)");
    card.style.backgroundSize = "contain";
    card.style.backgroundPosition = "center";

    /*
    * 5. check if the array contains two cards, if it does, compare them
    * 6. if they match, keep the cards flipped
    * 7. ..and if they don't, loop trough the two cards and flip them back after 700MS
    * 8. clear the array to start a new pairing
    */

    if (array_compare.length == 2) {
        if (array_compare[0].dataset.id === array_compare[1].dataset.id) {
          console.log("IT'S A MATCH");
        }
        else {
          console.log("IT'S NOT A MATCH");
          array_compare.forEach(function(item) {
            setTimeout(function() {
              item.style.backgroundImage = "url(\"img/card_back.jpg\")";
              item.style.backgroundSize = "cover";
            }, 700);
          });
        }
        array_compare.length = 0;
    }
  });
});

/*
* create const shuffled which calls the function shuffle with all cards as argument
* when the cards shuffles, flip the flipped cards back
*/

const shuffled = shuffle(Array.from(all_cards));
shuffled.forEach(function(newCard) {
  memoryBoard.appendChild(newCard);
});
