import React from 'react';
import Cousin from '../Cousin/Cousin';
import { children } from 'react';
const Aunty = ({ring}) => {
    return (
        <div>
            <h2>aunty</h2>
            <section className='flex'>
            <Cousin>piya</Cousin>
            <Cousin hasFriend={true} ring={ring}>Diya</Cousin>
            </section>
        </div>
    );
};

export default Aunty;