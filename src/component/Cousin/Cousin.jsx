import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>cousin</h2>
            <p>{children}</p>
            <p>{hasFriend && <Friend ring={ring}></Friend>}</p>
        </div>
    );
};

export default Cousin;