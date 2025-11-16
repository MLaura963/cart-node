
# 📦 Cart Manager – Sistema de Gerenciamento de Carrinho (Node.js)

Este projeto é um sistema simples de gerenciamento de carrinho de compras desenvolvido em **JavaScript (Node.js)**.
Ele permite criar itens, adicioná-los ao carrinho, removê-los, filtrá-los e calcular o total da compra.

O objetivo é demonstrar princípios de programação como modularização, funções assíncronas, estruturas condicionais, arrays, filtros e cálculos utilizando `reduce`.

---

## 🚀 Funcionalidades

### ✔️ Criar itens

Cada item possui:

* `name` — nome do item
* `price` — preço unitário
* `quantity` — quantidade
* `type` — categoria do item
* `subtotal()` — retorna `price * quantity`

---

### ✔️ Adicionar item ao carrinho

```js
addItem(userCart, item)
```

Insere o item no array do carrinho.

---

### ✔️ Excluir completamente um item

```js
deleteItem(userCart, name)
```

Remove o item **pelo nome**, apagando todo o registro.

---

### ✔️ Remover quantidade de item

```js
removeItem(userCart, item)
```

* Se a quantidade > 1 → diminui
* Se a quantidade = 1 → remove do carrinho
* Se não existir → mostra mensagem `"Item não encontrado"`

---

### ✔️ Listar itens do carrinho

```js
displayCart(userCart)
```

Exibe todos os itens no formato:

```
1. teclado - R$ 100.9 | 1 | Subtotal = 100.9
```

---

### ✔️ Filtrar itens por tipo

```js
filterItem(userCart, type)
```

Exibe todos os itens do tipo especificado (ex.: `"periferico"`).

---

### ✔️ Calcular total do carrinho

```js
calculateTotal(userCart)
```

Soma todos os subtotais usando `reduce`.

---

## 📁 Estrutura do Projeto

```
/
├── index.js
└── services/
    ├── cart.js
    └── item.js
```

