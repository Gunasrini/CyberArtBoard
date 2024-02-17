import React from 'react'
import Header from '../components/Header/Header'
import Footer from './Footer'
import iconImg from '../assets/images/icon.png';
import { Link } from 'react-router-dom';

export default function MyAccount() {
    return (
        <>
            <Header />
            <div className='container my-5'>
                <div className='shipping-section mt-0'>
                    <h2 className='product-page-title'>My Account:</h2>
                    <div className='row myaccount-row'>
                        <div className='col-md-5'>
                            <h3 className='form-title'>Login Details:</h3>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='User Name' />
                            </div>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Email' />
                            </div>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Password' />
                            </div>
                        </div>
                        <div className='col-md-6 ms-auto'>
                            <h3 className='form-title'>Office Address:</h3>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Company' />
                            </div>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Street Address' />
                            </div>
                            <div className='form-row two-column'>
                                <div className='form-column'>
                                    <input type='text' className='form-control' placeholder='City' />
                                </div>
                                <div className='form-column'>
                                    <select className='form-control'>
                                        <option>State</option>
                                        <option>Tamilnadu</option>
                                        <option>Kerala</option>
                                        <option>Andhra</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-row two-column'>
                                <div className='form-column'>
                                    <select className='form-control'>
                                        <option>Country</option>
                                        <option>India</option>
                                        <option>China</option>
                                        <option>Hong Kong</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='generate-btn'>
                            <span className='icon-img'><img src={iconImg} /></span>
                            <Link className='btn' to="">Save</Link>
                        </div>
                    </div>
                    <div className='row myaccount-links'>
                        <ul className='nav'>
                            <li><Link className='nav-link'>My Orders</Link></li>
                            <li><Link className='nav-link'>My Returns</Link></li>
                            <li><Link className='nav-link'>My Collection</Link></li>
                            <li><Link className='nav-link'>Help & Feedback</Link></li>
                            <li><Link className='nav-link'>Terms of Service</Link></li>
                            <li><Link className='nav-link'>Message</Link></li>
                            <li><Link className='nav-link'>Invite My Friend</Link></li>
                            <li><Link className='nav-link'>Delete My Account</Link></li>
                        </ul>
                    </div>
                    <div className='row recent-orders-sec'>
                        <h3 className='form-title'>Recent Orders:</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Order #</th>
                                    <th>Order Date</th>
                                    <th>Order Qty</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>009988883</td>
                                    <td>12/11/2023</td>
                                    <td>34</td>
                                    <td>Shipped</td>
                                    <td><span className='bg-dark badge'>View</span></td>
                                </tr>
                                <tr>
                                    <td>009988884</td>
                                    <td>12/11/2023</td>
                                    <td>45</td>
                                    <td className='text-success'>Completed</td>
                                    <td><span className='bg-dark badge'></span></td>
                                </tr>
                                <tr>
                                    <td>009988885</td>
                                    <td>12/11/2023</td>
                                    <td>12</td>
                                    <td>Return Processing</td>
                                    <td><span className='bg-dark badge'></span></td>
                                </tr>
                                <tr>
                                    <td>009988886</td>
                                    <td>12/11/2023</td>
                                    <td>15</td>
                                    <td className='text-danger'>Cancelled</td>
                                    <td><span className='bg-dark badge'></span></td>
                                </tr>
                                <tr>
                                    <td>009988882</td>
                                    <td>12/11/2023</td>
                                    <td>18</td>
                                    <td>Processing</td>
                                    <td><span className='bg-dark badge'></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
