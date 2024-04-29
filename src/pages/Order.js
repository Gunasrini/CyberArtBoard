import React, { useState, useRef } from 'react';
// import generateImg1 from '../assets/images/generateImg1.png';
import Header from '../components/Header/Header';
import Shipping from './Shipping';
import { useLocation } from 'react-router-dom';


const Order = () => {
  const [adultSizes, setAdultSizes] = useState({
    S: '',
    M: '',
    L: '',
    XL: '',
    '2XL': '',
    '3XL': '',
    '4XL': '',
    '5XL': '',
  });

  const [juniorSizes, setJuniorSizes] = useState({
    '6': '',
    '8': '',
    '10': '',
    '12': '',
    '14': '',
    '16': '',
  });

  const [adultSubtotal, setAdultSubtotal] = useState('');
  const [juniorSubtotal, setJuniorSubtotal] = useState('');
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const location = useLocation();
  const image = location.state?.image;
  const fab=location.state?.fabric || [];

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
    if (selectedFile === undefined) {
      setFile(null);
    }
  };

  const handleAdultSizeChange = (size, value) => {
    const updatedSizes = { ...adultSizes, [size]: value };
    setAdultSizes(updatedSizes);
    const newSubtotal = calculateSubtotal(updatedSizes);
    setAdultSubtotal(newSubtotal);
  };

  const handleJuniorSizeChange = (size, value) => {
    const updatedSizes = { ...juniorSizes, [size]: value };
    setJuniorSizes(updatedSizes);
    const newSubtotal = calculateSubtotal(updatedSizes);
    setJuniorSubtotal(newSubtotal);
  };

  const calculateSubtotal = (sizeValues) => {
    let total = 0;
    for (const size in sizeValues) {
      const sizeValue = sizeValues[size];
      if (sizeValue !== '') {
        total += parseInt(sizeValue) || 0;
      }
    }
    return total;
  };

  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row order-page-wrap'>
          <div className='col-md-5 products-input-field'>
            <form className='leftside-form'>
              <div className='sketch-section'>
                <img src={image} alt='' />
              </div>
              <div className='price-guide-desc'>
                <div className='form-row'>
                  <select className='form-control'>
                  <option value="">Select a fabric</option>
                                    {/* Map through getCategory array to render options */}
                                    {fab.map(fabric => (
                                        <option key={fabric.value} value={fabric.value}>
                                            {fabric.label}
                                        </option>
                                    ))}
                  </select>
                </div>
                <div className='form-row two-column'>
                  <div className='column'>
                    <select className='form-control'>
                      <option>Price guide: </option>
                    </select>
                  </div>
                  <div className='column'>
                    <select className='form-control'>
                      <option>Size guide: </option>
                    </select>
                  </div>
                </div>
                <div className='form-row two-column'>
                  <div className='column'>
                    <select className='form-control'>
                      <option>Q & A </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='logo-attachment-sec'>
                <h4>Logo Attachment:</h4>
                <span className='icon' onClick={handleIconClick}>
                  <i className="fas fa-paperclip"></i>
                </span>
                <input
                  ref={fileInputRef}
                  className='logo-attach'
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                {file && (
                  <div className='file-details'>
                    {/* <p>Selected File: {file.name}</p> */}
                    <p className='file-name'>{file.name}</p>
                    {/* Display an image preview */}
                    {/* <img src={URL.createObjectURL(file)} alt="Preview" style={{ width: '100px', height: '100px' }} /> */}
                  </div>
                )}
              </div>

              <div className='comments-section'>
                <textarea className="form-control prompt" placeholder='Special Notes:'></textarea>
              </div>
              <div className='shipping-desc'>
                <label className="gift-check">
                  Terms & Conditions
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </form>
          </div>
          <div className='col-md-7 products-description'>
            <div className='variation-options'>
              <h3>Adult:</h3>
              <div className='radio-btn-row sub-total'>
                {Object.keys(adultSizes).map((size, index, array) => {
                  const isLastOfRow = size === "3XL"; // Identify when to wrap to next line
                  return (
                    <React.Fragment key={size}>
                      <div className='btn-wrap'>
                        <label>{size}</label>
                        <input
                          type='text'
                          className='form-control'
                          value={adultSizes[size]}
                          onChange={(e) => handleAdultSizeChange(size, e.target.value)}
                        />
                      </div>
                      {isLastOfRow && <div style={{ flexBasis: '100%', height: '0' }}></div>} {/* Force wrap to next line */}
                    </React.Fragment>
                  );
                })}
                <div className='sub-total'>
                  <label>Sub Total</label>
                  <input type="text" className='form-control total' value={adultSubtotal === 0 ? '' : adultSubtotal} readOnly />
                </div>
              </div>

            </div>
            <div className='variation-options sub-total mt-4'>
              <h3 className='mb-0'>Unisex Junior:</h3>
              <div className='radio-btn-row mt-2'>
                {Object.keys(juniorSizes).map((size) => (
                  <div key={size} className='btn-wrap'>
                    <label>{size}</label>
                    <input
                      type='text'
                      className='form-control'
                      value={juniorSizes[size]}
                      onChange={(e) => handleJuniorSizeChange(size, e.target.value)}
                    />
                  </div>
                ))}
                <div className='sub-total'>
                  <label>Sub Total</label>
                  <input type="text" className='form-control total' value={juniorSubtotal === 0 ? '' : juniorSubtotal} readOnly />
                </div>
              </div>
              <Shipping />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;