import './bottle.css'

const Bottle = ({mum,cartHandleButton}) => {
    const {name,price,img,stock}=mum;
    return (
        <div className='bottle-container'>
            <h3>Bottle:{name}</h3>
            <img src={img} alt="" />
         <h4>Price:{price}</h4>
         <h5>In stock:{stock}</h5>
         <button onClick={()=>cartHandleButton(mum)}>Purchase</button>
        </div>
    );
};

export default Bottle;