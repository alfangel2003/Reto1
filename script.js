function encriptar(){
    var texto = document.getElementById("textoCifrado").value.toLowerCase();

    var textoEncriptado= texto.replace(/e/img,"enter");
    var textoEncriptado= textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado= textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado= textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado= textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textoDescifrado").innerHTML=textoEncriptado;
    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";


}

function desencriptar(){
    var texto = document.getElementById("textoCifrado").value.toLowerCase();

    var textoEncriptado= texto.replace(/enter/img,"e");
    var textoEncriptado= textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado= textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado= textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado= textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("textoDescifrado").innerHTML=textoEncriptado;


}

function copiar(){
    var contenido=document.querySelector("#textoDescifrado");
    contenido.select();
    document.execCommand("copy");
}