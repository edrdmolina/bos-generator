import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SellerInfo from './Pages/SellerInfo';
import ItemInfo from './Pages/ItemInfo';
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
    country: 'United States',
  });
  const [items, updateItems] = useState([]);
  const [employeeName, updateEmployeeName] = useState('');

  return (
    <div className='container'>
      <Routes>
        <Route exact path='/'
          element={ <SellerInfo sellerData={sellerData} updateSellerData={updateSellerData} /> }
        />
        <Route exact path='/items'
          element={ <ItemInfo updateItems={updateItems} items={items} employeeName={employeeName} updateEmployeeName={updateEmployeeName} /> }
        />
        <Route exact path='/document'
          element={ <Document items={items} sellerData={sellerData} employeeName={employeeName} /> }
        />
      </Routes>
    </div>
  );
}

export default App;
