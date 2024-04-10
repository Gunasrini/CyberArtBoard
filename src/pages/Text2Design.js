import React, { useEffect, useState } from 'react'
import iconImg from '../assets/images/icon.png';
import { Link } from 'react-router-dom';
import GenerateImgSection from './GenerateImgSection';
import axios from 'axios';
import Img2DesignModal from '../modals/Img2DesignModal';

export default function Text2Design() {

    const [promptText, setPromptText] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const [data, setData] = useState([]);    

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const reqBody = {
            promt_text: promptText
        }

        fetch('https://cyberartboard.zeroinfo.in/api/stable-diffusion', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setData(data);
        setLoading(false);
    })
    .catch((err) => console.log(err));
    }

    const handleImageClick = (src) => {
        setSelectedImage(src);
      };

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
                                <textarea className='form-control prompt' value={promptText} onChange={(e) => setPromptText(e.target.value)} placeholder="Prompt:" required></textarea>
                            </div>
                            <div className='prompt-section'>
                                <textarea className='form-control prompt' placeholder="Negative Prompt:"></textarea>
                            </div>
                            <button className='generate-btn' onClick={handleSubmit} disabled={promptText.length === 0}>
                                <a className='btn'><span className='icon-img'><img src={iconImg} alt="" /></span>Generate</a>
                            </button>
                            {/* <div className='generate-btn' onClick={handleSubmit} disabled={promptText.length === 0}>
                                <a className='btn'><span className='icon-img'><img src={iconImg} alt="" /></span>Generate</a>                                
                                <Link to='/products/order' title='Generate' className='btn'>Generate</Link>
                            </div> */}
                        </form>
                    </div>
                    <div className='col-md-7 products-description'>  
                        {
                            loading ? <h3>Generating images... Please wait.</h3> :
                        <> 
                        <div className='description-row'>
                            <div className='image-grid'>
                                {                                   
                                    Object.values(data).map((item, i) => (
                                        <>
                                            <div className='gridItem' key={0}>
                                    <img src={item[0]} alt="" onClick={() => handleImageClick(item[0])} data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                <div className='gridItem' key={1}>
                                    <img src={item[1]} alt="" onClick={() => handleImageClick(item[1])} data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                <div className='gridItem' key={2}>
                                    <img src={item[2]} alt="" onClick={() => handleImageClick(item[2])} data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                <div className='gridItem' key={3}>
                                    <img src={item[3]} alt="" onClick={() => handleImageClick(item[3])} data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                                </div>
                                        </>
                                    ))
                                }
                                
                            </div>
                        </div>
                        </>
                    }
                        <Img2DesignModal imageSrc={selectedImage} />
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
                            {/* <div className='reset-icon'>
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </div> */}
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