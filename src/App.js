import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SellerInfo from './Pages/SellerInfo';
import ItemInfo from './Components/ItemInfo';
import Document from './Components/Document';

function App() {
  const [sellerData, updateSellerData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [items, updateItems] = useState([]);

  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' 
          element={ <SellerInfo sellerData={sellerData} updateSellerData={updateSellerData} /> } 
        />
        <Route exact path='/items' 
          element={ <ItemInfo updateItems={updateItems} items={items} /> } 
        />
        <Route exact path='/document'
          element={ <Document items={items} sellerData={sellerData}/> }
        />
      </Routes>
    </div>
  );
}

export default App;
