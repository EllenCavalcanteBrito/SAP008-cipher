import cipher from './cipher.js';
function clickCifrar() {
var mensagem = document.getElementById("texto").value
var numeroDeslocamento = document.getElementById("deslocamento").value;
var cifra = cipher.cifragem(mensagem, numeroDeslocamento);
document.getElementById("texto").value = cifra;
if (mensagem === ""){
    window.alert("Por favor, escreva um texto")
} else {
    window.alert("Seu texto será convertido")
}
}
document.getElementById("cifrar").addEventListener("click", clickCifrar);

/* function clickDecifrar() {
    var cifragem = document.getElementById("texto").value
    var deslocamento = document.getElementById("deslocamento").value;
    var cifra = cipher.cifragem;
    console.log (result);
    document.getElementById("texto").value = result;
    }

function cifragem() {
    var mensagem = document.getElementById("texto").value;
    if (!mensagem.match(/[a-zA-Z]/gi)) {
        window.alert("Caracteres e números não são aceitos")
    } else {
        window.alert("Ok, sua mensagem será decifrada")
    }
}
document.getElementById("cifrar").addEventListener("click", cifragem);*/




console.log(cipher);
