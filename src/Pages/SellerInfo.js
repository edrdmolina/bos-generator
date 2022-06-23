import React from 'react'

import CoastalLogo from '../Assets/CoastalLogo.png';
import SellerInput from '../Components/SellerInput';

function SellerInfo(props) {
    const { sellerData, updateSellerData } = props;

    return (
        <div className='container'>
            <div className='row my-5 justify-content-center'>
                <div className='col d-flex justify-content-center'>
                    <img className='coastal-logo' src={CoastalLogo} alt='logo'/>
                </div>
            </div>
            <SellerInput sellerData={sellerData} updateSellerData={updateSellerData} />
        </div>
    )
}

export default SellerInfo