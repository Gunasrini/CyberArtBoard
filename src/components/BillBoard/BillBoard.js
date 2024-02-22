import React from 'react'
import '../BillBoard/BillBoard.css';
import generateImg1 from '../../assets/images/generateImg1.png';
import generateImg2 from '../../assets/images/generateImg2.png';
import generateImg3 from '../../assets/images/generateImg3.png';
import generateImg4 from '../../assets/images/generateImg4.png';
import billBoardImg1 from '../../assets/images/Design BillBoard/img1.png';
import billBoardImg2 from '../../assets/images/Design BillBoard/img2.png';
import billBoardImg3 from '../../assets/images/Design BillBoard/img3.png';
import billBoardImg4 from '../../assets/images/Design BillBoard/img4.png';
import billBoardImg5 from '../../assets/images/Design BillBoard/img5.png';
import billBoardImg6 from '../../assets/images/Design BillBoard/img6.png';
import billBoardImg7 from '../../assets/images/Design BillBoard/img7.png';
import billBoardImg8 from '../../assets/images/Design BillBoard/img8.png';
import billBoardImg9 from '../../assets/images/Design BillBoard/img9.png';
import billBoardImg10 from '../../assets/images/Design BillBoard/img10.png';
import billBoardImg11 from '../../assets/images/Design BillBoard/img11.png';
import billBoardImg12 from '../../assets/images/Design BillBoard/img12.png';
import Img2DesignModal from '../../modals/Img2DesignModal';

export default function BillBoard() {
    return (
        <div className='dreams-section billboard-section mb-0'>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <h3>Design BillBoard</h3>
                </div>
                <div className='row'>
                    <div className='col-md-3 list-item'>
                        <img src={generateImg1} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={generateImg2} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={generateImg3} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={generateImg4} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg1} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg2} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg3} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg4} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg5} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg6} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg7} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg8} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg9} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg10} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg11} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                    <div className='col-md-3 list-item'>
                        <img src={billBoardImg12} alt="" data-bs-toggle="modal" data-bs-target="#img2DesignModal" />
                    </div>
                </div>
            </div>
            <Img2DesignModal />
        </div>
    )
}
