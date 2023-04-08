import React from 'react';
import './Cosmetic.css';
import { addToDb, removeFromDb } from '../../utilities/Fakedb';


const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCard = (id) => {
        addToDb(id);
    }

    const removeFromCart = (id) =>{
        removeFromDb(id);
    }

    {/* const addToCardWithParam = () => addToCard(id); */}
    return (
        <div className='product'>
            <h2>buy this: {name}</h2>
            <h2>only for: ${price}</h2>
            <p><small>it has id: {id}</small></p>
           {/* <button onClick= {addToCardWithParam}>Add to Cart</button> */}
            <button onClick= {() => addToCard(id) }>Add to Cart</button> {/* : shortcut way */}
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;