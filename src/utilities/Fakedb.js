1 //use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart;

     //get the shopping cart
     const storedCard = localStorage.getItem('shopping-cart');
    if(storedCard){
        shoppingCart = JSON.parse(storedCard)
    }else{
        shoppingCart ={};
    }
    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = parseInt (quantity) + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

    const removeFromDb = id => {
        const storedCard = localStorage.getItem('shopping-cart');
        if(storedCard){
            const shoppingCart = JSON.parse(storedCard);
            if(id in shoppingCart){
               delete shoppingCart[id];
               localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            }
        }
 }

 const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
 }

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
}