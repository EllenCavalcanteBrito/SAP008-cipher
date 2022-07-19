import cipher from './cipher.js';

const textInput = document.getElementById("texto");

textInput.addEventListener("keypress",function(e) {

    if(!checkChar(e)){
        e.preventDefault()
    }
});
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = "[a-zA-Z]";

    if(char.match(pattern)){

    return true;
    }
}
function clickCifrar(e) {
    let mensagem = document.getElementById("texto").value
    mensagem = mensagem.toUpperCase()
    let numeroDeslocamento = parseInt(document.getElementById("offset").value);
    let cifra = cipher.encode(mensagem, numeroDeslocamento);
    document.getElementById("texto").value = cifra;
if (mensagem === ""){
    window.alert("Por favor, escreva um texto")
} 
else {
    window.alert("Seu texto será convertido")
}
}
document.getElementById("cifrar").addEventListener("click", clickCifrar);

function clickDecifrar() {
    let mensagem = document.getElementById("texto").value
    mensagem = mensagem.toUpperCase()
    let numeroDeslocamento = document.getElementById("offset").valueAsNumber;
    let cifra = cipher.decode(mensagem, numeroDeslocamento);
    document.getElementById("texto").value = cifra;
if (mensagem === ""){
        window.alert("Por favor, escreva um texto")
} else {
        window.alert("Seu texto será convertido")
}
}
document.getElementById("decifrar").addEventListener("click", clickDecifrar);