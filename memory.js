let all_cards = document.querySelectorAll('.card');
console.log(all_cards);

all_cards.forEach(function(card) {

  console.log('card id: ' + card.dataset.id);

  card.addEventListener('click', function(event) {


    if (card.dataset.id == 1) {
      card.style.backgroundColor = "#E8655A";
      alert("You clicked a card with ID 1");
    }

    if (card.dataset.id == 2) {
      card.style.backgroundColor = "#691000";
      alert("You clicked a card with ID 2");
    }

  });
});
