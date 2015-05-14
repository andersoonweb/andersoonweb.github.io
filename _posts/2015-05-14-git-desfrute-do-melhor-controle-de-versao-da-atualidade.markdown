---
layout: post
title:  "Git - Desfrute do melhor controle de versão da atualidade - Parte 1"
published:   14-05-2015
categories: blog
description: Queria passar um pouco dos comandos que aprendi e agora utilizo no dia a dia e expor minha interpretação deles pra vocês. Ele foi desenvolvido por Linus, o criador doLinux...
comments: true
img:
    /assets/imagem/git-par1.jpg
---

<h2 class="topics">Meus primeiros passos...</h2>
Recentemente resolvi me aprofundar no Git, um sistema de controle de versão bem comum entre desenvolvedores. Queria conhecer  pouco mais dos comandos básicos <code>git add</code> , <code>git commit</code> e <code>git push</code>. Queria ver as mágicas que ele faz.  

Queria passar um pouco dos comandos que aprendi e agora utilizo no dia a dia e expor minha interpretação deles pra vocês. 

<h2 class="topics">O Git</h2>
Ele foi desenvolvido por <a target="_blank" href="http://pt.wikipedia.org/wiki/Linus_Torvalds" class="link-po-ex">Linus</a>, o criador do Linux para o desenvolvimento do <a href="http://pt.wikipedia.org/wiki/Linux_%28n%C3%BAcleo%29" target="_blank" class="link-po-ex">kernel</a>, mas foi adotado por outros projetos. 

<h2 class="topics">Git no dia a dia</h2>
O git é mais voltado pra grande e médias equipes, mas isso não lhe impede de trabalhar sozinho, é questão de organização; e ter um histórico de todo seu trabalho será legal. 

<span class="notes">Para ter um melhor compreendimento necessário que saiba o básico de <a target="_blank" class="link-po-ex" href="http://www.hardware.com.br/dicas/basico-linha-comando.html">linha de comando.</a></span>

<h2 class="topics">Instalação e iniciando o git</h2>
A instalação do Git é bem simples, ele funciona tanto no Windows,Linux e Mac. <a target="_blank" class="link-po-ex" href="https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git">Veja aqui como instalar</a>. 
Seguindo, depois da instação é preciso gerar um <a class="link-po-ex" href="#">keygen</a>. O que é isso ? É uma chave que te conecta do servidor local ao servidor web. Um exemplo bem nitido disso é o <a href="#" class="link-po-ex">Github</a>, aonde você tem um repositório local e outro na web. A  <a class="link-po-ex" href="#">keygen</a> faz a ligação para que possa enviar suas atualizações para o servidor web ou baixa-las do servidor web para o servidor local. <a href="https://help.github.com/articles/generating-ssh-keys/" class="link-po-ex">Nesse tutorial</a> mostra como instalar a keygen, é muito simples, em qualquer S.O, ainda de quebra, mostra como fazer a conexão como o Github.

<span class="notes">Muito cuidado com sua chave privada. Ela é a que não tem a extensão .pub. </span>

Após a instalação do git rode o comando <code>git init</code> na pasta que deseja trabalhar com ele. Isso criará um repositório <code>.git</code>, uma pasta oculta onde ficarão armazenadas todas as informações do seu projeto. Para visualizar a pasta rode o comando <code>ls -la</code>. 

<h2 class="topics">Comandos básicos</h2>
Para uma compreensão rápida desse tópico, vou dar um pequeno exemplo: Você vai até na padaria comprar pão. Chegando lá, olha todos os pães, pega o pão que deseja, coloca dentro de um saco, paga e leva. Aquele pão, se você não o quiser mais, tire-o da sacola. 
Com o Git não é diferente. Após rodar o comando <code>git init</code>,rode o comando <code>git status</code>, vai presenciar todos arquivos / pasta que estiver dentro daquela pasta do seu projeto. Se não tiver nenhum ainda, crie um e rode o comando <code>git status</code> novamente. 

Esses arquivos podemos assimilar com os paẽs a serem escolhidos. Podemos pegar cada um deles com o comando <code>git add</code>. Esse comando permite que você adicione os arquivos que desejar colocar pra entrar em um pacote / saco. Esse pacote é chamado de commit no git. 

<h2 class="topics">Atribuições do comando git add</h2>

<code>git add --all</code>

<code>git add .</code>

<li class="notes-code">Inclui tudo que estiver.</li>

<code>git add nome-do-arquivo</code>

<li class="notes-code">Inclui apenas o arquivo desejado.</li>

<code>git add *.extensão</code>

<li class="notes-code">Inclui apenas os arquivos que tiver a extensão que passar. Exemplo: git add *.scss, irá incluir todos os arquivos que terminam com .scss.</li>

Perceba que, quando eles não foram adicionados, serão mostrador em  <code>Untracked files</code>. Quando eles são adicionados, eles passam a <code>Changes to be committed</code>. Convertendo pra a linguagem do Git,<code> Untracked Files</code> eles estão fora da árvore, <code>Changes to be committed</code> estão dentro da árvore, pronto pra ser empacotado ou melhor commitado.

<h2 class="topics">Adicionando dentro do commit / pacote </h2>
Para transformar seus arquivos escolhidos em um commit basta rodar o comando <code>git commit -m "sua mensagem"</code> . A propriedade <code>-m</code> atribui uma mensagem ao seu commit, assim você terá um histórico e saberá o que cada um fez. Por exemplo: <code>git commit -m "Corrigindo bug do IE 8"</code>. Esse commit só de olhar você já sabe que,corrigiu o bug do navegador Internet explore. 

Existe um atribuição <code>-a</code>, ela consiste em adicoinar arquivos automaticamente. Ahn, mas como assim? Calma jovem, já explico. No seu dia a dia você com certeza irá modificar vários arquivos, e irá commitar. Bom, a atribuição <code>-a</code> só funciona em arquivos <code>On branch master</code>, ou seja, que já foi commitado, que já foi adicionado alguma vez. Para saber como identificar esses aquivos é bem simples, antes do nome ele vem mostrando que foi modificado. Ele fica assim: <code>modified: nome-do-arquivo</code>

Ah Anderson, agora fiz meu commit e ficou faltando um arquivo, o que eu faço ? Quero colocar ele dentro do commit anterior. Para tal existe um atribuição chamada <code>--amend</code> que irá juntar os/o arquivos/arquivo que você adicionou.  O comando ficaria assim: <code>git commit -m "Corrigindo bug do IE 8"--amend</code>.

<h2 class="topics">Revisão do comando git commit e suas atribuições</h2>
<code>git commit -a -m "mensagem do commit"</code> 

<code>git commit -am "Mensagem do commit"</code>

<li class="notes-code">Empacota diretamente, sem precisar rodar o comando <code>git add</code> pra adicionar. Vale lembrar que ele pega todos os arquivos modificados e só arquivos, <code>On branch master</code>, ou seja, arquivos modificados.</li>


<code>git commit -m "Bug border-radius IE" --amend</code>

<li class="notes-code">Adiciona arquivos que não foram commitado ao último commit. Consideraçaõ: Esse comando irá mesclar. Apagará o outro commit,pegará todas suas informações e junta com esse commit atual.</li>

<span class="notes">Vale lembrar que o arquivo deve estar dentro da árvore (Changes to be committed).</span>

Para verificar todos os commit basta rodar o comando ... 


<h2 class="topics">Continua...</h2>


