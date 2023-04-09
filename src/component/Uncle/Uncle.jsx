import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { children } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';


const Uncle = () => {
    const ring = useContext(RingContext)
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>money: {money}</p>
            <section className='flex'>
                <Cousin>nabil</Cousin>
                <Cousin>abil <p>Ring: {ring}</p></Cousin>
            </section>
        </div>
    );
};

export default Uncle;