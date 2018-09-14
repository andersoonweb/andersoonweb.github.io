---
layout: post
title:  "Usando Can i use na linha de comando"
published:   01-07-2015
categories: blog
description: Aprenda como usar o Can i use, uma tabela de suporte dos navegadores na linha de comando. 
comments: true
image:   "/assets/images/caniuse.png"
edit: https://github.com/andersonweb/andersonweb.github.io/blob/master/_posts/2015-07-01-usando-can-i-use-na-linha-de-comando.md
---
<h2 class="topics">Introdução</h2>
Quem nunca acessou o <a target="_blank" href="http://caniuse.com/" class="link-po-ex"> Can i use</a> para verificar se alguma propriedade é compatível com determinado navegador ?!

Para aqueles que nunca acessaram, ou não conhece o <a target="_blank" href="http://caniuse.com/" class="link-po-ex">Can i use</a>, é uma tabela de suporte dos navegadores. Por exemplo, você quer usar uma nova propriedade do CSS3 e quer saber quais navegadores o suportam e, em quais versões.

Na imagem a seguir mostro a tabela de suporte da propriedade border-radius nos navegadores.
No final do box ele dispõe uma legenda onde informa o sentido das cores.

<img src="/assets/imagem/caniuse-border-radius.png" alt="Can i use border-radius">
<span class="notes">As legendas estão em inglês, mas é muito fácil de compreender</span>

<h2 class="topics">Disponível na linha de comando</h2>

Agora temos o can i use disponível no terminal. Basta fazer a instalação desse pacote desse pacote npm, <code>npm install -g caniuse-cmd</code> (se estiver no Linux ou no Mac não esqueça do <code>sudo</code>, tá ?) e pronto, ele está instalado globalmente, isso quer dizer que, você em qualquer diretório pode rodar o comando.

Após a instalação para utilizá-lo é muito fácil, basta escrever <code>caniuse</code> e o nome da propriedade que deseja. Por exemplo, <code>caniuse border-radius</code>. 

<img src="/assets/imagem/example-terminal-option.png" alt=" Exemplo opções">

Também podemos passar opções no comando, como <code>caniuse border-radius --mobile</code>, aonde mostra suporte de navegadores mobile.

Para verificar todas opções, acesse o <a target="_blank" href="https://github.com/sgentle/caniuse-cmd" class="link-po-ex">repositório</a> no github.


Até a próxima! :)
