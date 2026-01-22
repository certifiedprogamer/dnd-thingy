function g(){
    
    let d = fetch("https://www.dnd5eapi.co/api/2014/spells/acid-arrow")
          .then((response) => {
            return response.json();
          }).then(data => {
            console.log(data)
            let m = data
            return m
          })
    return d 
}

const c = g()
console.log(c)
g();

function createCard(tag) {
  const cardContainer = document.querySelector(".card-container");
  console.log(cardContainer);
  const card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);
}

createCard();
