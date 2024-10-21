import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import { addToLs, getStoredCart } from "../../utilities/localstorage";

const Bottles = () => {
    const [bottles,setBottles] =useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])
  // load cart from local storage

    useEffect(()=>{
        console.log( "call the useEffect",bottles.length)
      if(bottles.length >0){
        const storedCart =getStoredCart();
        console.log(storedCart,bottles)


const savedCart =[];
for(const id of storedCart) {
    console.log(id)
    const bottle = bottles.find( bottle=>bottle.id === id);
    if(bottle){
        savedCart.push(bottle)
    }
}
    
    console.log(savedCart)
    setCart(savedCart)
      }
    },[bottles])


    const cartHandleButton = bottle =>{
const cartButton = [...cart,bottle]
setCart(cartButton);
addToLs(bottle.id);
    }
    return (
        <div>
            <h3>bottles here:{bottles.length}</h3>
        <h3>Bottle add:{cart.length}</h3>
       <div className='bottles-container'>
       {
            bottles.map(water=> <Bottle
                 key={water.id}
                 mum={water}
                 cartHandleButton={cartHandleButton}
                 ></Bottle>)
          }
       </div>
       </div>
    );
};

export default Bottles;