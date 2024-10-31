# Tecnologias do lado cliente

## HTML

HTML (HyperText Markup Language) é uma linguagem de marcação utilizada para criar páginas web. Ela é composta por uma série de elementos (tags) que definem a estrutura do conteúdo de uma página web. HTML é uma das tecnologias fundamentais para o desenvolvimento web junto com CSS e JavaScript. Criada por Tim Berners-Lee em 1990, HTML permite a criação de páginas web com imagens, links, textos, vídeos entre vários outros elementos.

As tags podem ser agrupadas em três categorias:

- Estruturais: definem a estrutura obrigatória de uma página web com tags como: **!DOCTYPE, **html**, **head** e **body**.
- Conteúdo: tem o papel de marcar o conteúdo, tags como: **h1**, **p**, **img**, **ol**, **form**..
- Semânticas: são tags que dão significado ao conteúdo, como: **header**, **footer**, **nav**, **article**, **main**...

### Sintaxe

A sintaxe do HTML e formada pelos sinais de maior e menor, alguns elementos podem ou não ter um fechamento `</>`.

```html
<> Isso é um elemento HTML </>

<p> Essa é uma tag de parágrafo.</p>
```
  
## CSS

CSS (Cascading Style Sheet) é uma linguagem de estilo utilizada para definir o layout e a aparência de uma página web.

| 💡 Em um website, o HTML cuida do conteúdo, da estruturação e o CSS cuida da apresentação, do layout.

### Sintaxe

A sintaxe do CSS é composta basicamente por seletor, propriedade e valor. O seletor é o elemento HTML que será estilizado, a propriedade é o atributo que será alterado e o valor é o novo valor da propriedade.

```css
seletor {
    propriedade: valor;
}
```

### Como utilizar o CSS

O CSS pode ser utilizado de três formas:

- Inline
- Interno
- Externo

#### Inline

Os estilos, neste caso, são aplicados com a utilização do atributo “style” seguido de uma ou mais propriedades/valores.

```html
<p style="font-size: 24px;">Alterando estilo via CSS inline</p>
```

#### Interno

Os estilos são definidos com a utilização da tag `style`, dentro da tag `head` no documento.

#### Externo

Essa é a forma preferencial de inserir estilos. Nela, é utilizado um arquivo externo, com extensão “.css”, contendo apenas estilos. Para vincular esse arquivo externo ao documento, é utilizada a tag <link> dentro da tag <head>.

### Boas práticas

- Utilize CSS externo sempre que possível.
- Compactar o arquivo utilizando o processo de minificação.

### Outras considerações

Os pré-processadores, como Sass, Less, Stylus etc. Em linhas gerais, um pré-processador é um programa que permite gerar CSS a partir de uma sintaxe — própria de cada pré-processador —, que inclui inúmeras facilidades não suportadas naturalmente pelo CSS, como variáveis, funções, regras aninhadas, entre outras.

## JavaScript

JavaScript é uma linguagem de programação que permite a criação de conteúdo dinâmico em páginas web. O JavaScript junto com HTML e CSS formam a tríade de tecnologias fundamentais para o desenvolvimento web. JavaScript é uma linguagem multi-paradigma, ou seja, ela suporta programação orientada a objetos, funcional e imperativa.


Essa linguagem oferece amplo suporte à manipulação de eventos relacionados a elementos HTML.

O JavaScript possui suporte a funções nativas para a exibição de caixas de diálogo para entrada de dados ou exibição de mensagens, como alertas, por exemplo.