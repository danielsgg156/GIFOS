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
    addClassSelectedToStep("btn1","boton-1");
    addClassSelectedToStep("btn2","boton-2");
    addClassSelectedToStep("btn3","boton-3");
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
          hideBtnComenzar();
          showBtnGrabar();
          removeClassSelectedToStep("btn1","boton-1");
}
function hideBtnComenzar(){
  document.getElementById("btnComenzar").style.display="none";
}

function showBtnGrabar(){
  document.getElementById("btnGrabar").style.display="block";
}
function removeClassSelectedToStep(step,stepClass){
   // se busca elemento (boton) por su id
   var element = document.getElementById(step);
   // eliminar clase actual
   element.classList.remove("btnSelected");
   // se agrega clase nueva
   element.classList.add(stepClass);
}

function addClassSelectedToStep(step,stepClass) {

    // se busca elemento (boton) por su id
    var element = document.getElementById(step);
    // eliminar clase actual
    element.classList.remove(stepClass);
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


