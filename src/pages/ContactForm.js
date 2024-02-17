import React from 'react'
import Header from '../components/Header/Header'
import Footer from './Footer'
import iconImg from '../assets/images/icon.png'
import { Link } from 'react-router-dom'

export default function ContactForm() {
    return (
        <>
            <Header />
            <div className='container my-5'>
                <div className='shipping-section mt-0'>
                    <h2 className='product-page-title'>Customer Support Contact Form</h2>
                    <form className='customer-support-form'>
                        <div className='form-row two-column'>
                            <div className='form-column'>
                                <label>Full Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-column'>
                                <label>Email Address</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='form-row two-column'>
                            <div className='form-column'>
                                <label>Category</label>
                                <select className='form-control'>
                                    <option>Categories</option>
                                    <option>SCHOOLWEAR</option>
                                    <option>BUSINESS WEAR</option>
                                    <option>SPORTS WEAR</option>
                                    <option>WORK WEAR</option>
                                    <option>PROMOTIONAL</option>
                                    <option>LEISUREWEAR</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-column'>
                                <label>Subject</label>
                                <textarea className='form-control'></textarea>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-column'>
                                <label>Attach a File</label>
                                <input type='file' className='ms-4' />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-column'>
                                <label>Message</label>
                                <textarea className='form-control message-field'></textarea>
                            </div>
                        </div>
                        <div className='generate-btn'>
                            <span className='icon-img'><img src={iconImg} /></span>
                            <Link className='btn' to=''>Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
