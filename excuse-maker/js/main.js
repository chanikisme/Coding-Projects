//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
    const url = "https://excuser.herokuapp.com/v1/excuse"

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
         console.log(data)
        document.querySelector(".random").innerText = data[0].excuse
        let cat = data[0].category
        let upperCat = cat.charAt(0).toUpperCase() + cat.slice(1);
        document.querySelector(".category").innerText = upperCat
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
 
