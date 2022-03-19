function capturarBtnCopia(){
    var botonCopia = document.querySelector("#btn-copy");
    botonCopia.addEventListener("click", function(event){
    event.preventDefault();
    var impresionTexto = document.querySelector("#msg");
    impresionTexto.select();
    document.execCommand("copy");
});
}

capturarBtnCopia();