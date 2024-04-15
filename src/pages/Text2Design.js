import React, { useEffect, useState } from 'react'
import iconImg from '../assets/images/icon.png';
// import { Link } from 'react-router-dom';
// import GenerateImgSection from './GenerateImgSection';
// import axios from 'axios';
import Img2DesignModal from '../modals/Img2DesignModal';
// import Select from 'react-select';

export default function Text2Design() {

    const [promptText, setPromptText] = useState("");
    const [loading, setLoading] = useState(false);
    const [loader, setLoader] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [getCategory, setCategory] = useState([]);
    const [industry, setIndustry] = useState('');
    const [productsName,setProductDropdown]=useState([]);
    const [productVal,setProductName]=useState('');

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setLoader(false);
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

    const handleIndustryChange = (e) => {
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeee",typeof(e.target.value));
    if(e.target.value===''){
        setProductDropdown([]);
    }else{
    setIndustry(e.target.value);
    console.log("get productsssssssssssssssssssssssss",e.target.value);
    const getProduct=fetch('https://cyberartboard.zeroinfo.in/api/get-product-name')
    .then(response=>response.json())
    .then(res=>{
        console.log("get product drop down values",res);
        console.log("hhhhhhhhhhhhhhhhhhhh",res.productName[0].id);
        console.log("nyyyyyyyyyyyyyyyyyyyyyyy",typeof(res.productName[0].id));

        const product_name=res.productName
        .filter(product => product.id === Number(e.target.value)) // Filter by specific ID
        .map(product => ({
            value: product.product_name,
            label: product.product_name
        }));
        console.log("product drop downssssssssssssss",product_name);
        setProductDropdown(product_name);
    })

    const getTheme=fetch('https://cyberartboard.zeroinfo.in/api/get-theme')
    .then(response=>response.json())
    .then(res=>{
        console.log("get theme drop down values",res.theme[0].theme[0].theme);
        // const theme=res.productName.map(products=>({
        //     value:products.product_name,
        //     label:products.product_name
        // }));
        // console.log("product drop downssssssssssssss",product_name);
        // setProductDropdown(product_name);
    })
}
  };

    useEffect(() => {
        fetch('https://cyberartboard.zeroinfo.in/api/get-category')
            .then(response => response.json())
            .then(data => {
                const formattedCategories = data.category.map(cat => ({
                    value: cat.id,
                    label: cat.category
                }));
                console.log("valueeeeeeeeeeeeeeeeeeeee", formattedCategories);
                setCategory(formattedCategories);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <>
            <div className='container my-4 py-2'>
                <div className='row'>
                    {/* <h2 className='product-page-title'>Text2Designs</h2> */}
                    <div className='col-md-5 products-input-field'>
                        <form>
                            <div className='form-row'>
                                    <select
                                        className='form-control'
                                        aria-label='Select industry'
                                    value={industry}
                                    onChange={handleIndustryChange}
                                    >
                                        <option value="">Select an industry</option>
                                        {/* Map through getCategory array to render options */}
                                        {getCategory.map(category => (
                                            <option key={category.value} value={category.value}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* <Select
            options={getCategory}
            // onChange={handleChange}
            placeholder="Select Category"
        /> */}
                            <div className='form-row'>
                                <select
                                    className='form-control'
                                    value={productVal}
                                    // onChange={handleProductChange}
                                    aria-label='Select product'
                                >
                                    <option value="">Select a product</option>
                                        {/* Map through getCategory array to render options */}
                                        {productsName.map(product => (
                                            <option key={product.value} value={product.value}>
                                                {product.label}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className='form-row'>
                                <select
                                    className='form-control'
                                    // value={styleTheme}
                                    // onChange={handleStyleThemeChange}
                                    aria-label='Select style theme'
                                >
                                    <option value="">Select a style theme</option>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                    <option value="colorful">Colorful</option>
                                    <option value="minimalist">Minimalist</option>
                                </select>
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
                        {loader===true && 
                    <div className='description-row'>
                <div className='image-grid'>
                    <div className='gridItem'></div>
                    <div className='gridItem'></div>
                    <div className='gridItem'></div>
                    <div className='gridItem'></div>
                </div>
            </div>}
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