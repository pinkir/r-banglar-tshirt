import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    let massage;
    if(cart.length === 0){
        massage = <p>Please add some product</p>;
    }
    else{
        massage = <div>
            <h3>boroloxxx</h3>
            <p>thanks for giving your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1? 'blue' : 'orange' }>order summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'green'}`}>something</p>
            {
            cart.length > 2 ? 
            <span className='blue'>aro kino</span> : <span>ffokira</span> 
            }
            {massage}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveCart(tshirt._id)}>X</button></p> )
            }
            {
                cart.length === 2 && <p>double bonanja</p>
            }
            {
                cart.length === 3 || <p>tinta hoynai</p>
            }
        </div>
    );
};

export default Cart;

// conditional rendering
// 1. use if else to set a veriable tat will contain an element, component.
// 2. ternary: condition ? 'for true' : 'false'
// 3. logical &&: (if the condition is true then the next thing will display) 
// 4.logical ||: (if the condition is false then the next thing display)

// conditional css class
// 1.use ternary
// 2.ternary inside template string