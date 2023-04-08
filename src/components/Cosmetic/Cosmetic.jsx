import React from 'react';
import './Cosmetic.css';
import { addToDb } from '../../utilities/Fakedb';


const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    
    const addToCard = (id) => {
        console.log('item added', id);
        addToDb(id);

    }

    const addToCardWithParam = () => addToCard(id);

    return (
        <div className='product'>
            <h2>buy this: {name}</h2>
            <h2>only for: ${price}</h2>
            <p><small>it has id: {id}</small></p>
            <button onClick={addToCardWithParam}>Add to Card</button>
            <button onClick={() => addToCard(id) }>Purchase</button> {/* : shortcut way */}
        </div>
    );
};

export default Cosmetic;