import React from 'react'
import iconImg from '../assets/images/icon.png';
import generateImg1 from '../assets/images/generateImg1.png';
import generateImg2 from '../assets/images/generateImg2.png';
import generateImg3 from '../assets/images/generateImg3.png';
import generateImg4 from '../assets/images/generateImg4.png';
import Img2DesignModal from '../modals/Img2DesignModal';
import { Link } from 'react-router-dom';

export default function Image2Design() {
    return (
        <>
            <div className='container my-4 py-2'>
                <div className='row'>
                    <div className='col-md-5 products-input-field'>
                        <form>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Industry' />
                            </div>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Product' />
                            </div>
                            <div className='form-row'>
                                <input type='text' className='form-control' placeholder='Style theme' />
                            </div>
                            <div className='product-image-upload'>
                                <input type='file' className='form-control upload' />
                                <div className='custom-file-upload'>
                                    <i className="fa-solid fa-upload"></i>
                                    <h4>Drop an Image Here</h4>
                                </div>
                            </div>
                            <div className='image-btn-wrap'>
                                <button type='submit' className='btn form-control'><strong>Very</strong> (Strong)</button>
                                <button type='submit' className='btn form-control'><strong>Very</strong> (Subtle)</button>
                            </div>
                            <div className='generate-btn'>
                                <span className='icon-img'><img src={iconImg}  alt=""/></span>
                                <Link to='/products/order' className='btn'>Generate</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-7 products-description'>
                        <div className='description-row'>
                            <div className='image-grid'>
                                <div className='gridItem'>
                                    <img src={generateImg1} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                <div className='gridItem'>
                                    <img src={generateImg2} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                <div className='gridItem'>
                                    <img src={generateImg3} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                <div className='gridItem'>
                                    <img src={generateImg4} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-below-content'>
                    <p>Revolutionize your creative process with our Image-to-Design AI feature. Just upload an image or describe your vision, and watch as our cutting-edge AI algorithms transform it into captivating designs. Say goodbye to guesswork and hello to effortless creativity, accelerating your path from inspiration to implementation.</p>
                </div>
            </div>
            <Img2DesignModal />
        </>
    )
}
