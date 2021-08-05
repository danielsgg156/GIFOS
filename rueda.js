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

document.querySelector("#btnComenzar").addEventListener("click", getStream);