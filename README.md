# Cifra de César

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

A empresa (fictícia) Cifra/Decifra tem como objetivo:

- Criar senhas seguras para email.
- Mensagens secretas para alguma pessoa.

Nós utilizamos como metodologia umas das formas mais antigas de codificação que é a Cifra de César (apresentada no prefácio).
Abaixo é ilustrado o protótipo de baixa fidelidade:
<img src="https://github.com/EllenCavalcanteBrito/SAP008-cipher/blob/main/Prototipo%20baixa%20fidelidade%20(4).png">

## 2.1 Interface do usuário

A aplicação foi pensada para todos aqueles que desejam ter sua mensagem e/ou senha mais segura.
A interface permite ao usuário escrever seu texto, escolher a chave do deslocamento offset e selecionar se o texto deve ser cifrado ou decifrado, conforme imagem abaixo:
<img src="https://github.com/EllenCavalcanteBrito/SAP008-cipher/blob/main/Prototipo%20fiel.jpg">
E com isso ajudar o usuário a ter mais segurança em suas mensagens e/ou senha.

## 2.2 Arquivos

Para conhecimento técnico do projeto, na pasta src contém todos os arquivos utilizados para implementação do mesmo, sendo:
index.html = Onde contém a estrutura da página web
style.css = Folha de estilização
cipher.js = Lógica da function para codificar e decodificar a cifra de césar
index.js = Lógica da function para receber informações dos usuários e criptografar

Para visualizar a aplicação [clique aqui](https://ellencavalcantebrito.github.io/SAP008-cipher/)

## 3. Ferramentas utilizadas

- Html
- CSS
- Vanilla JS
