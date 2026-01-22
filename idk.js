
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