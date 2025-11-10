import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];
const wishList = [];

const item1 = await createItem("teclado", 100.90, 2);
await cartService.addItem(cart, item1);
await cartService.calculateTotal(cart);

//console.log(item1.subtotal())

