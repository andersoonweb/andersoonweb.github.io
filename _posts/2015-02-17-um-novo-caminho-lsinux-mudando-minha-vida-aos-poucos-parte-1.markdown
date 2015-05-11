---
layout: post
title:  "Git pra desenvolvedores"
published:   19-02-2015
categories: blog
description: Queria passar um pouco dos comandos que aprendi e agora utilizo no dia a dia e expor minha interpretação deles pra vocês. Ele foi desenvolvido por Linus, o criador do Linux...
comments: true
img:
    /assets/imagem/git-par1.jpg
---

<h2 class="topics">Meus primeiros passos...</h2>
Recentemente resolvi me aprofundar no Git, um sistema de controle de versão bem comum entre desenvolvedores. Queria conhecer  pouco mais dos comandos básicos (git add , git commit -m e git push). Queria ver as mágicas que ele faz.  

Queria passar um pouco dos comandos que aprendi e agora utilizo no dia a dia e expor minha interpretação deles pra vocês. 

<h2 class="topics">O Git</h2>
Ele foi desenvolvido por <a target="_blank" href="http://pt.wikipedia.org/wiki/Linus_Torvalds" class="link-po-ex">Linus</a>, o criador do Linux para o desenvolvimento do <a href="http://pt.wikipedia.org/wiki/Linux_%28n%C3%BAcleo%29" target="_blank" class="link-po-ex">kernel</a>,mas foi adotado por outros projetos. 

<h2 class="topics">Git no dia a dia</h2>
O git é mais voltado pra grande e médias equipes, mas isso não lhe impede de trabalhar sozinho, é questão de organização; e ter um histórico de todo seu trabalho será legal. 

<h2 class="topics">Instalação e iniciando o git</h2>
A instalação do Git é bem simples, ele funciona tanto no Windows,Linux e Mac. <a target="_blank" class="link-po-ex" href="https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git">Veja aqui como instalar</a>. 
Apos a instalação do git rode o comando git init na pasta que deseja trabalhar com ele. Isso criará um repositório .git, uma pasta oculta onde ficarão armazenadas todas as informações do seu projeto. Para visualizar a pasta rode o comando ls -la. 

<h2 class="topics">Comandos básicos</h2>
<span class="notes">Para ter um melhor compreendimento necessário que saiba o básico de <a target="_blank" class="link-po-ex" href="http://www.hardware.com.br/dicas/basico-linha-comando.html">linha de comando.</a></span>
Para uma compreensão rápida desse tópico, vou dar um pequeno exemplo: Você vai até na padaria comprar pão. Chegando lá,olha todos os pães,pega o pão que deseja, coloca dentro de um saco, paga e leva. Aquele pão, se você não o quiser mais, tire-o da sacola. 
Com o Git não é diferente. Apos rodar o comando git init,rode o comando git status, vai presenciar todos arquivos / pasta que estiver dentro daquela pasta do seu projeto. Se não tiver nenhum ainda, crie um e rode o comando git status novamente. Segue a imagem.
Esses arquivos podemos assimilar com os paẽs a serem escolhidos. Podemos pegar cada um deles com o comando git add. Esse comando permite que você adicione os arquivos que desejar colocar pra entrar em um pacote / saco.Esse pacote é chamado de commit no git. 

<h2 class="topics">Sintaxe do comando git add: </h2>

git add --all ## Inclue tudo que estiver

git add nome-do-arquivo ## Inclue apenas o arquivo desejado 

git add *.extensão ## Inclue apenas os arquivos que tiver a extensão que passar, exemplo: git add *.scss, irá incluir todos os arquivos que terminam com .scss.

Perceba que, quando eles não foram adicionados,serão mostrador em  <strong>"Untracked files"</strong>.Quando eles são adicionados, eles passam a "Changes to be committed". Convertendo pra a linguagem do Git,Untracked Files eles estão fora da árvore, Changes to be committed estão dentro da árvore pronto, pra ser empacotado ou melhor commitado.

<h2 class="topics">Adicionando dentro do commit / pacote </h2>
Para transformar seu arquivos listado em um commit basta rodar o comando git commit -m "sua mensagem" . A propriedade -m atribui uma mensagem ao seu commit, assim você terá um histórico e saberá o que cada um fez. Por exemplo: git commit -m "Corrigindo bug do IE 8". Esse commit corrigiu o bug do navegador Internet explore. 

Existe um atribuição -a, ela consiste em adicoinar um arquivo automaticamente. Ahn, mas como assim? Calma jovem, já explico. No seu dia a dia você com certeza irá modificar vários arquivos, e irá commitar. Bom, a atribuição -a só funciona em arquivos "On branch master", ou seja, que já foi commitado, que já foi adicionado alguma vez. Para saber como identificar esse aquivos é bem simples, antes do nome ele vem mostrando que foi modificado. Ele fica assim: modified : nome-do-arquivo . A sintaxe do comando é a seguinte: git commit -a -m "mensagem do commit" ou git commit -am "Mensagem do commit" que ele empacota diretamente, sem precisar rodar o comando git add pra adicionar. Vale lembrar que ele pega todos os arquivos modificados e só arquivos, On branch master, ou seja, arquivos modificados.

Ah Anderson, eu fiz o commit e ficou faltando um arquivo, o que eu faço ? Para tal existe um atribuição chamada --amend que irá juntar os/o arquivo que você adicionou.  O comando ficaria assim: git commit -m "Corrigindo bug do IE 8" --amend.

<span class="notes">Vale lembrar que o arquivo deve estar dentro da árvore (Changes to be committed).</span>

Para verificar todos os commit basta rodar o comando git log, vamos falar mais sobre ele num próximo artigo. 


<h2 class="topics">Continua...</h2>

