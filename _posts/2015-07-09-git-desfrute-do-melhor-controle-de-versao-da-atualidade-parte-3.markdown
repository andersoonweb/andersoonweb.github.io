---
layout: post
title:  "Git - Desfrute do melhor controle de versão da atualidade - Parte (3/5)"
published:   09-07-2015
categories: blog
description: Nesse artigo vamos falar como visualizar todos os commits, como desfaze-los,como excluir o commit e recuperar os arquivos...
comments: true
image:   "/assets/imagem/git-part3.jpg"
edit: https://github.com/andersonweb/andersonweb.github.io/blob/master/_posts/2015-07-01-usando-can-i-use-na-linha-de-comando.md

---
<h4 class="topics-mini">Esse é o post #3 de 5</h4>
<a class="link-po-ex" href="/blog/2015/05/14/git-desfrute-do-melhor-controle-de-versao-da-atualidade.html">Parte 1</a>

<a class="link-po-ex" href="/blog/2015/06/04/git-desfrute-do-melhor-controle-de-versao-da-atualidade-parte-2.html">Parte 2</a>

<a class="link-po-ex" href="#">Está é a Parte 3</a>

<h2 class="topics">Stash, a gaveta mágica do Git</h2>

Um outro problema que pode acontecer diariamente com você é, está executando uma tarefa que não tem muita importância naquele determinado momento ou travou em uma tarefa, não consegue resolver e quer adiantar, executando outras tarefas mais simples.

Imagine você está resolvendo um bug do Firefox e chega seu chefe pedindo pra que resolva um bug do IE, pois o projeto vai ser lançado em poucos dias e a maioria dos acessos vem desse navegador e quer entregar uma boa experiência aos usuários do mesmo.

Suponha que não você não vai commitar, porque a tarefa está incompleta, que bagunça vai ficar seu índice, hein?!

O stash veio pra salvar seu projeto e não deixar seu índice um bagunça.   

<h2 class="topics">Mantanha-se sempre organizado</h2>

O stash realmente é uma gaveta, ele guarda seus arquivos e na hora que quiser pode ter ele de volta novamente, sem deixar seu índice poluídissimo e sem embolações no projeto, evitando fazer commits com alterações erradas.

Considerando que seu índice esteja cheio de arquivo e todos eles estão  <code>Changes to be commited</code> e você queira guardá-los, execute o comando <code>git stash</code>. Prosseguindo verifique se tem algum arquivos no índice com o comando <code> git status</code>. Provavelmente não haverá nenhum. Todos arquivos foram guardado. 

<span class="notes">É necessário que todos os arquivos estejam em <code>Changes to be commited</code>.</span>

<h2 class="topics">Entendendo as informações passada na lista</h2>
Ao executar <code>git stash list </code>, primeiramente ele mostra a numeração do stash <code>stash@{0}</code>. Em seguida mostrar a branch que foi criado o stash. Vamos falar de branch breve, você vai entender. Após, mostra a mensagem atribuída ou a numeração do stash.

<img src="/assets/imagem/example-stash-list.png" alt="">

<h2 class="topics">Atribuições do stash</h2>
<h4 class="topics-mini">Listando, salvando e nomeando</h4>
Após executar o comando para guardar podemos visualizar com <code>git stash list</code>. Irá aparecer tudo que você guardou em forma de lista. Ele fica armazenado como se fosse um commit. Isso quer dizer que a cada vez que você for guardar, ele separá uma gaveta particular só pra aqueles arquivos. Confira uma lista de várias gavetas.

![Stash list](/assets/imagem/stash-list.png)
Por padrão o comando <code>git stash</code> salva o stash nomeando como Update README.md. Mas você tem o controle de toda situação, pode salvar já passando um nome, com atribuição <code>save "nome do stash"</code>. o comando final ficaria assim : <code>git stash save "nome do stash"</code>.

<span class="notes">Sempre que puder, salve seu stash atribuindo um nome a ele. Lembre-se vamos ser organizado.</span>

<h4 class="topics-mini">Visualizando o stash e trazendo de volta</h4>
Para recuperar o stash, existe duas formas. A primeira trás o stash de volta e deleta da lista. A segunda, recupera e é deletada da lista do stash.

Para recuperar e deletar da lista, rode o comando <code>git stash pop</code>.

Para recuperar o stash e fazer uma especie de um backup, deixando uma cópia dele ainda na lista, rode o comando <code>git stash apply</code>. 

<span class="notes">É importante usar a atribuição <code>save "mensagem"</code> afim de uma organização melhor e, não se confundir quando for recuperar seus stash. Com todos nomeados será muito fácil de encontrá-los.</span>

Antes de recuperar, você quer dar uma confere pra não errar. Para isso o git disponibiliza a atribuição <code>show</code>, onde lista tudo que estiver dentro do stash. O comando final ficaria assim, <code> git stash show stash@{n}</code>.

![Stash show](/assets/imagem/stash-show.png)
<span class="notes"> Vale ressaltar que a letra <code>n</code> dentro dos colchetes se refere a numeração do stash. Cada qual tem sua numeração.</span>

<h4 class="topics-mini">Apagando stash</h4>

Assim como no tópico acima, também existe duas formas de executar esse processo. Apagar apenas um e apagar a lista completa.

<span class="notes">Essa operações deve ser usada com muita cautela. Vale lembrar que ele apaga literalmente.</span>

Com o intuito de apagar apenas um stash, adicione a atribuição <code>drop</code>. O comando final ficaria assim: <code>git stash drop stash@{n}</code>.

