import React from 'react';
import Pdf from "react-to-pdf";

import createHumanDate from '../Helpers/createHumanDate';
import createDocumentID from '../Helpers/createDocumentID';
import CoastalLogo from '../Assets/CoastalLogo.jpg'

const ref = React.createRef();

function Document(props) {
    const date = createHumanDate();
    const documentID = createDocumentID(props.sellerData.fullName)
    let total = 0;

    const items = props.items.map((item, i) => {
        total += parseInt(item.price);
        return (
            <tr className='' key={i}>
                <th scope="row" className="text-center">{i}</th>
                <td className="text-left">{item.title}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.price}</td>
            </tr>
        )
    })

    return (
        <div >
            <div className='' ref={ref}>
                <div className=''>
                    <p>Date: {date}</p>
                    <p className=''>BILL OF SALE</p>
                    <p># {documentID}</p>
                </div>
                <div className=''>
                    <div className=''>
                        <p className=''>Buyer Information:</p>
                        <div className=''>
                            <div className=''>
                                <p className=''>Address:</p>
                                <p>Coastal Film Lab</p>
                                <p>1704 N Nebraska Ave</p>
                                <p>Tampa, Florida 33602</p>
                                <p>United States</p>
                            </div>
                            <div className=''>
                                <p className=''>Contact</p>
                                <p>+1 813-384-7588</p>
                                <p>coastalfilmlab@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <img src={CoastalLogo} className='' alt='logo' />
                </div>
                <div className=''>
                    <div className=''>
                        <p className=''>Seller Information:</p>
                        <div className=''>
                            <div className=''>
                                <p className=''>Name:</p>
                                <p>{props.sellerData.fullName}</p>
                            </div>
                            <div className=''>
                                <p className=''>Address:</p>
                                <p>{props.sellerData.addressLine1}</p>
                                <p>{props.sellerData.addressLine2}</p>
                                <p>{props.sellerData.city}, {props.sellerData.state} {props.sellerData.zipCode}</p>
                                <p>{props.sellerData.country}</p>
                            </div>
                            <div className=''>
                                <p className=''>Contact</p>
                                <p>{props.sellerData.phone}</p>
                                <p>{props.sellerData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col" className="text-left">Item Description</th>
                            <th scope="col">QTY</th>
                            <th scope="col">Price Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="text-right ">Total:</td>
                            <td className="text-center">{total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <Pdf targetRef={ref} filename={`${documentID}.pdf`}>
                {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
            </Pdf>
        </div>
    )
}

export default Document;