//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('p').innerText = data.drinks[0].strInstructions    
        for (let i=1; i < 16; i++){
            let li = document.createElement('li');
            // add li text
            li.innerHTML = data.drinks[0][`strIngredient${i}`];
            document.querySelector('ul').appendChild(li)
        }
 
    })
    
    .catch(err =>{
        console.log(`error ${err}`)
    });
    
}

  
    // strDrink - name ("h2")
    // strDrinkThumb - picture ("img")
    //strInstructions - instructions ("h3")