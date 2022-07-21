const cipher = {encode,decode}

function encode(mensagem,numeroDeslocamento) {
  let converterTexto = ""
  for (let index = 0; index < mensagem.length; index++) {
  let cifrar = ((mensagem.charCodeAt(index) + 65 + numeroDeslocamento) % 26)  + 65;
  converterTexto += String.fromCharCode(cifrar)
}
return converterTexto;
}

function decode(mensagem,numeroDeslocamento) {
  let converterTexto = ""
  for (let index = 0; index < mensagem.length; index++) {
  let cifrar = ((mensagem.charCodeAt(index) + 65 - (numeroDeslocamento !="")) % 26)  + 65;
  converterTexto += String.fromCharCode(cifrar)
}
return converterTexto;
}

export default cipher;