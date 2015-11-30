---
layout: post
title:  "Git - Desfrute do melhor controle de versão da atualidade - Parte (2/5)"
published:   04-06-2015
categories: blog
description: Nesse artigo vamos falar como visualizar todos os commits, como desfaze-los,como excluir o commit e recuperar os arquivos...
comments: true
image:   "/assets/imagem/git-par2.jpg"
edit: https://github.com/andersonweb/andersonweb.github.io/blob/master/_posts/2015-06-04-git-desfrute-do-melhor-controle-de-versao-da-atualidade-parte-2.markdown

---
<h4 class="topics-mini">Esse é o post #2 de 5</h4>
<a class="link-po-ex" href="/blog/2015/05/14/git-desfrute-do-melhor-controle-de-versao-da-atualidade.html">Parte 1</a>

<a class="link-po-ex" href="#">Está é a Parte 2</a>

<a class="link-po-ex" href="/blog/2015/07/09/git-desfrute-do-melhor-controle-de-versao-da-atualidade-parte-3.html">Parte 3</a>

No artigo <a href="http://andersonweb.github.io/blog/2015/05/14/git-desfrute-do-melhor-controle-de-versao-da-atualidade.html" class="link-po-ex">parte 1</a>, abordamos alguns comandos básicos e suas atribuições. Nesse artigo vamos falar como visualizar todos os commits, como desfazê-los, como excluir o commit e recuperar os arquivos que ali estão dentro, também falaremos como reverter comandos, apagar um arquivo da árvore e guardar arquivos e visualizar alterações.

<h2 class="topics">O git é muito seguro</h2>
Fixe uma coisa na cabeça, com o git você não perde nada, absolutamente nada, você consegue ir revertendo todos os comandos. Alguns comandos tem que ser usados com um pouco de cautela.

<h2 class="topics">Como visualizar commits, importância da mensagem</h2>
O comando <code>git log</code>, lista todos os commits que foram feitos. Ele exibe algumas informações. Mostra, o <code>Hash</code> do commit, que uma numeração do mesmo. Eles nunca se repetem. Mostra o Autor do commit, a data que foi commitado e a mensagem que cada foi passada. 

Está aí a importância em informar uma mensagem a cada um commit, imagine se nenhum tivesse mensagem, como você iria identificar o processo ? E se você precisasse excluir alguns deles, como iria saber qual era? E se você tivesse trabalhando em equipe e fulano X tivesse feito uma alteração e não colocasse a mensagem, como você iria saber que essa tarefa já foi resolvida?

<h2 class="topics">Deletar commits e efetuar recuperação</h2>
Conheço duas formas de deletar commit, a primeira é a que mais uso, <code>git reset HEAD~N</code>. O <code>N</code> é o número do commit que queira deletar, exemplo <code>git reset HEAD~2</code>. 
<span class="notes">A numeração passada no comando <code>git reset HEAD~N</code> apaga desde o início até a numeração passada. Isso quer dizer se, passar o número 5 por exemplo, ele irá apagar do primeiro commit até o cinco.</span>

Por padrão o commit é apagado e todos os arquivos voltam a ser <code>Untracked files</code>. Existe atribuições que podem modificar essa posição. A atribuição <code>--hard</code> remove o commit literalmente, os arquivos não volta ser <code>Untracked files</code> e muito menos <code>Changes to be committed</code>. A atribuição <code>--soft</code>, apaga o commit e joga todos os arquivos em <code>Changes to be committed</code>. O comando <code>git reset HEAD~N --soft</code>, pode ser um alternativa a atribuição <code>--amend</code>.

Anderson, sem querer executei <code>git reset HEAD~N --hard</code> no commit e perdi o trabalho do dia todo, e agora, o que eu faço? Meu chefe vai me matar!!! Lembra do primeiro tópico que eu falei que com o git você não perde nada?! Sim, é possível você recuperar um commit mesmo ele sendo deletado literalmente. Para efetuar a recuperação, rode o comando <code>git reflog</code> ele listará todos commits deletados. 

Para trazê-lo de volta precisará executar o comando <code>git rebase seu-hash</code>. Mas como assim, meu hash ? Meu commit já foi apagado... Se você perceberem no lado esquerdo tem alguns números, aquele é o hash do seu commit, só copiar e colar. Existe também outra forma de recuperar pelo ID do <code>HEAD</code>, na segunda coluna mostra todos os <code>HEAD</code> e seus ids, só copiar e colar.

<span class="notes">O comando <code>git rebase</code> vai ser mais explorado em outros artigos.</span>

