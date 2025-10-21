const btnExo = document.getElementById("btn-exo");
let count = 5;
btnExo.innerHTML = `Attendez ${count} secondes...`;
btnExo.disabled = true;

const timer = setInterval(function() {
    count--;
    btnExo.innerHTML = `Attendez ${count} seconde${count > 1 ? "s" : ""}...`;
    if (count < 1) {
        btnExo.disabled = false;
        btnExo.innerHTML = "Cliquez-moi";
        clearInterval(timer);
    }
}, 1000);

btnExo.addEventListener("click", function() {
    if(btnExo.disabled) return; // Ici le return n'a pas d'utilité de retour, il permet uniquement de sortir de la fonction quand le bouton est désactivé, la suite est ignorée
    alert("Bravo ! Vous avez patienté.")
})