# Páginas dinâmicas e acesso a dados

O que são páginas dinâmicas ? 

A melhor forma de fazer isso, porém, é definindo o que seria o seu antônimo, ou seja, as páginas estáticas.

| HTML + JavaScript + CSS, sem conexão com uma linguagem de programação, formam o que podemos chamar de páginas estáticas. Embora seja até possível termos um site inteiro composto por páginas estáticas, isso seria muito trabalhoso e também nada usual.

utilizando o exemplo de um blog, imagine que você deseja receber comentários em seus posts, deseja que seus visitantes possam interagir com você e vice-versa. Como fazer isso? A resposta, como você já deve imaginar, é: **páginas dinâmicas**.

|**A combinação das tecnologias do lado cliente com as tecnologias do lado servidor produzem as páginas dinâmicas.**

Nas páginas dinâmicas, é possível receber as informações provenientes do cliente, processá-las, guardá-las, recuperá-las e utilizá-las sempre que desejarmos.

A tabela a seguir apresenta um pequeno resumo comparativo entre as páginas estáticas e dinâmicas.

| Característica                        | Páginas Estáticas                                     | Páginas Dinâmicas                                                     |
|---------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------|
| Inclusão/Alteração/Exclusão de conteúdo | Manualmente, direto no código HTML                    | Automaticamente através de scripts no lado servidor, como PHP         |
| Armazenamento do conteúdo             | Na própria página HTML                                | Em um banco de dados                                                  |

Outra importante característica de um site dinâmico é possibilitar a utilização de ferramentas de gestão de conteúdo (CMS) para manter as informações do site sempre atualizadas. Com isso, depois de pronto, não será mais necessário mexer nos códigos-fonte, basta acessar a ferramenta e gerenciar o conteúdo por meio dela. Já no site estático, será preciso modificar diretamente o código HTML, tornando necessário alguém com conhecimento técnico para isso.

## Acesso a dados

O ambiente web é composto por tecnologias que rodam do lado cliente e do lado servidor. Complementando o que vimos até aqui, temos ainda, do lado servidor, o banco de dados. De forma resumida, podemos defini-lo como um repositório em que diversas informações podem ser armazenadas e posteriormente recuperadas.

Para realizar a gestão desses dados, existem os SGBD, ou sistemas gerenciadores de bancos de dados. Se, por um lado, o SGBD é responsável por montar a estrutura do banco de dados — entre outras funções —, por outro lado, para recuperarmos uma informação guardada em um banco de dados e exibi-la em uma página web, é necessário utilizar uma linguagem do lado servidor, como o PHP. Em outras palavras, não é possível acessar o banco de dados utilizando apenas HTML ou mesmo JavaScript. Sempre será necessária a utilização de uma linguagem server side para o acesso aos dados.

| 💡 Há diversos tipos de SGBD para as mais variadas necessidades, com opções gratuitas ou pagas. Entre os gratuitos, dois são comumente utilizados em conjunto com o PHP: MySQL e PostgreSQL.

## Formas de acesso a dados

### A partir do HTML

Uma das maneiras mais comuns de enviar e recuperar dados a partir do HTML é fazendo uso de formulários. Com eles, é possível submetermos nossos dados para uma linguagem no lado servidor/PHP. Este, então, recebe as informações e as armazena no banco de dados. Da mesma forma acontece o caminho inverso. Podemos ter um formulário em nossa página HTML que solicite dados ao PHP e este as envie de volta, após recuperá-las do banco de dados.

Vale lembrar ainda o que vimos sobre o PHP: ele permite a utilização de códigos HTML diretamente em seus scripts. Logo, uma página web feita em PHP pode recuperar dados do banco de dados toda vez que é carregada. É isso o que acontece na maioria dos sites. Cada página visualizada é composta por conteúdo armazenado em banco de dados e código HTML produzidos por uma linguagem do lado servidor. Com isso, cada página que abrimos em sites dinâmicos implica uma chamada/requisição ao lado servidor — script e banco de dados.

### A partir do JavaScript

O JavaScript possui, essencialmente, duas formas para se comunicar com linguagens do lado servidor: por meio das APIs (Application Programming Interface) XMLHttpRequest e Fetch API. A primeira é amplamente utilizada, sendo a forma mais comum de realizar essa comunicação. É normalmente associada a uma técnica de desenvolvimento web chamada AJAX. Já a segunda é mais recente e oferece algumas melhorias, embora não seja suportada por todos os navegadores.

A comunicação em ambas consiste em, mediante algum evento no navegador, normalmente originado em uma ação disparada pelo usuário, enviar uma requisição ao lado servidor, como recuperar algum dado, por exemplo, tratar o seu retorno e o exibir na tela. Isso tudo sem que seja necessário recarregar toda a página.