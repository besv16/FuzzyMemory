let memoryBoard = document.querySelector("#card-container");
let all_cards = document.querySelectorAll('.card');

let array_compare = [];

all_cards.forEach(function(card) {

  card.addEventListener('click', function(event) {

    array_compare.push(card);
    console.log(card.dataset.id);

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
              item.style.backgroundColor = "#fff";
            }, 700);
          });
        }
        array_compare.length = 0;
    }
  });
});

// shuffle funktionen
function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// fetch the restart-button from the html document
let restart = document.querySelector(".restart");

const shuffled = shuffle(Array.from(all_cards));
shuffled.forEach(function(newCard) {
  newCard.style.backgroundColor = "#fff";
  memoryBoard.appendChild(newCard);
});

// när jag klickar på knappen - kalla på shuffle-funktionen
restart.addEventListener("click",function(event) {
  const all_cards = document.querySelectorAll('.card');
  const shuffled = shuffle(Array.from(all_cards));
  shuffled.forEach(function(newCard) {
    newCard.style.backgroundColor = "#fff";
    memoryBoard.appendChild(newCard);
  });
});
