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
    console.log("cccccccccccccccccccccccccc", industry);
    const [productsName, setProductDropdown] = useState([]);
    const [productVal, setProductName] = useState('');
    const [ThemeDropdown, setThemeDropdown] = useState([]);
    const [ThemeVal, setThemeValue] = useState("");
    const [fabricValues, setFabricValues] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setLoader(false);
        const reqBody = {
            promt_text: promptText,
            category: industry,
            product: productVal,
            theme: ThemeVal,
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
        if (e.target.value === '') {
            setProductDropdown([]);
        } else {
            // setIndustry(e.target.value);
            let Category_value = getCategory.filter(item => item.value === Number(e.target.value));
            setIndustry(Category_value[0].label)
            fetch('https://cyberartboard.zeroinfo.in/api/get-product-name')
                .then(response => response.json())
                .then(res => {
                    const product_name = res.productName
                        .filter(product => product.id === Number(e.target.value))
                        .map(product => ({
                            value: product.id,
                            label: product.product_name
                        }));
                    setProductDropdown(product_name);
                })
        }
    };

    const handleProductChange = (e) => {
        // setProductName(e.target.value);
        if (e.target.value === '') {
            setThemeDropdown([]);
        } else {
            let Product_value = productsName.filter(item => item.value === Number(e.target.value));
            setProductName(Product_value[0].label);
            fetch('https://cyberartboard.zeroinfo.in/api/get-theme')
                .then(response => response.json())
                .then(res => {
                    const theme = res.theme
                        .filter(theme => theme.product_id === Number(e.target.value))
                        .map(themeValue => ({
                            value: themeValue.product_id,
                            label: themeValue.theme
                        }));
                    setThemeDropdown(theme);
                })

            ////fabric//////
            fetch('https://cyberartboard.zeroinfo.in/api/get-fabric')
                .then(response => response.json())
                .then(res => {
                    const getFabric = res.theme
                        .filter(fabric => fabric.product_id === Number(e.target.value))
                        .map(fabValue => ({
                            value: fabValue.fabric_id,
                            label: fabValue.theme
                        }));
                    setFabricValues(getFabric);

                })
        }
    }

    const handleStyleThemeChange = (e) => {
        // setThemeValue(e.target.value);
        if (e.target.value === '') {
            setThemeValue('');
        } else {
            let Theme_value = ThemeDropdown.filter(item => item.value === Number(e.target.value));
            setThemeValue(Theme_value[0].label);
        }
    }

    useEffect(() => {
        fetch('https://cyberartboard.zeroinfo.in/api/get-category')
            .then(response => response.json())
            .then(data => {
                const formattedCategories = data.category.map(cat => ({
                    value: cat.id,
                    label: cat.category
                }));
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
                                    // value={industry}
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
                                    // value={productVal}
                                    onChange={handleProductChange}
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
                                    // value={ThemeVal}
                                    onChange={handleStyleThemeChange}
                                    aria-label='Select style theme'
                                >
                                    <option value="">Select a Theme</option>
                                    {/* Map through getCategory array to render options */}
                                    {ThemeDropdown.map(theme => (
                                        <option key={theme.value} value={theme.value}>
                                            {theme.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='prompt-section'>
                                <textarea className='form-control prompt' value={promptText} onChange={(e) => setPromptText(e.target.value)} placeholder="Prompt:" required></textarea>
                            </div>
                            <div className='prompt-section'>
                                <textarea className='form-control prompt' placeholder="Negative Prompt:"></textarea>
                            </div>
                            <button className='generate-btn' onClick={handleSubmit} disabled={industry.length === 0 || productVal.length === 0 || ThemeVal.length === 0}>
                                <a className='btn'><span className='icon-img'><img src={iconImg} alt="" /></span>Generate</a>
                            </button>
                            {/* <div className='generate-btn' onClick={handleSubmit} disabled={promptText.length === 0}>
                                <a className='btn'><span className='icon-img'><img src={iconImg} alt="" /></span>Generate</a>                                
                                <Link to='/products/order' title='Generate' className='btn'>Generate</Link>
                            </div> */}
                        </form>
                    </div>
                    <div className='col-md-7 products-description'>
                        {loader === true &&
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
                        <Img2DesignModal imageSrc={selectedImage} FabValues={fabricValues} />
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