Para excluir tudo que estiver na lista do stash, execute a atribuição <code>clear</code>. O comando final ficaria assim: <code>git stash clear</code>.

<h2 class="topics">Entendendo o que é Branch</h2>

O comando Branch é muito importante, não tem pra onde correr, você tem que saber usar, ainda mais se tiver em equipe. No começo é um pouco complicado, mas depois você pega o jeito da coisa e, não vai conseguir viver sem usar. 

Podemos ver vários exemplo de branch em repositórios de código aberto no famoso <a class="link-po-ex" href="http://github.io">Github</a>.

![Alt text](/assets/imagem/exampleBranch.png)

Sem mais delongas, branch serve para separa suas tarefas. No exemplo acima ela está sendo utilizada para a resolução de exercícios. Cada exercícios está sendo resolvida em uma branch.

Exemplo do dia a dia: Seu time tem 20 tarefas para fazer, e a equipe contém 10 integrantes, dividimos e cada um ficaram com duas tarefas, cada tarefa será uma nova branch, por  exemplo uns dos integrantes ficou encarregado de resolver a Resolução Bug IE e Remover códigos inutilizáveis, cada tarefa dessa será uma branch nova.

Quando criamos um branch nova as alterações que fizermos estará sempre nela. Por padrão o git nos dar um branch que se chama master. Se criamos uma nova branch e modificar algum arquivo estando na branch que criamos esse arquivo não estará modificado em outras branch. Essa é uma parte muito delicada. Vale ressaltar que quando criamos uma branch dentro de outra branch as alterações da branch que estávamos irá acompanhar a branch criada. 

Por exemplo: Estamos na branch <code>master</code> que é a padrão e, criamos um branch com o nome <code>bugfix</code>, tudo que tem na brach master vai também ter na branch <code>bugfix</code>. Agora, modificamos algum arquivo na branch bugfix. Essa alteração não vai ser feita também na branch master, compreende?

<h2 class="topics">Começando a trabalhar</h2>
Para trabalhamos com branch vamos usar os comandos <code>git checkout</code> para criar branch, mudar de uma branch para a outra, e deletar. Vamos falar também sobre o comando <code>branch</code>, e o comando <code>merge</code> e <code>rebase</code>, que deixará uma branch igual a outra.


<h4 class="topics-mini">Criando branch</h4>
<code>git checkout -b nome-da-branch</code>

<span class="notes">Executando esse comando criará uma nova branch, não se esqueça que essa branch criada vai com as característica da branch que você estava. <code>nome-da-branch</code> deve ser alterado pelo nome que você quer dar na sua branch. Assim que criamos a branch o git nós transfere logo para a mesma.</span>

<h4 class="topics-mini">Mudando de branch</h4>
<code>git checkout nome-da-branch</code>

<span class="notes">Esse comando é muito simples! O <code>nome-da-branch</code> deve ser substituído por o nome da branchs que você criou. Ah, esqueci as branch que criei, e agora?! O git disponibiliza todas branch criada através do comando <code>git branch</code>.</span>

<h4 class="topics-mini">Deletando</h4>
<code>git checkout -d nome-da-branch</code>

<span class="notes">O atributo -d permite que delete a branch, vale lembrar que você não pode está dentro dela, se estiver, use <code>git checkout nome-da-branch</code> para mudar de brach. </span>

<code>git checkout -D nome-da-branch</code>

<span class="notes">O atributo maiúsculo pode ser usado quando você faz alguma alterações em uma branch e não enviou as alterações para outra e mesmo assim você pode deletar com esse comando. </span>

<h4 class="topics-mini">Trazendo o que não tem</h4>

É interessante você nunca trabalhar direto na master. Sempre que houver uma tarefa, crie uma branch, desenvolva tudo nela e quando estiver toda resolvida, jogue para a branch master. Assim evitamos muitos conflitos. Imagine se alguma coisa der errado, você só apaga a branch e acabou ou se um colega de trabalho quer trabalhar na sua tarefa só ir até a branch. Se tiver na master vai ter um trabalho maior. Memorize, sempre que tiver uma tarefa, crie uma nova branch.

Existe duas formas de trazer as mudanças de uma branch para a outra:

<code>git merge nome-da-branch</code>

<code>git rebase nome-da-branch</code>

Esse comando trás todas alterações que foram feita em outra branch e que não foram nele. Essas alterações tem que está dentro de um commit. Então, fez as alterações, resolveu a tarefa, empacota dentro do commit e mude para a branch que queira trazer de volta e execute o comando, vale lembrar que o <code>nome-da-branch</code> é a branch que você modificou os arquivos.  

No meu caso, quando termino a tarefa completamente faço o merge para a branch master, a branch padrão, onde fica tudo resolvido, nada vai pra lá pela metade ou faltando resolver quaisquer tarefa. Lembrando que, você vai até a branch que quer atualizar, e rode o comando.

<h4 class="topics-mini">Diferença entre Merge e Rebase </h4>
O rebase é mais preguiçoso, ele reconstrói a árvore e aplica o commit por cima. Já o merge, cria um novo commit para juntar as duas "pontas". Assim, mantêm um histórico melhor. 
Como estamos falando sobre organização, convenhamos sempre usar merge.

Esse assunto é um pouco complicado então, treine muito, depois que treinar muito e ficou bom, treine mais!
<h2 class="topics">Conflitos</h2>
<h2 class="topics"><a href="#">Continua...</a></h2>