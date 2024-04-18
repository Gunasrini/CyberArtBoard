import React from 'react'
// import generateImg from '../assets/images/generateImg1.png';
import iconImg from '../assets/images/icon.png';
import { useNavigate } from 'react-router-dom';
import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    LinkedinShareButton,
    EmailShareButton,
  } from 'react-share';

export default function Img2DesignModal(props) {
    console.log("textttttttttttttttt",props);
    const shareUrl = 'https://example.com';
  const title = 'Check out this awesome content!';
  const media = 'https://example.com/image.jpg';
    const navigate = useNavigate();

    const redirectToOrderPage = (e) => {
        e.preventDefault();
        navigate(`/products/order`);
        navigate('/products/order', { state: { image: props.imageSrc } });
        }

        const socialMediaShare = (url) => {
            const currentUrl = "https://gunasrini.github.io/CyberArtBoard/"
        
            // Copy current page URL to clipboard
            navigator.clipboard.writeText(currentUrl)
              .then(() => {
                // Open Facebook share dialog with copied URL
                window.open(url + encodeURIComponent(currentUrl), '_blank');
              })
              .catch((error) => {
                console.error('Failed to copy URL: ', error);
              });
          };

          function downloadImage(){
            const link = document.createElement('a');
            const fileName = 'image.jpg';
            link.href = props.imageSrc;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
  };
          
    return (
        <>
            <div className="modal modal-md" id="img2DesignModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        <div className='col-md-10 left-design-image'>
                            <img src={props.imageSrc} alt="" />
                            <div className='img-desc'>
                                <p>User Name: </p>
                                <p>Date: </p>
                                <p>Prompt: </p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='product-share'>
                                <i className="fa-solid fa-download" onClick={downloadImage}></i>
                                <i className="fa-brands fa-facebook" onClick={()=>socialMediaShare('https://www.facebook.com/sharer/sharer.php?u=')}>
                                <FacebookShareButton >
                                </FacebookShareButton>
                                </i>
                                <i className="fa-brands fa-instagram" onClick={()=>socialMediaShare('https://www.instagram.com/your_instagram_username/')}></i>
                                <i className="fa-brands fa-twitter" onClick={()=>socialMediaShare('https://twitter.com/?lang=en')}></i>
                                <i className="fa-brands fa-pinterest"></i>
                                <i className="fa-solid fa-envelope" onClick={()=>socialMediaShare('https://mail.google.com/mail')}></i>
                                <i className="fa-brands fa-linkedin" onClick={()=>socialMediaShare('https://www.linkedin.com/sharing/share-offsite')}></i>
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