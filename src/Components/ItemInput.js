import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import formatter from '../Helpers/formatter';

function ItemInfo(props) {
    const [title, updateTitle] = useState('');
    const [quantity, updateQuantity] = useState(1);
    const [price, updatePrice] = useState(0);

    function addItem(e) {
        e.preventDefault();
        const item = { title, quantity, price, id: uuidv4() };
        props.updateItems([...props.items, item]);
        updateTitle('');
        updateQuantity(1);
        updatePrice(0);
    }

    let total = 0;

    const showItems = props.items.map((item, i) => {
        total += parseFloat(item.price);

        return (
            <tr key={i}>
                <th scope='row'>{i + 1}</th>
                <td>{ item.title }</td>
                <td className='text-center'>{ item.quantity }</td>
                <td className='text-center'>{ formatter.format(parseFloat(item.price)) }</td>
                <td className='text-center'>
                    <i className="fas fa-trash-alt" />
                </td>
                <td className='text-center'>
                    <i className="fas fa-edit" />
                </td>
            </tr>
        )
    })

    return (
        <div className='row justify-content-center'>
            <form className='col-md-12' onSubmit={addItem}>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-10'>
                        <label className='form-label' htmlFor='title'>Item Title</label>
                        <input 
                            className='form-control'
                            type='text' name='title' id='title' required
                            value={title} onChange={ (e) => updateTitle(e.target.value) }
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='quantity'>Item Quantity</label>
                        <input 
                            className='form-control'
                            type='number' name='quantity' id='quantity' min='1' required
                            value={quantity} onChange={ e => updateQuantity(e.target.value) } 
                        />
                    </div>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='price'>Item Price</label>
                        <input 
                            className='form-control'
                            type='number' name='price' id='price' required min='0' step='.01'
                            value={price} onChange={ e => updatePrice(e.target.value) } 
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-10 d-flex justify-content-end'>
                        <button className='btn btn-primary' type='submit'>Add Item</button>
                    </div>

                </div>
            </form>
            <div className='row justify-content-center my-5'>
                <div className='col-md-10'>
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col" style={{width: '5%'}}>#</th>
                                <th scope="col" style={{width: '50%'}}>Item Description</th>
                                <th scope="col" style={{width: '5%'}} className='text-center'>QTY</th>
                                <th scope="col" style={{width: '20%'}} className='text-center'>Price Paid</th>
                                <th scope="col" style={{width: '10%'}} ></th>
                                <th scope="col" style={{width: '10%'}} ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {showItems} 
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope='row'></th>
                                <th scope='row'></th>
                                <th scope='row' className='text-center'>Total:</th>
                                <th scope='row' className='text-center'>{formatter.format(total)}</th>
                                <th scope='row'></th>
                                <th scope='row'></th>
                            </tr>
                        </tfoot>
                    </table>

                </div>

            </div>
            <div className='row my-5 justify-content-center'>
                <div className='col-6 d-flex justify-content-center'>
                    <Link className='btn btn-secondary' to='/'>BACK</Link>
                </div>
                <div className='col-6 d-flex justify-content-center'>
                    <Link className='btn btn-warning' to='/document'>CONTINUE</Link>
                </div>
            </div>

        </div>
    )
}

export default ItemInfo