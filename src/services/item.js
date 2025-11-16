//AÇÕES:

//criar item

async function createItem(name, price, type, quantity){
    return{
        name,
        price,
        type,
        quantity,
        subtotal: () => price * quantity,
    };
};

export default createItem;