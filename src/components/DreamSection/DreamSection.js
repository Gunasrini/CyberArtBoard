import React from 'react'
import '../DreamSection/DreamSection.css';
import text2design from '../../assets/images/text2design.PNG';
import image2design from '../../assets/images/image2design.jpeg';
import sketch2design from '../../assets/images/sketch2design.PNG';
import { Link } from 'react-router-dom';
import DreamsComeTrueSlider from '../../DreamsComeTrueSlider';

export default function DreamSection() {
  return (
    <div className='dreams-section'>
      <div className='container'>
        <div className='row'>
          <h3>Making your dream comes true</h3>
          <DreamsComeTrueSlider />
          {/* <div className='col-md-4 list-item'>
            <div className='card text-center'>
              <img src={text2design} className="card-img-top p-3" alt="Text2Design" />
              <Link to="/products/text2design">
                <div className='overlay-sec'>
                  <h5 className="card-title">Text 2 Design</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-md-4 list-item'>
            <div className='card text-center'>
              <img src={image2design} className="card-img-top p-3" alt="Image2Design" />
              <Link to="/products/image2design">
                <div className='overlay-sec'>
                  <h5 className="card-title">Image 2 Design</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className='col-md-4 list-item'>
            <div className='card text-center'>
              <img src={sketch2design} className="card-img-top p-3" alt="Sketch2Design" />
              <Link to="/products/sketch2design">
                <div className='overlay-sec'>
                  <h5 className="card-title">Sketch 2 Design</h5>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
