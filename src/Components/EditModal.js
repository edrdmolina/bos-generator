import React, { useState } from 'react';

function EditModal(props) {
    const { id, title, quantity, price, items, updateItems, itemNumber } = props;

    const [titleEdit, updateTitleEdit] = useState(title);
    const [quantityEdit, updateQuantityEdit] = useState(quantity);
    const [priceEdit, updatePriceEdit] = useState(price);

    function updateItem(e) {
        e.preventDefault();
        
        const updatedItems = items.map(item => {
            if (item.id === id) {
                item.title = titleEdit;
                item.quantity = quantityEdit;
                item.price = priceEdit;
            }
            return item;
        })
        updateItems([...updatedItems]);
    }

    return (
        <div className="modal fade" id={`item${itemNumber}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content" onSubmit={updateItem}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit Item</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='row justify-content-center'>
                            <div className='mb-3 col-md-10'>
                                <label className='form-label' htmlFor='titleEdit'>Item Title</label>
                                <input 
                                    className='form-control'
                                    type='text' name='titleEdit' id='titleEdit' required
                                    value={titleEdit} onChange={ (e) => updateTitleEdit(e.target.value) }
                                />
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='mb-3 col-md-5'>
                                <label className='form-label' htmlFor='quantityEdit'>Item Quantity</label>
                                <input 
                                    className='form-control'
                                    type='number' name='quantityEdit' id='quantityEdit' min='1' required
                                    value={quantityEdit} onChange={ e => updateQuantityEdit(e.target.value) } 
                                />
                            </div>
                            <div className='mb-3 col-md-5'>
                                <label className='form-label' htmlFor='priceEdit'>Item Price</label>
                                <input 
                                    className='form-control' placeholder='0'
                                    type='number' name='priceEdit' id='priceEdit' required min='0' step='.01'
                                    value={priceEdit} onChange={ e => updatePriceEdit(e.target.value) } 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditModal