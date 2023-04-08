import React from 'react';
import './Tshirt.css'


const Tshirt = ({tshirt, handleCart}) => {
   const {_id, index, name, price, gender, picture} =tshirt;
   
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;