function capturarBtnEncriptar(){
    var botonEncriptar = document.querySelector("#btn-encriptar");
    botonEncriptar.addEventListener("click", encriptar);
}

function encriptar(event){
    event.preventDefault();
    var textoIngresado = capturarInput().value.toString();
    var textoEncriptado = "";
    for(var i = 0, n = textoIngresado.length; i <= n-1; i++){
        if(textoIngresado[i] == "a"){
            textoEncriptado = textoEncriptado.concat("ai");
        } else if(textoIngresado[i] == "e"){
            textoEncriptado = textoEncriptado.concat("enter");
        } else if(textoIngresado[i] == "i"){
            textoEncriptado = textoEncriptado.concat("imes");
        } else if(textoIngresado[i] == "o"){
            textoEncriptado = textoEncriptado.concat("ober");
        } else if(textoIngresado[i] == "u"){
            textoEncriptado = textoEncriptado.concat("ufat");
        } else {
            textoEncriptado = textoEncriptado.concat(textoIngresado[i]);
        }
    }
    capturarInput().value = "";
    capturarInput().focus();
    var impresionTexto = document.querySelector("#msg");
    impresionTexto.value = textoEncriptado;
}

capturarBtnEncriptar();