# PHP

PHP (Hypertext Preprocessor) é uma linguagem de programação baseada em script, open source e destinada ao desenvolvimento de aplicações web. Esses scripts atuam no lado do servidor, ou seja, são executados no servidor web antes de serem enviados ao cliente.

Com o PHP podemos extrair dados provenientes de requisições de clientes como dados de login e senha de um formulário por exemplo, fazer integração com banco de dados, gerar páginas dinâmicas, trabalhar com paradigmas de programação orientada a objetos, entre outras funcionalidades.

## Como o PHP funciona

O PHP é uma linguagem interpretada, ou seja, ela precisa “rodar” sobre um servidor web. Com isso, todo o código gerado é interpretado pelo servidor, convertido em formato HTML e então exibido no navegador.

Logo, o código fonte não pode ser visto no lado cliente, mas apenas o HTML gerado.

Outra característica importante do PHP é poder ser utilizado na maior parte dos sistemas operacionais, assim como em vários servidores web diferentes, como o Apache, o IIS e o Nginx, entre outros.

## Anatomia de um script PHP

Um script PHP é composto por código delimitado pelas tags <?php e ?>. A última, de fechamento, não é obrigatória. Devido à sua simplicidade, um mesmo script PHP pode conter tanto código estruturado quanto orientado a objetos. Pode até conter código de marcação HTML. Neste último caso, o código próprio do PHP deverá ficar entre as tags de abertura e fechamento.

## Sintaxe

### Variáveis

No PHP, as variáveis são criadas com a utilização do símbolo de cifrão ($). Além disso, PHP é case sensitive, ou seja, sensível a letras maiúsculas e minúsculas, pois faz diferença quando utilizamos uma e outra.

```php

<?php

$nome = "Fulano";
$idade = 30;

```

### Tipos de dados

O PHP é uma linguagem fracamente tipada. Logo, embora possua suporte para isto, não é necessário definir o tipo de uma variável em sua declaração. Os tipos de dados disponíveis em PHP são: booleanos, inteiros, números de ponto flutuante, strings, arrays, interáveis (iterables), objetos, recursos, NULL e call-backs.

### Operadores condicionais

No PHP, há suporte às condicionais if, else, if e else ternários, if else e switch.

### Laços de repetição

No PHP estão disponíveis os laços for, foreach, while e do-while.

### Funções e métodos

O código PHP possui uma grande quantidade de funções e métodos nativos.

## Inclusão de scripts dentro de scripts

O PHP permite a inclusão de um script dentro de outro script. Isso é muito útil, sobretudo se pensarmos no paradigma de orientação a objetos, em que temos, em um programa, diversas classes, codificadas em diferentes scripts.

Para incluir um script em outro, o PHP disponibiliza algumas funções:

- Include
- Require
- Include once
- Require_once

## Acesso ao sistema de arquivos

Por meio do PHP, é possível ter acesso ao sistema de arquivos do servidor web. Com isso, pode-se por exemplo, manipular arquivos e diretórios, desde a simples listagem à inclusão ou à exclusão de dados.

## Conclusão

PHP é uma linguagem multiparadigma, baseada em scripts, que atua no lado do servidor, possibilitando a extração de dados provenientes das requisições dos clientes, integração com bancos de dados, entre outros recursos.