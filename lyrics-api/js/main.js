//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const artist = document.querySelector('.artist').value;
  const song = document.querySelector('.song').value;
  const url = `https://api.lyrics.ovh/v1/${artist}/${song}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data.lyrics
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}