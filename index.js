const logo = document.getElementById("logo");
const menuHamburguesa = document.getElementById("iconmenu");
const btnNocturno = document.getElementById("nocturno");
const btnFavoritos = document.getElementById("favoritos");
const btnMisGifos = document.getElementById("mis-gifos");
const btnRueda = document.getElementById("rueda");
const btnIcono = document.getElementById("icono");
const navMenu = document.getElementById("navmenu");
const favorito = document.getElementById("favorito");
const misGifos = document.getElementById("misGifos");
const circulo = document.getElementById("circulo");
const buscador = document.getElementById("section-1");
const video = document.getElementById("video");
const ComenzarGrabacion = document.getElementById("comenzarGrabacion");

//variable para limitat busqueda de imagenes
var limit = 12;

menuHamburguesa.addEventListener("click", () => {
  btnIcono.classList.toggle("fa-bars");
  btnIcono.classList.toggle("fa-times");

  navMenu.classList.toggle("oculto");
});

function secciones(ele, funcion, sect1, sect2, sect3, sect4) {
  ele.addEventListener(funcion, () => {
    sect1.style.display = "grid";
    sect2.style.display = "none";
    sect3.style.display = "none";
    sect4.style.display = "none";
  });
}
secciones(logo, "click", buscador, misGifos, circulo, favorito);
secciones(btnMisGifos, "click", misGifos, buscador, circulo, favorito);
secciones(btnFavoritos, "click", favorito, circulo, buscador, misGifos);
secciones(btnRueda, "click", circulo, favorito, buscador, misGifos);

function search() {
  let palabra = document.getElementById("palabra").value;
  const apikey = "hvAnUXZU94XADuL3FIuxO3LjisOHTCRO";
  let searchEndpoint =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apikey +
    "&q=" +
    palabra +
    "&limit=" +
    limit +
    "&offset=0&rating=g&lang=en";

<<<<<<< HEAD
    fetch(searchEndpoint) 
        .then(response => response.json())
        .then(data => crearImg(data));
    }
=======
  fetch(searchEndpoint)
    .then((response) => response.json())
    .then((data) => crearImg(data));
}
>>>>>>> 92d8ede319472a4374114083cb31a605b7ea8815

function crearImg(respuesta) {
  clearHtml();
  // if ( limit > 12)
  for (let i = 0; i < limit; i++) {
    var urlImg = respuesta.data[i].images.downsized.url;
    var img = new Image();
    img.src = urlImg;
    document.getElementById("images").appendChild(img);
  }
}
function clearHtml() {
  document.getElementById("images").innerHTML = "";
}

let text = document.getElementById("palabra");
text.addEventListener("keyup", (event) => {
  let inputTex = event.path[0].value;
  document.querySelector("#idshare").innerHTML = inputTex;
});

text.addEventListener("keyup", (event) => {
  let inputTex = event.path[0].value;
  document.querySelector("#idshare").innerHTML = inputTex;
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    search();
  }
});

function verMas() {
  var images = document.getElementById("images");
  var limitAnterior = limit;
  limit = limit + 12;
  search();
}
async function startRecording() {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  }).then (stream => {
      video.srcObject= stream;
  }).catch (console.error);
  
  let recorder = new RecordRTCPromisesHandler(stream, {
    type: "video",
  });
  recorder.startRecording();

  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  await sleep(3000);

  await recorder.stopRecording();
  let blob = await recorder.getBlob();
  invokeSaveAsDialog(blob);
}
document.querySelector("#comenzarGrabacion").addEventListener("click",startRecording);


// function startup(){
//     navigator.mediaDevices.getUserMedia({
//         audio: false,
//         video: true
//     }).then(stream =>{
//         video.srcObject= stream;
//     }).catch(console.error)
// }

// document.querySelector("#comenzarGrabacion").addEventListener("click",startup);

// function record (stream){
//     video.srcObject =stream;

//     let mediaRecord = new mediaRecord (stream,{
//         type: "video"
//     });

//     mediaRecord.start();

<<<<<<< HEAD

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1.5,
		slidesToScroll: 1.5,
        draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});
});
=======
// }
>>>>>>> 92d8ede319472a4374114083cb31a605b7ea8815
