const menuHamburguesa = document.getElementById("iconmenu");
const btnIcono = document.getElementById("icono");
const navMenu = document.getElementById("navmenu");
const buscador = document.getElementById("section-1");
const video = document.getElementById("video");
const ComenzarGrabacion = document.getElementById("comenzarGrabacion");


menuHamburguesa.addEventListener("click", () => {
    btnIcono.classList.toggle("fa-bars");
    btnIcono.classList.toggle("fa-times");

    navMenu.classList.toggle("oculto");
});



function getStream() {
    // hideVideo();
    hideScreenStep1();
    showScreenStep2();
    changeClassButtonStep1();
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                height: { max: 480 }
            }
        })
        .then(function(stream) {
            video.srcObject = stream;
            video.play()
        });
}

function changeClassButtonStep1() {

    // se busca elemento (boton) por su id
    var element = document.getElementById("btn1");
    // eliminar clase actual
    element.classList.remove("boton-1");
    // se agrega clase nueva
    element.classList.add("btnSelected");
}

function hideScreenStep1() {
    // ocultar elemento html
    document.getElementById("screen_step_1").style.display = "none";
}

function showScreenStep2() {

    document.getElementById("screen_step_2").style.display = "block";
}

document.querySelector("#btnComenzar").addEventListener("click", getStream);


