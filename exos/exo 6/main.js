const list = document.getElementById("list");

const mushrooms = ["Cèpe", "Morille", "Girolle", "Chanterelle", "Pied-de-mouton"];

mushrooms.forEach(mushroom => {
    const li = document.createElement("li");
    li.innerHTML = mushroom;
    list.appendChild(li);

    li.addEventListener("click", () => {
        li.classList.toggle("disabled")
    })
})

