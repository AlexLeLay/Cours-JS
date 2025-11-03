const gallery = document.getElementById("gallery");
const btn = document.getElementById("btn");
const loader = document.getElementById("loader");
let usersNbr = 10;

function fetchUsers(){
    return fetch(`https://randomuser.me/api/?results=${usersNbr}`)
        .then(res => res.json())
        .then(data => data.results);
}

function displayUsers(users, quotes) {
    console.log(`Users = ${users}`);
    console.log(`Quotes = ${quotes}`);
    
    gallery.innerHTML = "";
    users.forEach((user, index) => {
        const quote = quotes[index];
        console.log(quote);
        const profilePicture = user.picture.thumbnail;
        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const country = user.location.country;
        const phoneNumber = user.cell;

        const userCard = document.createElement("div");
        userCard.classList.add("card");
        const profilePictureWrapper = document.createElement("div");
        profilePictureWrapper.classList.add("img-wrapper");
        const profilePictureImg = document.createElement("img");
        const userInfos = document.createElement("div");
        const fullNameText = document.createElement("p");
        const emailText = document.createElement("p");
        const countryText = document.createElement("p");
        const phoneNumberText = document.createElement("p");
        const quoteText = document.createElement("p");

        profilePictureImg.src = profilePicture;
        fullNameText.innerHTML = fullName;
        emailText.innerHTML = email;
        countryText.innerHTML = country;
        phoneNumberText.innerHTML = phoneNumber;
        quoteText.innerHTML = quote;

        profilePictureWrapper.appendChild(profilePictureImg);
        userCard.appendChild(profilePictureWrapper);
        userInfos.appendChild(fullNameText);
        userInfos.appendChild(emailText);
        userInfos.appendChild(countryText);
        userInfos.appendChild(phoneNumberText);
        userCard.appendChild(userInfos);
        userCard.appendChild(quoteText);

        loader.style.display = "none";
        gallery.appendChild(userCard);
    });
}

function fetchQuotes(usersNbr) {
    let quotes = [];
    for (let i = 0; i < usersNbr; i++) {
        const quote = fetch(`https://api.adviceslip.com/advice?ts=${Date.now()}-${Math.random()}`)
            .then(res => res.json())
            .then(data => data.slip.advice)
        quotes.push(quote)
    }
    return Promise.all(quotes);
}
// console.log(fetchUsers());
// console.log(fetchQuotes());


btn.addEventListener("click", async () => {
    loader.style.display = 'block';
    const users = await fetchUsers();
    const quotes = await fetchQuotes(usersNbr);
    displayUsers(users, quotes);
})