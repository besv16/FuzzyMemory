const cards_id_one = document.querySelectorAll('.one');
const cards_id_two = document.querySelectorAll('.two');

cards_id_one.forEach(function(card_id_one) {
  console.log(card_id_one);
  card_id_one.addEventListener('click', function(event) {
    card_id_one.style.backgroundColor = "red";
    alert("You clicked number 1");
  });
});

cards_id_two.forEach(function(card_id_two) {
  console.log(card_id_two);
  card_id_two.addEventListener('click', function(event) {
    card_id_one.style.backgroundColor = "red";
    alert("You clicked number 2");
  });
});
