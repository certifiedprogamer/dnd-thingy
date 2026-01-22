function g() {
  fetch("https://www.dnd5eapi.co/api/2014/spells/acid-arrow")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

g();

function createCard(tag) {
  const cardContainer = document.querySelector(".card-container");
  console.log(cardContainer);
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);
}

createCard();
