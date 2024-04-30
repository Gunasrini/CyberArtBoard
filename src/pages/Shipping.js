import React from 'react'
import iconImg from '../assets/images/icon.png';
import { Link } from 'react-router-dom';

export default function Shipping() {
    return (
        <>
            <div className='shipping-section'>
                <h2 className='shipping-title'>Shipping</h2>
                <h4>Shipping Address <span className='ques-icon'><i className="fas fa-question"></i></span></h4>
                <form>
                    <div className='form-row two-column'>
                        <div className='form-column'>
                            <input type='text' className='form-control' placeholder='First Name *' />
                        </div>
                        <div className='form-column'>
                            <input type='text' className='form-control' placeholder='Last Name *' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-column'>
                            <input type='text' className='form-control' placeholder='Email *' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-column'>
                            <input type='text' className='form-control' placeholder='Street Address *' />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-column'>
                            <input type='text' className='form-control' placeholder='Apt / Suite / Unit (Optional)' />
                        </div>
                    </div>
                    <div className='form-row two-column'>
                        <div className='form-column'>
                            <input type='text' className='form-control' placeholder='City *' />
                        </div>
                        <div className='form-column'>
                            <select className='form-control'>
                                <option>State *</option>
                                <option>Tamilnadu</option>
                                <option>Kerala</option>
                                <option>Andhra</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-row two-column'>
                        <div className='form-column'>
                            {/* <input type='text' className='form-control' placeholder='Postal Code *' /> */}
                            <select className='form-control'>
                                <option>Country *</option>
                                <option>India</option>
                                <option>China</option>
                                <option>Hong Kong</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className='shipping-desc'>
                    <h4>Shipping Method <span className='ques-icon'><i className="fas fa-question"></i></span></h4>
                    <p>Enter a shipping address to see accurate shipping options for your order.</p>
                </div>
                {/* <div className='shipping-desc'>
                    <h4>Coupon Code Options</h4>
                    <label className="gift-check">apply
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div> */}
                <div className='generate-btn'>
                    <span className='icon-img'><img src={iconImg}  alt=""/></span>
                    <Link className='btn' to='/products/thankyou'>Submit</Link>
                </div>
            </div>
        </>
    )
}
