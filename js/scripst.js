let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(itemm){
    quitarBordes();
    mostrador.style.width = "110%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    itemm.style.border = "2px solid white";

    imgSeleccionada.src = itemm.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  itemm.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del producto ";

    precioSeleccionado.innerHTML =  itemm.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("itemm");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}