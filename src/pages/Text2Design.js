import React from 'react'
import iconImg from '../assets/images/icon.png';
import { Link } from 'react-router-dom';
import GenerateImgSection from './GenerateImgSection';

export default function Text2Design() {
    return (
        <>
            <div className='container my-4 py-2'>
                <div className='row'>
                    {/* <h2 className='product-page-title'>Text2Designs</h2> */}
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
                            <div className='prompt-section'>
                                <textarea className='form-control prompt' placeholder="Prompt:"></textarea>
                            </div>
                            <div className='prompt-section'>
                                <textarea className='form-control prompt' placeholder="Negative Prompt:"></textarea>
                            </div>
                            <div className='generate-btn'>
                                <span className='icon-img'><img src={iconImg} alt="" /></span>
                                <Link to='/products/order' title='Generate' className='btn'>Generate</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-7 products-description'>
                        <GenerateImgSection />
                        <div className='radio-btn-row'>
                            {/* <label className="radio-wrap">
                                <input type="radio" name="radio" />
                                <span className="checkmark">U1</span>
                            </label>
                            <label className="radio-wrap">
                                <input type="radio" name="radio" />
                                <span className="checkmark">U2</span>
                            </label>
                            <label className="radio-wrap">
                                <input type="radio" name="radio" />
                                <span className="checkmark">U3</span>
                            </label>
                            <label className="radio-wrap">
                                <input type="radio" name="radio" />
                                <span className="checkmark">U4</span>
                            </label> */}
                            <div className='reset-icon'>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-below-content'>
                    <p>Transform your ideas into stunning designs effortlessly with our AI-powered Text-to-Design feature. Simply describe your vision in natural language, and let our advanced algorithms bring it to life with precision and speed. Say goodbye to tedious design processes and hello to innovation at the speed of thought.</p>
                </div>
            </div>
        </>
    )
}
