
function g(){
    fetch("https://www.dnd5eapi.co/api/2014/alignments")
          .then((response) => {
            console.log(response)
            return response.json();
          })}

const url = `https://www.dnd5eapi.co/api/2014/alignments`

const pull = g()
console.log(pull)