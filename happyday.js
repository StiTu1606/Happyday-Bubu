const entrar = document.getElementById("entrar");

entrar.addEventListener("click", function() {
    document.getElementById("carta").scrollIntoView({
        behavior: "smooth"
    });
});

const musica = document.getElementById("musica");

musica.addEventListener("click", function() {
    window.open("https://youtu.be/BksBNbTIoPE?si=r3NRMLbWwIXw6U__", "_blank");
});

const fotos = document.querySelectorAll(".galeria img");

fotos.forEach(function(foto) {
    foto.addEventListener("click", function() {
        foto.style.transform = "scale(1.05)";

        setTimeout(function() {
            foto.style.transform = "scale(1)";
        }, 300);
    });
});

console.log("I love you, Bubu 🩷");
console.log("Happy 3 months together 🥹");

