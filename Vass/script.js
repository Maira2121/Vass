let menuVisible = false;
// Fnción que oculta  muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

// Función para ocultar el menú una vez que se seleccione una opción
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}
