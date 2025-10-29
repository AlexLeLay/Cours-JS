const languages = document.getElementById("language");
const types = document.getElementById("type");
const numbers = document.getElementById("number");

const nsfw = document.getElementById("nsfw");
const religious = document.getElementById("religious");
const political = document.getElementById("political");
const racist = document.getElementById("racist");
const sexist = document.getElementById("sexist");
const explicit = document.getElementById("explicit");

const btn = document.getElementById("btn");
const jokesWrapper = document.getElementById("jokes-wrapper");
const jokeCard = document.createElement("div");

const checkboxes = document.querySelectorAll("input[type=checkbox]");
console.log(checkboxes);

let flags = [];

checkboxes.forEach(checkbox => {
    checkbox.checked = false;
})

function checkFlags() {
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            flags.push(checkbox.name)
        } else {
            
        }
    })    
}




btn.addEventListener("click", () => {
    checkFlags();
    // console.log(flags);
    
    const lang = languages.value;
    const type = types.value
    const num = numbers.value;
    const flag = flags.toString();
    jokeCard.innerHTML = "";

    let url = `https://v2.jokeapi.dev/joke/Any?lang=${lang}&amount=${num}&type=${type}&blacklistFlags=${flag}`;

    console.log(url);
    

    function getJoke(num) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (num > 1) {                    
                    data.jokes.forEach(element => {
                        if(element.setup) {      
                            const setup = document.createElement("p");
                            const delivery = document.createElement("p");
                            setup.innerHTML = element.setup;
                            delivery.innerHTML = element.delivery;

                            jokeCard.appendChild(setup);
                            jokeCard.appendChild(delivery)
                            
                        } else {
                            const joke = document.createElement("p");
                            joke.innerHTML = element.joke;
                            console.log(element);
                            
                            jokeCard.appendChild(joke);
                        }
                        jokesWrapper.appendChild(jokeCard);
                    });
                } else {
                    const joke = document.createElement("p");
                    joke.innerHTML = data.joke;
                    if (data.joke === undefined) {
                        joke.innerHTML = "Format de blague inconnu"
                    }

                    jokeCard.appendChild(joke);
                    jokesWrapper.appendChild(jokeCard);
                }

                
            })
            .catch(error => {
                const alert = document.createElement("p");

                alert.innerHTML = "Format de blague inconnu";
                jokeCard.appendChild(alert);
                jokesWrapper.appendChild(jokeCard);
            })
    }

    getJoke(num);
});