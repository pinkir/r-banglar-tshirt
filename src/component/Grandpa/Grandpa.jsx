import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h1>hello grandpa</h1>
            <RingContext.Provider>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;