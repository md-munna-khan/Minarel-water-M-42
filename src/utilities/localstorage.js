const getStoredCart = ()=>{
  const storedCaratString =  localStorage.getItem('cart')
  if(storedCaratString){
    return JSON.parse(storedCaratString)
  }
  return[];
}

const saveCartToLs = cart =>{
    const cartString= JSON.stringify(cart)
    localStorage.setItem('cart',cartString)
}
const addToLs = id =>{
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLs(cart)
}
export{addToLs,getStoredCart}