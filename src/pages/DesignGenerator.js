import React from 'react'
import iconImg from '../assets/images/icon.png';
import Header from '../components/Header/Header';
import GenerateImgSection from './GenerateImgSection';
import { Link } from 'react-router-dom';

export default function DesignGenerator() {
    return (
        <>
            <Header />
            <div className='container my-5 design-generator'>
                <div className='row'>
                    <div className='col-md-5'>
                        <form>
                            <div className='form-row select-row'>
                                <select className='form-control'>
                                    <option>CATEGORIES</option>
                                    <option>SCHOOLWEAR</option>
                                    <option>BUSINESS WEAR</option>
                                    <option>SPORTS WEAR</option>
                                    <option>WORK WEAR</option>
                                    <option>PROMOTIONAL</option>
                                    <option>LEISUREWEAR</option>
                                </select>
                                <select className='form-control'>
                                    <option>PRODUCTS</option>
                                    <option>POLO SHIRTS</option>
                                    <option>T-SHIRTS</option>
                                    <option>SINGLETS</option>
                                    <option>SHORTS</option>
                                    <option>TRACKSUITS</option>
                                    <option>HOODIE TOP</option>
                                    <option>STORM JACKET</option>
                                    <option>SOFTSHELL JACKET</option>
                                    <option>SPORTS CAP</option>
                                    <option>BUCKET HAT</option>
                                    <option>SOCKS</option>
                                </select>
                            </div>
                            <h3>DESIGN REQUEST FORM:</h3>
                            <div className='prompt-section'>
                                <h4>Prompt:</h4>
                                <textarea className='form-control prompt' placeholder="Explanation of the design you wish to create"></textarea>
                            </div>
                            <div className='design-generator-desc'>
                                <p>Add Embedded Images</p>
                                <p>Upload:</p>
                                <p>Library:</p>
                            </div>
                            <div className='generate-btn'>
                                <span className='icon-img'><img src={iconImg}  alt=""/></span>
                                <Link to='/products/order' className='btn'>Generate</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6 products-description ms-auto'>
                        <GenerateImgSection />
                    </div>
                </div>
            </div>
        </>
    )
}
