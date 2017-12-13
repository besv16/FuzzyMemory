// fetch the memory board from the DOM
let memoryBoard = document.querySelector("#card-container");

// fetch the memory board cards from the DOM
let all_cards = document.querySelectorAll('.card');

// create new empty array
let array_compare = [];

// loop trough all cards from the DOM
all_cards.forEach(function(card) {
  /* enable event listener click on each card
  * 
  */
  card.addEventListener('click', function(event) {
    array_compare.push(card);
    console.log(card.dataset.id);
    card.style.backgroundImage = "none";

    switch (card.dataset.id) {
      case '1':
        card.style.backgroundColor = "#E8655A";
        break;
      case '2':
        card.style.backgroundColor = "#691000";
        break;
      case '3':
        card.style.backgroundColor = "#699666";
        break;
      case '4':
        card.style.backgroundColor = "#B32C4F";
        break;
      case '5':
        card.style.backgroundColor = "#C46FFF";
        break;
      case '6':
        card.style.backgroundColor = "#60337D";
        break;
      case '7':
        card.style.backgroundColor = "#644F7D";
        break;
      case '8':
        card.style.backgroundColor = "#B2E85A";
        break;
    }

    if (array_compare.length == 2) {
        if (array_compare[0].dataset.id === array_compare[1].dataset.id) {
          console.log("IT'S A MATCH");
        }
        else {
          console.log("IT'S NOT A MATCH");
          array_compare.forEach(function(item) {
            setTimeout(function() {
              item.style.backgroundImage = "url('img/card_back.jpg')";
            }, 700);
          });
        }
        array_compare.length = 0;
    }
  });
});

const shuffled = shuffle(Array.from(all_cards));
shuffled.forEach(function(newCard) {
  newCard.style.backgroundColor = "none";
  newCard.style.backgroundImage = "url('img/card_back.jpg')";
  memoryBoard.appendChild(newCard);
});
