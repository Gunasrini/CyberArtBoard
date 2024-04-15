import React from 'react'
import sustainCustomApparel from '../src/assets/images/DreamsTrue/sustainable-custom-apparel.jpg';
import text2design from '../src/assets/images/DreamsTrue/text2designs.png';
import image2design from '../src/assets/images/DreamsTrue/image2designs.png';
import sketch2design from '../src/assets/images/DreamsTrue/sketch2Designs.png'
import { Link } from 'react-router-dom';

export default function DreamsComeTrueSlider() {
    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    // };
    return (
        <div className='dreams-true-slider'>
            <div className='slider-sec'>
                <Link to="/sustainable-custom-apparel">
                    <img src={sustainCustomApparel} title='Sustainable Custom Apparel' alt='' className='customApparel' />
                    <h3>Sustainable Custom Apparel</h3>
                </Link>
            </div>
            <div className='slider-sec'>
                <Link to="/products/text2design">
                    <img src={text2design} title='Text 2 Designs' alt='' />
                    <h3>Text 2 Designs</h3>
                </Link>
            </div>
            <div className='slider-sec'>
                <Link to="/products/image2design">
                    <img src={image2design} title='Image 2 Designs' alt='' />
                    <h3>Image 2 Designs</h3>
                </Link>
            </div>
            <div className='slider-sec'>
                <Link to="/products/sketch2design">
                    <img src={sketch2design} title='Sketch 2 Designs' alt='' />
                    <h3>Sketch 2 Designs</h3>
                </Link>
            </div>
        </div>
    );
}