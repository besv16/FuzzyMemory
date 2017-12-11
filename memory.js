let all_cards = document.querySelectorAll('.card');

let array_compare = [];

all_cards.forEach(function(card) {

  array_compare.push(card);

  card.addEventListener('click', function(event) {

    if (card.dataset.id == 1) {
      card.style.backgroundColor = "#E8655A";
    }

    if (card.dataset.id == 2) {
      card.style.backgroundColor = "#691000";
    }

    if (card.dataset.id == 3) {
      card.style.backgroundColor = "#699666";
    }

    if (card.dataset.id == 4) {
      card.style.backgroundColor = "#B32C4F";
    }

    if (card.dataset.id == 5) {
      card.style.backgroundColor = "#C46FFF";
    }

    if (card.dataset.id == 6) {
      card.style.backgroundColor = "#60337D";
    }

    if (card.dataset.id == 7) {
      card.style.backgroundColor = "#644F7D";
    }

    if (card.dataset.id == 8) {
      card.style.backgroundColor = "#B2E85A";
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
            }, 100);
          });
        }
        array_compare.length = 0;
    }
  });
});

console.log(array_compare);

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

let restart = document.querySelector(".restart");

restart.addEventListener("click",function (event) {
  array_compare = shuffle(array_compare);
  console.log(array_compare);
});
