const logo = document.getElementById("logo");
const menuHamburguesa = document.getElementById("iconmenu");
const btnNocturno = document.getElementById("nocturno");
const btnFavoritos = document.getElementById("favoritos");
const btnMisGifos = document.getElementById("mis-gifos");
const btnRueda = document.getElementById("rueda");
const btnIcono = document.getElementById("icono")
const navMenu = document.getElementById("navmenu")
const favorito = document.getElementById("favorito");
const misGifos = document.getElementById("misGifos");
const circulo = document.getElementById("circulo");
const buscador = document.getElementById("section-1")


menuHamburguesa.addEventListener("click", () => {
    btnIcono.classList.toggle("fa-bars");
    btnIcono.classList.toggle("fa-times");

    navMenu.classList.toggle("oculto");
});

function secciones(ele, funcion, sect1, sect2, sect3, sect4) {
    ele.addEventListener(funcion, () => {
        sect1.style.display = "block";
        sect2.style.display = "none";
        sect3.style.display = "none";
        sect4.style.display = "none";
    })
}
secciones(logo, "click", buscador, misGifos, circulo, favorito);
secciones(btnMisGifos, "click", misGifos, buscador, circulo, favorito);
secciones(btnFavoritos, "click", favorito, circulo, buscador, misGifos);

function search() {
    let palabra = document.getElementById("palabra").value;
    const apikey = "hvAnUXZU94XADuL3FIuxO3LjisOHTCRO";
    let searchEndpoint = "https://api.giphy.com/v1/gifs/search?api_key=" + apikey + "&q=" + palabra + "&limit=25&offset=0&rating=g&lang=en";
    fetch(searchEndpoint)
        .then(response => response.json())
        .then(json => console.log(json))
    }



