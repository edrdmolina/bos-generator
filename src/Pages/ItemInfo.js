import React from 'react'

import CoastalLogo from '../Assets/CoastalLogo.png';
import ItemInput from '../Components/ItemInput';

function ItemInfo(props) {
    const { items, updateItems } = props;

    return (
        <div className='container'>
            <div className='row my-5 justify-content-center'>
                <div className='col d-flex justify-content-center'>
                    <img className='coastal-logo' src={CoastalLogo} alt='logo'/>
                </div>
            </div>
            <ItemInput updateItems={updateItems} items={items} />
        </div>
    )
}

export default ItemInfo;