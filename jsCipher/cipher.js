const cipher = {cifragem,decifragem}

function cifragem() {
  var converterTexto = String.fromCharCodeAt(cifrar); 
  for (var index = 0; index < texto.length; index++) {
  var cifrar = ((mensagem - 65 + deslocamento) % 26) + 65;
  converterTexto += String.fromCharCodeAt(cifrar)
 
}
return converterTexto;
}

function decifragem() {
  for (var index = 0; index < mensagem.length; index++) {
  var mensagem = document.getElementById("texto").value;
  var converterMensagem = String.fromCharCodeAt(mensagem)
  var deslocamento = document.getElementById("deslocamento").value;
  var decifrar = ((converterMensagem - 65 - deslocamento) % 26) + 65
  console.log(decifrar)
}
return decifrar
}

export default cipher; 