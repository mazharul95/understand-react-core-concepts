import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            <h2>buy this: {name}</h2>
            <h2>only for: ${price}</h2>
            <p><small>it has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;