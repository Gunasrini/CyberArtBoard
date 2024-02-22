import React from 'react'
import Header from '../components/Header/Header'
import poloShirts from '../assets/images/Poloshirt.png';
import tShirts from '../assets/images/T-shirt.png';
import singlets from '../assets/images/Singlets.png';
import shorts from '../assets/images/shorts.png';
import hoodieTops from '../assets/images/hoodie top.png';
import trackSuits from '../assets/images/tracksuits.png';
import softShellJacket from '../assets/images/softshell_jacket.png';

export default function DesignTemplates() {
    return (
        <>
            <Header />
            <div className='container my-5'>
                <div className='design-templates-sec'>
                    <h2 className='product-page-title'>Design Templates:</h2>
                    <div className='row'>
                        <h4>Essentials:</h4>
                        <div className='col-md-8 d-flex'>
                            <div className='col-md-3 list'>
                                <a title='Polo Shirts' href='https://www.cyberartboard.com/polo-shirts-dye-sublimation/' target='_new'>
                                    <img src={poloShirts} alt='' />
                                    <h6>Polo Shirts</h6>
                                </a>
                            </div>
                            <div className='col-md-3 list'>
                                <a title='T Shirts' href='https://www.cyberartboard.com/t-shirts/' target='_new'>
                                    <img src={tShirts} alt='' />
                                    <h6>T Shirts</h6>
                                </a>
                            </div>
                            <div className='col-md-3 list'>
                                <a title='Singlets' href='https://www.cyberartboard.com/singlets/' target='_new'>
                                    <img src={singlets} alt='' />
                                    <h6>Singlets</h6>
                                </a>
                            </div>
                            <div className='col-md-3 list'>
                                <a title='Shorts' href='https://www.cyberartboard.com/shorts/' target='_new'>
                                    <img src={shorts} alt='' />
                                    <h6>Shorts</h6>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-8 d-flex mt-2'>
                            <div className='col-md-3 list'>
                                <a title='Hoodie tops' href='https://www.cyberartboard.com/hoodie-top/' target='_new'>
                                    <img src={hoodieTops} alt='' />
                                    <h6>Hoodie tops</h6>
                                </a>
                            </div>
                            <div className='col-md-3 list'>
                                <a title='Tracksuits' href='https://www.cyberartboard.com/tracksuits/' target='_new'>
                                    <img src={trackSuits} alt='' />
                                    <h6>Tracksuits</h6>
                                </a>
                            </div>
                            <div className='col-md-3 list'>
                                <a title='Softshell Jackets' href='https://www.cyberartboard.com/softshell-jackets/' target='_new'>
                                    <img src={softShellJacket} alt='' />
                                    <h6>Softshell Jackets</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
