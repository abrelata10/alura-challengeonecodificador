function capturarInput(){
    var input = document.querySelector("#input-texto"); 
    input.addEventListener("input", analizarPalabra); 
    return input;
}

function analizarPalabra(event){
    event.preventDefault();
    var textoIngresado = capturarInput().value.toString();
    const minusculas = /[a-z]/;
    var testMinusculas = minusculas.test(textoIngresado);
    if (!testMinusculas){
        alert("No ingrese acentos, mayusculas ni caracteres especiales. Intente nuevamente");
        capturarInput().value = "";
        capturarInput().focus();
    } else {
        return "";
    }
}

capturarInput();


