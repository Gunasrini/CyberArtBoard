import React from 'react'
import { Link } from 'react-router-dom'
import iconImg from '../assets/images/icon.png'
import logo from '../assets/images/logo.PNG';

export default function ThankYou() {
    return (
        <>
            <div className='thankyou-section'>
                <div className='header'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="Cyber ArtBoard" className="site-logo" />
                    </Link>
                    <h3>Thank you very much for your order</h3>
                </div>
                <div className='customer-desc'>
                    <h3>Purchase Order No: </h3>
                    <h5>Buyer:</h5>
                    <div className='billing-details-row'>
                        <div className='bill-column'>
                            <h6>Bill To:</h6>
                            <div className='item-card'>
                                <p>Name: </p>
                                <p>Email: </p>
                            </div>
                        </div>
                        <div className='bill-column'>
                            <h6>Delivery Details:</h6>
                            <div className='item-card'>
                                <p>Name: </p>
                                <p>Street Address: </p>
                                <p>City: </p>
                                <p>State: </p>
                                <p>Country: </p>
                            </div>
                        </div>
                    </div>
                    <div className='billing-details-row'>
                        <div className='bill-column'>
                            <h6>Artwork:</h6>
                        </div>
                    </div>
                    <div className='billing-details-row'>
                        <div className='bill-column single'>
                            <h6>Design Image:</h6>
                            <Link className='view-detail-link'>View Detail</Link>
                        </div>
                    </div>
                    <div className='billing-details-row'>
                        <div className='bill-column single'>
                            <h6>Attachment:</h6>
                            <Link className='view-detail-link'>View Detail</Link>
                        </div>
                    </div>
                    <div className='billing-details-row'>
                        <div className='bill-column w-100'>
                            <h6>Order Qty:</h6>
                            <ul className='order-list'>
                                <li>Item Code</li>
                                <li>Size</li>
                                <li>Qty</li>
                                <li>Unit Cost</li>
                                <li>Discount</li>
                                <li>Total Cost</li>
                            </ul>
                            <ul className='order-list text-start'>
                                <li>Fabric:</li>
                            </ul>
                        </div>
                    </div>
                    <div className='billing-details-row'>
                        <div className='bill-column w-100'>
                            <h6>Special Notes:</h6>
                            <textarea className='form-control billing-spl-note'></textarea>
                        </div>
                    </div>
                    <div className='shipping-desc'>
                        <label className="gift-check">Terms & Conditions
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='generate-btn'>
                        <span className='icon-img'><img src={iconImg}  alt=""/></span>
                        <Link className='btn' to="/">Submit</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
