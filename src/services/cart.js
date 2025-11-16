//AÇÕES: 

//add item
async function addItem(userCart, item) {
    userCart.push(item);
};

//calcular total
async function calculateTotal(userCart){
    const result =  userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTOTAL: ${result}`);
};
 
//deletar item
async function deleteItem(userCart, name){
   const index = userCart.findIndex((item) => item.name === name);

   if(index ===! -1){
    userCart.splice(index,1);
   } 
};

//remover item
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);
     if(indexFound == -1){
        console.log("Item não encontrado")
        return
     };

     if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
     };

     if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return;

     }
};

//mostrar cart
async function displayCart(userCart){
    console.log("\nCart list:")
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}


//filtrar itens
async function filterItem(userCart, type) {
    const filtered = userCart.filter((item) => item.type === type);

    if (filtered.length === 0) {
        console.log(`Nenhum item do tipo '${type}' encontrado.`);
        return [];
    }

    console.log(`Itens do tipo '${type}':`);
    filtered.forEach((item) => {
        console.log(`- ${item.name} | R$ ${item.price} | qtd: ${item.quantity}`);
    });

    return filtered;
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
    filterItem
};

