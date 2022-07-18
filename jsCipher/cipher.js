const cipher = {cifragem}
function cifragem(texto,deslocamento) {
  var converterTexto = ""
  for (var index = 0; index < texto.length; index++) {
    console.log(texto,deslocamento);
  var cifrar = ((texto.charCodeAt(index) - 65 + deslocamento) % 26) + 65;
  console.log(cifrar)
  converterTexto += String.fromCharCode(cifrar)
}
console.log(converterTexto)
return converterTexto;
}

/* function decifragem() {
  for (var index = 0; index < mensagem.length; index++) {
  var mensagem = document.getElementById("texto").value;
  var converterMensagem = String.fromCharCodeAt(mensagem)
  var deslocamento = document.getElementById("deslocamento").value;
  var decifrar = ((converterMensagem - 65 - deslocamento) % 26) + 65
  console.log(decifrar)
}
return decifrar
}*/

export default cipher;