<h2 class="topics">Revisão do comando git reset e suas atribuições</h2>
senta e é muito bonita mesmo, seria legal um review, eu já fiz o meu 
<code>git reset HEAD~N</code>

<li class="notes-code">Apaga o commit e volta a ser <code>Untracked files</code>. 
<li class="notes-code"><code>N</code> é o número do commit que queira deletar.</li></li>

<code>git reset HEAD~N --hard</code> 

<li class="notes-code">Deleta o commit literalmente. Seus arquivos não vão pra nenhuma área.</li>

<code>git reset HEAD~N --soft</code> 

<li class="notes-code">Deleta o commit e seus arquivos passam a ser <code>Changes to be committed</code>.</li>

<code>git reflog</code>

<li class="notes-code">Lista todos os commits deletados</code>.</li>

<code>git rebase meu-hash</code>

<code>git rebase meu-head-id</code>

<li class="notes-code"> Recupera seu commit através de um Rash ou de um HEAD ID.</li>

<h2 class="topics" id="revertendo">Revertendo comandos</h2>

O comando <code>git reset HEAD</code> pode ser usado em outras oportunidades também, como na área de adicionamento de arquivos. Supondo que você adicionou vários arquivos a sua área de <code>Changes to be committed</code> e quer retirar um determinado arquivo para que ele vá em um outro commit. É simples! Rode o comando <code>git reset HEAD nome-do-arquivo</code> o moverá pra área de <code>Untracked files</code>.

<span class="notes">Não confunda os comandos, <code>git reset HEAD</code> retorna área <code>git reset HEAD~N </code>excluir commit.</span>

<h2 class="topics">Voltando a estrutura original</h2>
Uma coisa que acontece frequentemente é, modificar o arquivo e depois se arrepender do que fez e, quer retornar a sua forma original. <code>Ctrl + z</code> nem em todos casos pode te salvar. Não precisa ter dor de cabeça quanto a isso, o git resolve isso pra você. Use o comando <code>git checkout -- nome-do-arquivo</code>, ele voltará a ser como antes, excluindo todas suas alterações feitas.

<span class="notes">Para usar o comando <code>git checkout -- nome-do-arquivo</code> o arquivo deverá está na área de Untracked files. Se o mesmo estiver na área Changes to be committed use as instruções passada a cima para retirá-lo de lá.</span>

<h2 class="topics">Deletando arquivo da árvore</h2>

Para deleter um arquivo o mesmo precisa está em <code>Untracked files</code>, se não tiver só executar as instruções passada nesse tópico <a href="#revertendo" class="link-po-ex">aqui</a>. Para verificar se está dentro da árvore ou não use o comando <code>git status</code>. Após fazer a verificação rode o comando <code>git clean -f nome-do-arquivo</code> para deletar completamente do seu projeto.

<span class="notes">A atribuição <code> -f </code> força o clean a deleter.</span>

<h2 class="topics">Verificando alterações</h2>

Como citado na <a href="#" class="link-po-ex">parte 1</a>, no seu dia-a-dia você com certeza irá modificar vários arquivos. Alguns casos vai ser preciso que veja a alterações que fez, para essa atividade o git possui o comando <code>git diff nome-do-arquivo</code>. Bem simples de ser usar e muito útil.

<h2 class="topics">Revisão dos comandos, git reset HEAD, git checkout, git clean e git diff</h2>

<code>git reset HEAD nome-do-arquivo</code>

<li class="notes-code">Move o/os arquivo/arquivos da área de Changes to be committed para a área de Untracked files </code>.</li>

<code>git checkout -- nome-do-arquivo</code>

<li class="notes-code">Deleta todas alterações feita no arquivo</code>.</li>

<code>git clean -f nome-do-arquivo</code>

<li class="notes-code">Deleta o arquivo literalmente sem chance de recuperá-lo</code>.</li>

<code>git diff nome-do-arquivo</code>

<li class="notes-code">Visualizar alterações.</li>

<span class="notes">Se tiver mais de um arquivo a ser movido/revertido/excluído, basta seperá-los através de espaço. Exemplo: <code>git reset HEAD arquivo1.scss arquivo2.html</code>. Serve para qualquer comando acima. Não recomendo no <code>git diff</code>, pois, vai embolar muito.</span>

<h2 class="topics">Stash, a gaveta mágica do Git</h2>
<h2 class="topics"><a href="/blog/2015/07/09/git-desfrute-do-melhor-controle-de-versao-da-atualidade-parte-3.html">Continua...</a></h2>


