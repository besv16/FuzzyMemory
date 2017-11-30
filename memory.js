let all_cards = document.querySelectorAll('.card');
let array_compare = [];

all_cards.forEach(function(card) {

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

    array_compare.push(card);

    if (array_compare.length == 2) {
        if (array_compare[0].dataset.id == array_compare[1].dataset.id) {
          console.log("IT'S A MATCH");
        }
        else {
          console.log("IT'S NOT A MATCH");
          array_compare.forEach(function(item) {
            setTimeout(function() {
              item.style.backgroundColor = "#fff";
            }, 1000);
          });
        }
        array_compare.length = 0;
    }

  });

});

let restart = document.querySelector(".restart");
restart.addEventListener('click', function(event) {
  
});
