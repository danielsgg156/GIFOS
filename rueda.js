const menuHamburguesa = document.getElementById("iconmenu");
const btnIcono = document.getElementById("icono");
const navMenu = document.getElementById("navmenu");
const buscador = document.getElementById("section-1");
const video = document.getElementById("video");
const ComenzarGrabacion = document.getElementById("comenzarGrabacion");
const labelTimer = document.getElementById("timer");
const config_recordrtc = {
	type: 'gif',
	frameRate: 1,
	quality: 10,
	width: 360,
	hidden: 240,
	onGifRecordingStarted: function () {
		console.log('started');
	},
};
let timer = null;
let stream = null;
let recorder = null;
let blob = null;

menuHamburguesa.addEventListener("click", () => {
    btnIcono.classList.toggle("fa-bars");
    btnIcono.classList.toggle("fa-times");

    navMenu.classList.toggle("oculto");
});



function getStream() {
    // hideVideo();
    hideScreenStep1();
    showScreenStep2();
    addClassSelectedToStep("btn1", "boton-1");
    //    addClassSelectedToStep("btn2", "boton-2");
    //    addClassSelectedToStep("btn3", "boton-3");
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
}

function grabar() {
    // quitar seleccion al boton #1
    removeClassSelectedToStep("btn1", "boton-1");

    //agregar seleccion al boton #2
    addClassSelectedToStep("btn2", "boton-2");

    //mostrar contador de tiempo para
    document.getElementById("timer").style.display = "block";

    // Iniciar contador de cornometro
    activeTimer();

    document.getElementById("btnGrabar").style.display = "none";
    document.getElementById("btnFinalizar").style.display = "block";

    //TODO implement
}

const parseTime = function(time) {
    const hours = Math.floor(time / 3600);
    time %= 3600;
    const minutes = Math.floor(time / 60);
    time %= 60;
    const seconds = time;

    const strHours = ('00' + hours).substr(-2, 2);
    const strMinutes = ('00' + minutes).substr(-2, 2);
    const strSeconds = ('00' + seconds).substr(-2, 2);

    return `${strHours}:${strMinutes}:${strSeconds}`;
};

function activeTimer() {
    let counter = 0;

    timer = setInterval(() => {
        counter++;
        labelTimer.textContent = parseTime(counter);
    }, 1000);
}


function finalizar() {
    //oculta boton finalizar
    document.getElementById("btnFinalizar").style.display = "none";
    // mostrar boton sbir gifos
    document.getElementById("btnSubirGifo").style.display = "block";
    //ocultar contador de tiempo 
    document.getElementById("timer").style.display = "none";
    //mostrar repetir captura 
    document.getElementById("repeatCapture").style.display = "block";

    //TODO: subir gifo
    //stream del gifo grabado
}

function hideBtnComenzar() {
    document.getElementById("btnComenzar").style.display = "none";
}

function showBtnGrabar() {
    document.getElementById("btnGrabar").style.display = "block";
}

function removeClassSelectedToStep(step, stepClass) {
    // se busca elemento (boton) por su id
    var element = document.getElementById(step);
    // eliminar clase actual
    element.classList.remove("btnSelected");
    // se agrega clase nueva
    element.classList.add(stepClass);
}

function addClassSelectedToStep(step, stepClass) {

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
document.querySelector("#btnGrabar").addEventListener("click", grabar);
document.querySelector("#btnFinalizar").addEventListener("click", finalizar);