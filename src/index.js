import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

console.log("Iniciando carrinho:")

const cart = [];
const wishList = [];

//cria itens
const item1 = await createItem("teclado", 100.90,"periférico", 1);
const item2 = await createItem("monitor", 890.5,"periférico", 2);

//Adiciona itens
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, item2);

await cartService.displayCart(cart);
await cartService.calculateTotal(cart);

