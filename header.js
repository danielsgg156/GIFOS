// const logo= document.getElementById("logo");
// const menuHamburguesa= document.getElementById("iconmenu");
// const btnNocturno= document.getElementById("nocturno");
// const btnFavoritos= document.getElementById("favoritos");
// const btnMisGifos= document.getElementById("mis-gifos");
// const btnRueda= document.getElementById("rueda");
// const btnIcono= document.getElementById("icono")
// const navMenu= document.getElementById("navmenu")
// const favorito= document.getElementById("favorito");
// const misGifos= document.getElementById("misGifos");
// const circulo= document.getElementById("circulo");
// const buscador=document.getElementById("sectionBuscar")


// menuHamburguesa.addEventListener("click",()=>{
//     btnIcono.classList.toggle("fa-bars");    
//     btnIcono.classList.toggle("fa-times"); 
   
//     navMenu.classList.toggle("oculto");
//        }
// )

// function secciones(ele,funcion,sect1,sect2,sect3,sect4){
//     ele.addEventListener(funcion,()=>{
//         sect1.style.display="block";
//         sect2.style.display="none";
//         sect3.style.display="none";
//         sect4.style.display="none";
//     })
// }
// secciones(logo,"click",buscador,misGifos,circulo,favorito);
// secciones(btnMisGifos, "click",misGifos,buscador,circulo,favorito);
// secciones(btnFavoritos,"click",favorito,circulo,buscador,misGifos);
// secciones(btnRueda,"click",circulo,misGifos,favorito,buscador);
 for( i=0; i<=10;i++){
    document.write([i]+"<br>" )
 }


 let dias= [ "lunes","martes", "miercoles","jueves", "viernes", "sabado", "domingo"];
 for(i=0;i<= dias.length -1; i++){
    document.write(dias[i]+ "<br>");
}


function suma(num1,num2) {
    let res = num1 + num2;
    return res
}
let resultado= suma (20,25);
document.write(resultado)