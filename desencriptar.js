function capturarBtnDesencriptar(){
    var botonDesencriptar = document.querySelector("#btn-desencriptar");
    botonDesencriptar.addEventListener("click", desencriptar);
}

function desencriptar(event){
    event.preventDefault();
    var textoIngresado = capturarInput().value.toString();
    var textoDesencriptado = "";
    
    for(var i = 0, n = textoIngresado.length; i <= n-1; i++){
        if (textoIngresado[i] == "a"){
            const palabraClaveA = /ai/;
            var aTesteada = palabraClaveA.test(textoIngresado);
            if(aTesteada){
                textoDesencriptado = textoDesencriptado.concat("a");
                i = i + ("ai".length - 1);   
            }
        } else if (textoIngresado[i] == "e"){
            const palabraClaveE = /enter/;
            var eTesteada = palabraClaveE.test(textoIngresado);    
            if (eTesteada){
                textoDesencriptado = textoDesencriptado.concat("e");
                i = i + ("enter".length - 1);
            } 
        } else if (textoIngresado[i] == "i") {
            const palabraClaveI = /imes/;
            var iTesteada = palabraClaveI.test(textoIngresado);
            if (iTesteada){
                textoDesencriptado = textoDesencriptado.concat("i");
                i = i + ("imes".length - 1);
            } 
        } else if (textoIngresado[i] == "o"){
            const palabraClaveO = /ober/;
            var oTesteada = palabraClaveO.test(textoIngresado);
            if(oTesteada){
                textoDesencriptado = textoDesencriptado.concat("o");
                i = i + ("ober".length - 1);
            }
        } else if(textoIngresado[i] == "u"){
            const palabraClaveU = /ufat/;
            var uTesteada = palabraClaveU.test(textoIngresado);
            if (uTesteada){
                textoDesencriptado = textoDesencriptado.concat("u");
                i = i + ("ufat".length - 1);
            } 
        } else {
            textoDesencriptado = textoDesencriptado.concat(textoIngresado[i]); 
        }
    }
    capturarInput().value = "";
    capturarInput().focus();
    var impresionTexto = document.querySelector("#msg");
    impresionTexto.value = textoDesencriptado;
}

capturarBtnDesencriptar();