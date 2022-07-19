const cipher = {encode,decode}

function encode(mensagem,numeroDeslocamento) {
  var converterTexto = ""
  for (var index = 0; index < mensagem.length; index++) {
    console.log(mensagem,numeroDeslocamento);
  var cifrar = ((mensagem.charCodeAt(index) + 65 + numeroDeslocamento) % 26)  + 65;
  console.log(cifrar)
  converterTexto += String.fromCharCode(cifrar)
}
console.log(converterTexto)
return converterTexto;
}

function decode(mensagem,numeroDeslocamento) {
  var converterTexto = ""
  for (var index = 0; index < mensagem.length; index++) {
    console.log(mensagem,numeroDeslocamento);
  var cifrar = ((mensagem.charCodeAt(index) + 65 - numeroDeslocamento) % 26)  + 65;
  console.log(cifrar)
  converterTexto += String.fromCharCode(cifrar)
}
console.log(converterTexto)
return converterTexto;
}

export default cipher;