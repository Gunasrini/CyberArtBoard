import React from 'react'
import Header from '../components/Header/Header'
import '../pages/Products.css';
import Text2Design from './Text2Design';
import { NavLink, Route, Routes } from 'react-router-dom';
import Image2Design from './Image2Design';
import Sketch2Design from './Sketch2Design';
import Footer from './Footer';

export default function Products() {
    return (
        <>
            <Header />
            <div>
                <div className='container'>
                    <div className='products-wrapper'>
                        <div className='product-category'>
                            <ul className='nav'>
                                <li className='nav-item'><NavLink to='text2design' className='nav-link'>Text2Design</NavLink></li>
                                <li className='nav-item'><NavLink to='image2design' className='nav-link'>Image2Design</NavLink></li>
                                <li className='nav-item'><NavLink to='sketch2design' className='nav-link'>Sketch2Design</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='text2design' element={<Text2Design />} />
                    <Route path='image2design' element={<Image2Design />} />
                    <Route path='sketch2design' element={<Sketch2Design />} />
                </Routes>
            </div>
        </>
    )
}
