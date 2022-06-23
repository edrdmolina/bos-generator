import React from 'react';
import { Link } from 'react-router-dom';

function SellerInfo(props) {

    const updateInput = e => {
        props.updateSellerData({
            ...props.sellerData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div>
            <div className='input-group'>
                <label htmlFor='fullName'>Seller's Full Name</label>
                <input 
                    type='text' name='fullName' id='fullName'
                    value={props.sellerData.fullName} 
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='email'>Seller's Email</label>
                <input 
                    type='email' name='email' id='email' 
                    value={props.sellerData.email}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='phone'>Seller's Phone Number</label>
                <input 
                    type="tel" id="phone" name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={props.sellerData.phone}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='addressLine1'>Seller's Address Line 1</label>
                <input 
                    type='text' name='addressLine1' id='addressLine1' 
                    value={props.sellerData.addressLine1}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='addressLine2'>Seller's Address Line 2</label>
                <input 
                    type='text' name='addressLine2' id='addressLine2' 
                    value={props.sellerData.addressLine2}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='city'>City</label>
                <input 
                    type='text' name='city' id='city' 
                    value={props.sellerData.city}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='state'>State</label>
                <input 
                    type='text' name='state' id='state' 
                    value={props.sellerData.state}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='zipCode'>Zip Code</label>
                <input 
                    type='text' name='zipCode' id='zipCode' 
                    value={props.sellerData.zipCode}
                    onChange={updateInput}
                />
            </div>
            <div className='input-group'>
                <label htmlFor='country'>Country</label>
                <input 
                    type='text' name='country' id='country' 
                    value={props.sellerData.country}
                    onChange={updateInput}
                />
            </div>

            <Link to='/items'>Continue</Link>
        </div>
    )
}

export default SellerInfo