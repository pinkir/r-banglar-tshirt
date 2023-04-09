import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>brother</h3>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money + 1000)}>send: 1000Tk</button>
        </div>
    );
};

export default Brother;