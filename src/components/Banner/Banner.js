import React from 'react'
import '../Banner/Banner.css';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <div className='banner-section'>
            <div className='container'>
                <h2 className='wrapped-text'>Redefining Cre<span className='highlighted-text'>a</span>t<span className='highlighted-text'>i</span>vity and Sustain<span className='highlighted-text'>ability</span></h2>
                <div className='banner-sub-cont'>
                    <div className='left-radio-check'>
                        <Link className='item' to="/products/text2design">
                            <h3>ai Design Generator</h3>
                            <span className='badge orange'></span>
                        </Link>
                        <Link className='item' to="/design-templates">
                            <h3>ca Design Templates</h3>
                            <span className='badge black'></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
