import React from 'react'
import iconImg from '../assets/images/icon.png';
// import generateImg1 from '../assets/images/generateImg1.png';
// import generateImg2 from '../assets/images/generateImg2.png';
// import generateImg3 from '../assets/images/generateImg3.png';
// import generateImg4 from '../assets/images/generateImg4.png';
import Img2DesignModal from '../modals/Img2DesignModal';
import { Link } from 'react-router-dom';
import GenerateImgSection from './GenerateImgSection';

export default function Sketch2Design() {
    return (
        <>
            {/* <Sketch2DesignSectionBanner /> */}
            <div className='container my-4 py-2'>
                <div className='row'>
                    {/* <h2 className='product-page-title'>Image2Designs</h2> */}
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
                                <span className='icon-img'><img src={iconImg} alt="" /></span>
                                <Link to='/products/order' className='btn'>Generate</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-7 products-description'>
                        <GenerateImgSection />
                    </div>
                </div>
                <div className='products-below-content'>
                    <p>Elevate your creativity with our Sketch-to-Design AI tool. Simply sketch out your ideas on paper or digitally, and our advanced AI algorithms will translate them into professional-grade designs with precision and flair. Say goodbye to design constraints and hello to boundless innovation, empowering you to bring your concepts to life like never before.</p>
                </div>
            </div>
            <Img2DesignModal />
        </>
    )
}
