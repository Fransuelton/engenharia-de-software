# 📦 XML Products API

Uma API simples construída com **Node.js** e **Express** que lê um arquivo XML contendo produtos e fornece rotas para listagem e busca por ID.

---

## 🚀 Funcionalidades

- `GET /products`  
  Retorna todos os produtos do arquivo `products.xml` em formato JSON.

- `GET /products/:id`  
  Retorna um produto específico com base no `id`.

---

## 🧾 Exemplo de Estrutura XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<products>
  <product id="0">
    <name>Logitech Mouse</name>
    <price>10</price>
    <category>Setup</category>
  </product>
  <product id="1">
    <name>4K Smart TV</name>
    <price>499</price>
    <category>Home</category>
  </product>
</products>
```

## 📦 Dependências
- express
- xml2js

## 🧠 Autor
Feito por Fransuelton Francisco para praticar a criação e manipulação de arquivos XML, aplicando na prática o que foi aprendido durante este tema. 🚀

-- Desafio criado pelo ChatGPT e implementado 100% por mim.