import React from 'react';
import { useNavigate } from 'react-router-dom';

function SellerInput(props) {
    const navigate = useNavigate();

    const updateInput = e => {
        props.updateSellerData({
            ...props.sellerData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/items');
    }

    return (
        <div className='row justify-content-center'>
            <form className='col-md-12' onSubmit={handleSubmit}>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-10'>
                        <label className='form-label' htmlFor='fullName'>Seller's Full Name</label>
                        <input 
                            type='text' name='fullName' id='fullName'
                            value={props.sellerData.fullName} required
                            onChange={updateInput} className='form-control'
                            />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='email'>Seller's Email</label>
                        <input 
                            type='email' name='email' id='email' 
                            value={props.sellerData.email} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='phone'>Seller's Phone Number</label>
                        <input 
                            type="tel" id="phone" name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder='012-345-6789'
                            value={props.sellerData.phone} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-10'>
                        <label className='form-label' htmlFor='addressLine1'>Seller's Address Line 1</label>
                        <input 
                            type='text' name='addressLine1' id='addressLine1' 
                            value={props.sellerData.addressLine1} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-10'>
                        <label className='form-label' htmlFor='addressLine2'>Seller's Address Line 2</label>
                        <input 
                            type='text' name='addressLine2' id='addressLine2' 
                            value={props.sellerData.addressLine2}
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='city'>City</label>
                        <input 
                            type='text' name='city' id='city' 
                            value={props.sellerData.city} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='state'>State</label>
                        <input 
                            type='text' name='state' id='state' 
                            value={props.sellerData.state} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='zipCode'>Zip Code</label>
                        <input 
                            type='text' name='zipCode' id='zipCode' 
                            value={props.sellerData.zipCode} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                    <div className='mb-3 col-md-5'>
                        <label className='form-label' htmlFor='country'>Country</label>
                        <input 
                            type='text' name='country' id='country' 
                            value={props.sellerData.country} required
                            onChange={updateInput} className='form-control'
                        />
                    </div>
                </div>
                <div className='row my-5 justify-content-center'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-warning' type='submit'>CONTINUE</button>
                        {/* <Link className='btn btn-warning' to='/items'>CONTINUE</Link> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SellerInput