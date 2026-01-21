
function g(){
    fetch("https://www.dnd5eapi.co/api/2014/spells/acid-arrow/")
          .then((response) => {
            console.log(response.json())
            return response.json();
          })}

const url = `https://www.dnd5eapi.co/api/2014/alignments`

const pull = g()

setTimeout(() => {
    console.log(pull)
}, 7000);