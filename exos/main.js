const btnExo = document.getElementById("btn-exo");
let count = 5;
btnExo.innerHTML = `Attendez ${count} secondes...`;
btnExo.disabled = true;

const timer = setInterval(function() {
    count--;
    btnExo.innerHTML = `Attendez ${count} secondes...`;
    if (count < 1) {
        btnExo.disabled = false;
        btnExo.innerHTML = "Cliquez-moi";
        clearInterval(timer);
    }
}, 1000);