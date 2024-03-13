import React from 'react'
import generateImg1 from '../assets/images/generateImg1.png';
import Header from '../components/Header/Header';

import Shipping from './Shipping';

export default function Order() {
    return (
        <>
            <Header />
            <div className='container my-5'>
                <div className='row order-page-wrap'>
                    <div className='col-md-5 products-input-field'>
                        <form className='leftside-form'>
                            <div className='sketch-section'>
                                <img src={generateImg1} alt='' />
                            </div>
                            <div className='price-guide-desc'>
                                <div className='form-row'>
                                    <select className='form-control'>
                                        <option>Fabric: </option>
                                    </select>
                                </div>
                                <div className='form-row two-column'>
                                    <div className='column'>
                                        <select className='form-control'>
                                            <option>Prize guide: </option>
                                        </select>
                                    </div>
                                    <div className='column'>
                                        <select className='form-control'>
                                            <option>Size guide: </option>
                                        </select>
                                    </div>
                                </div>
                                <div className='form-row two-column'>
                                    <div className='column'>
                                        <select className='form-control'>
                                            <option>Q & A </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='logo-attachment-sec'>
                                <h4>Logo Attachment:</h4>
                                <span className='icon'><i className="fas fa-paperclip"></i></span>
                            </div>
                            <div className='comments-section'>
                                {/* <h4>Comments:</h4> */}
                                <textarea className="form-control prompt" placeholder='Special Notes:'></textarea>
                            </div>
                            <div className='shipping-desc'>
                                <label className="gift-check">Terms & Conditions
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-7 products-description'>
                        <div className='variation-options'>
                            <h3>Adult:</h3>
                            <div className='radio-btn-row'>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">S</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">M</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">L</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">XL</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">2XL</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">3XL</span>
                                </label>
                            </div>
                            <div className='radio-btn-row'>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">4XL</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">5XL</span>
                                </label>
                                <div className='sub-total'>
                                    <label>Sub Total</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className='variation-options mt-4'>
                            <h3 className='mb-0'>Unisex Junior:</h3>
                            <div className='radio-btn-row'>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">6</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">8</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">10</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">12</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">14</span>
                                </label>
                                <label className="radio-wrap">
                                    <input type="radio" name="radio" />
                                    <span className="checkmark">16</span>
                                </label>
                                <div className='sub-total'>
                                    <label>Sub Total</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            {/* <div className='image-btn-wrap'>
                                <button type='submit' className='btn form-control'>Size guide:</button>
                            </div> */}
                            <Shipping />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
