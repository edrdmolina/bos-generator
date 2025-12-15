import React from 'react';
import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom';

import createHumanDate from '../Helpers/createHumanDate';
import createDocumentID from '../Helpers/createDocumentID';
import formatter from '../Helpers/formatter';
import CoastalLogo from '../Assets/CoastalLogoCircle.png';

import '../Styles/Document.css';

const ref = React.createRef();

function Document(props) {
    const date = createHumanDate();
    const documentID = createDocumentID(props.sellerData.fullName)

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
    }
   
    let total = 0;

    const showItems = props.items.map((item, i) => {
        let priceByQuantity = parseFloat(item.price) * parseFloat(item.quantity);
        total += priceByQuantity;

        return (
            <tr key={i}>
                <th scope='row'>{i + 1}</th>
                <td>{ item.title }</td>
                <td className='text-center'>{ item.quantity }</td>
                <td className='text-end'>{ formatter.format(parseFloat(item.price)) }</td>
            </tr>
        )
    })

    return (
        <div className='container'>
            <div className='container document' ref={ref}>
                <div className='row justify-content-between mt-4'>
                    <div className='col text-start'>
                        <p>Date: {date}</p>
                    </div>
                    <div className='col text-center'>
                        <h4>BILL OF SALE</h4>
                    </div>
                    <div className='col text-end'>
                        <p># {documentID}</p>
                    </div>
                </div>
                
                <div className='row mt-5'>
                    <div className='col-9'>
                        <h5>Buyer Information:</h5>
                        <div className='row'>
                            <div className='col'>
                                <h6 className='m-0'>Address:</h6>
                                <p className='m-0'>Coastal Film Lab</p>
                                <p className='m-0'>1704 N Nebraska Ave</p>
                                <p className='m-0'>Tampa, Florida 33602</p>
                                <p className='m-0'>United States</p>
                            </div>
                            <div className='col'>
                                <h6 className='m-0'>Contact</h6>
                                <p className='m-0'>+1 813-384-7588</p>
                                <p className='m-0'>coastalfilmlab@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <img src={CoastalLogo} style={{height: '150px', width: '150px' }} alt='logo' />
                    </div>
                </div>
                <hr/>

                <div className='row mt-2'>
                    <div className='col-12'>
                        <h5>Seller Information:</h5>
                        <div className='row'>
                            <div className='col'>
                                <h6 className='m-0'>Name:</h6>
                                <p className='m-0'>{props.sellerData.fullName}</p>
                            </div>
                            <div className='col'>
                                <h6 className='m-0'>Address:</h6>
                                <p className='m-0'>{props.sellerData.addressLine1}</p>
                                <p className='m-0'>{props.sellerData.addressLine2}</p>
                                <p className='m-0'>{props.sellerData.city}, {props.sellerData.state} {props.sellerData.zipCode}</p>
                                <p className='m-0'>{props.sellerData.country}</p>
                            </div>
                            <div className='col'>
                                <h6 className='m-0'>Contact</h6>
                                <p className='m-0'>{props.sellerData.phone}</p>
                                <p className='m-0'>{props.sellerData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table table-striped table-sm mt-5">
                    <thead>
                        <tr>
                            <th scope="col" style={{width: '5%'}}>#</th>
                            <th scope="col" style={{width: '65%'}}>Item Description</th>
                            <th scope="col" style={{width: '10%'}} className='text-center'>QTY</th>
                            <th scope="col" style={{width: '20%'}} className='text-end'>Price Paid</th>
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
                            <th scope='row' className='text-end'>{formatter.format(total)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className='row my-5 justify-content-center'>
                <div className='col-3 d-flex justify-content-center'>
                    <Link className='btn btn-secondary' to='/items'>BACK</Link>
                </div>
                <div className='col-3 d-flex justify-content-center'>
                    <Link className='btn btn-danger' to='/' onClick={refreshPage}>RESET</Link>
                </div>
                <div className='col-3 d-flex justify-content-center'>
                    <Pdf targetRef={ref} filename={`${documentID}.pdf`}>
                        {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>DOWNLOAD</button>}
                    </Pdf>
                </div>
            </div>
        </div>
    )
}

export default Document;