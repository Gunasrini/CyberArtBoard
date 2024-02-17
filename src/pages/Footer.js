import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-cont'>
                    <p>© 2024. All Rights Reserved by <Link to='/'>CyberARTBoard</Link></p>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myaccount">My Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
