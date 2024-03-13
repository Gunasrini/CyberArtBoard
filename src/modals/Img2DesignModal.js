import React from 'react'
import generateImg from '../assets/images/generateImg1.png';
import iconImg from '../assets/images/icon.png';
import { useNavigate } from 'react-router-dom';

export default function Img2DesignModal() {

    const navigate = useNavigate();

    const redirectToOrderPage = (e) => {
        e.preventDefault();
        navigate('/products/order');
    }
    return (
        <>
            <div className="modal modal-md" id="img2DesignModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        <div className='col-md-10 left-design-image'>
                            <img src={generateImg} alt="" />
                            <div className='img-desc'>
                                <p>User Name: </p>
                                <p>Date: </p>
                                <p>Prompt: </p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='product-share'>
                                <i className="fa-solid fa-download"></i>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-solid fa-envelope"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                        <div className='generate-btn'>
                            <span className='icon-img'><img src={iconImg} alt=''/></span>
                            <button className='btn' data-bs-dismiss="modal" onClick={redirectToOrderPage}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
