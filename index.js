let texto;
let palabraBuscar;
let remplazo;




function reemplazar(){
    palabraBuscar = document.getElementById("txtPalabra").value;
    remplazo = document.getElementById("txtRemplazo").value;

    texto = document.getElementById("texto").value;
    
    texto = texto.replace(palabraBuscar,remplazo);
    document.getElementById("texto").value = texto;

}


function limpiarCampos(){
    document.getElementById("txtPalabra").value = "";
    document.getElementById("txtRemplazo").value = "";
}









