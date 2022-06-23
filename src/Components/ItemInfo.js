import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemInfo(props) {
    const [title, updateTitle] = useState('');
    const [quantity, updateQuantity] = useState(1);
    const [price, updatePrice] = useState(0);

    function addItem(e) {
        e.preventDefault();
        const item = { title, quantity, price };
        props.updateItems([...props.items, item]);
        updateTitle('');
        updateQuantity(1);
        updatePrice(0);
    }

    const showItems = props.items.map((item, i) => {
        return (
            <div key={i}>
                <p>{ item.title }</p>
                <p>{ item.quantity }</p>
                <p>{ item.price }</p>
            </div>
        )
    })

    return (
        <div>
            <form onSubmit={addItem}>
                <div className='input-group'>
                    <label>Item Title</label>
                    <input 
                        type='text' name='title' id='title' required
                        value={title} onChange={ (e) => updateTitle(e.target.value) }
                    />
                </div>
                <div className='input-group'>
                    <label>Item Quantity</label>
                    <input 
                        type='number' name='quantity' id='quantity' min='1' required
                        value={quantity} onChange={ e => updateQuantity(e.target.value) } 
                    />
                </div>
                <div className='input-group'>
                    <label>Item Price</label>
                    <input 
                        type='number' name='price' id='price' min='0' required
                        value={price} onChange={ e => updatePrice(e.target.value) } 
                    />
                </div>
                <button type='submit'>Add Item</button>
            </form>

            {showItems}

            <Link to='/document'>Continue</Link>

        </div>
    )
}

export default ItemInfo