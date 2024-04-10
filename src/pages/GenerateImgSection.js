import React from 'react'
// import generateImg1 from '../assets/images/generateImg1.png';
// import generateImg2 from '../assets/images/generateImg2.png';
// import generateImg3 from '../assets/images/generateImg3.png';
// import generateImg4 from '../assets/images/generateImg4.png';
import Img2DesignModal from '../modals/Img2DesignModal';

export default function GenerateImgSection() {
    return (
        <>
            <div className='description-row'>
                <div className='image-grid'>
                    <div className='gridItem'>
                        {/* <img src={generateImg1} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" /> */}
                    </div>
                    <div className='gridItem'>
                        {/* <img src={generateImg2} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" /> */}
                    </div>
                    <div className='gridItem'>
                        {/* <img src={generateImg3} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" /> */}
                    </div>
                    <div className='gridItem'>
                        {/* <img src={generateImg4} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" /> */}
                    </div>
                </div>
            </div>
            <Img2DesignModal />
        </>
    )
}
