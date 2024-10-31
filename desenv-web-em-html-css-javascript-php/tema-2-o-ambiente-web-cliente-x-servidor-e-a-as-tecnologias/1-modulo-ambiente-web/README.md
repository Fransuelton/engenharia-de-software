# Demonstração prática da Arquitetura Cliente x Servidor

Este projeto ilustra de forma simples o ciclo de requisição (request) e resposta (response) da arquitetura cliente x servidor.

Aqui utilizamos uma página web dinâmica onde os usuários vêem um conteúdo personalizado após inserir os dados no formulário, nesse caso, nome e email.

![Processo de solicitação (request) e resposta (response).](https://github.com/user-attachments/assets/2f6d233b-29c3-497d-aea6-26f8c95286e0)


Os dados inseridos no formulário são enviados para o servidor, onde são processados e o servidor devolve uma resposta cotendo os códigos (HTML, CSS, PHP) que serão executados no próprio navegador.

Trata-se de um exemplo bem simples mas que ilustra bem o funcionamento que ocorre por trás de aplicações mais complexas.

O código original foi retirado de um exemplo no W3Schools, e foi adaptado por mim para fins de estudo.

Exemplo original: [PHP Form Handling](https://www.w3schools.com/php/php_forms.asp)

## Tecnologias utilizadas

- HTML
- CSS
- PHP
- PHP's built-in server (Servidor web embutido do PHP)

## Linhas de código

```html
<form action="welcome.php" method="post" class="form">
```

Aqui o atributo action está definindo o arquivo PHP que será responsável por processar os dados do formulário.

O atributo method define o método de envio dos dados, nesse exemplo estamos usando o método POST, mas também temos o método GET.

Importante lembrar de que se estamos usando um método POST ou GET no frontend, no backend também deve ser o mesmo método.

```php
<h1 class="title">Bem vindo(a), <?php echo $_POST['name'] ?>!</h1>
```

Aqui temos um trecho de código PHP onde o conteúdo do campo name que chegou na requisição e extraido. como foi dito acima deve ser o mesmo método, no caso o POST. 

A instrução `echo` exibe na tela o conteúdo vindo da requisição.

## Como executar

Caso queira executar este projeto em sua máquina, siga os passos abaixo:

1. Clone o repositório usando HTTP ou SSH:

```bash

git clone url-do-repositorio.git

```

2. Entre nesta branch:

```bash

git checkout 2-semestre

```

3. Navegue até a pasta do projeto:

```bash

cd desenv-web-em-html-css-javascript-php/tema-2-o-ambiente-web-cliente-x-servidor-e-a-as-tecnologias/1-modulo-ambiente-web

```

4. Inicie o servidor web embutido do PHP:

```bash

php -S localhost:8000

```

5. Abra o navegador e acesse o endereço `http://localhost:8000/` para visualizar o projeto.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo para obter detalhes.
