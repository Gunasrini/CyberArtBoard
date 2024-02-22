import React from 'react'
import '../styles/about.css';
import Header from '../components/Header/Header'
import aboutBanner from '../assets/images/AboutUs/about-banner.png'
import aboutImg1 from '../assets/images/AboutUs/aboutImg1.png';
import aboutImg2 from '../assets/images/AboutUs/aboutImg2.png';
import aboutImg3 from '../assets/images/AboutUs/aboutImg3.png';
import aboutImg4 from '../assets/images/AboutUs/aboutImg4.png';
import aboutImg5 from '../assets/images/AboutUs/aboutImg5.png';

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className='about-banner'>
                <img src={aboutBanner} alt='' />
                <div className='banner-overlay'>
                    <h4 className='banner-text'>Together, We create a better tomorrow</h4>
                </div>
            </div>
            <div className='about-cont-sec'>
                <div className='container'>
                    <div className='list-item'>
                        <div className='left-content'>
                            <h3>Our Vision</h3>
                            <p>Our vision at CyberARTboard is to redefine creativity and sustainability in the world of design.</p>
                            <p>We aim to empower individuals with AI-powered tools that bring their unique visions to life, while steadfastly upholding eco-friendly practices.</p>
                        </div>
                        <div className='right-img'>
                            <img src={aboutImg1} alt='' />
                        </div>
                    </div>
                    <div className='list-item alternate'>
                        <div className='left-content'>
                            <h3>ai Powered Design Tools</h3>
                            <p>Revolutionize your creativity with AI-powered design tools, unlocking limitless possibilities and efficiency in your design process.</p>
                            <ul>
                                <li>Text2Design</li>
                                <li>Image2Design</li>
                                <li>Sketch2Design</li>
                            </ul>
                        </div>
                        <div className='right-img'>
                            <img src={aboutImg2} alt='' />
                        </div>
                    </div>
                    <div className='list-item'>
                        <div className='left-content'>
                            <h3>Sustainable manufacturing methods</h3>
                            <p>Dye sublimation contributes to zero water wastage, making it a sustainable dyeing process that minimizes its environmental impact</p>
                            <p>Join us in our commitment to sustainability by choosing products crafted from recycled waste bottles.</p>
                        </div>
                        <div className='right-img'>
                            <img src={aboutImg3} alt='' />
                        </div>
                    </div>
                    <div className='list-item alternate'>
                        <div className='left-content'>
                            <h3>Custom Apparel</h3>
                            <p>Perfectly tailored for individuals and organizations, no order is ever too small or too big</p>
                        </div>
                        <div className='right-img'>
                            <img src={aboutImg4} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='collaboration-section'>
                <div className='container'>
                    <div className='list-item'>
                        <div className='left-img'>
                            <img src={aboutImg5} alt='' />
                        </div>
                        <div className='right-content'>
                            <h3>Collaboration</h3>
                            <p>We foster a user-friendly working environment to partner with talented individuals, turning their ideas into innovative products and brands.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
