import React from 'react'
import '../Banner/Banner.css';
import poloShirts from '../../assets/images/Poloshirt.png';
import tShirts from '../../assets/images/T-shirt.png';
import singlets from '../../assets/images/Singlets.png';
import shorts from '../../assets/images/shorts.png';
import hoodieTops from '../../assets/images/hoodie top.png';
import trackSuits from '../../assets/images/tracksuits.png';
import softShellJacket from '../../assets/images/softshell_jacket.png';
// import bannerVideo from '../../assets/videos/banner-video.mp4';
import { Link } from 'react-router-dom';

export default function Banner() {
    return (
        <div className='banner-section'>
            <div className='container'>
                {/* <video autoPlay loop>
                    <source src={bannerVideo} type="video/mp4" />
                </video> */}

                <h2 className='wrapped-text'>Redefining Cre<span className='highlighted-text'>a</span>t<span className='highlighted-text'>i</span>vity and Sustain<span className='highlighted-text'>ability</span></h2>
                <div className='banner-sub-cont'>
                    <div className='left-radio-check'>
                        <Link className='item' to="/products/text2design">
                            <h3>ai Design Generator</h3>
                            <span className='badge orange'></span>
                        </Link>
                        <Link className='item' id='design-templates-btn' to="/design-templates">
                            <h3>ca Design Templates</h3>
                            <span className='badge black'></span>
                        </Link>
                        <div className='design-template-hover-sec'>
                            <div className='row'>
                                <h4>Essentials:</h4>
                                <div className='col-md-8 d-flex'>
                                    <div className='col-md-3 list'>
                                        <img src={poloShirts} alt='' />
                                        <h6>Polo Shirts</h6>
                                    </div>
                                    <div className='col-md-3 list'>
                                        <img src={tShirts} alt='' />
                                        <h6>T Shirts</h6>
                                    </div>
                                    <div className='col-md-3 list'>
                                        <img src={singlets} alt='' />
                                        <h6>Singlets</h6>
                                    </div>
                                    <div className='col-md-3 list'>
                                        <img src={shorts} alt='' />
                                        <h6>Shorts</h6>
                                    </div>
                                </div>
                                <div className='col-md-8 d-flex mt-2'>
                                    <div className='col-md-3 list'>
                                        <img src={hoodieTops} alt='' />
                                        <h6>Hoodie tops</h6>
                                    </div>
                                    <div className='col-md-3 list'>
                                        <img src={trackSuits} alt='' />
                                        <h6>Tracksuits</h6>
                                    </div>
                                    <div className='col-md-3 list'>
                                        <img src={softShellJacket} alt='' />
                                        <h6>Softshell Jackets</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
