import React from 'react'
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import DreamSection from '../components/DreamSection/DreamSection';
import BillBoard from '../components/BillBoard/BillBoard';
import { useLocation } from 'react-router-dom';



export default function Home() {
    const location = useLocation();
    const logoutVal = location.state?.logoutVal;
    return (
        <>
            <Header boolVal={logoutVal}/>
            <Banner />
            <DreamSection />
            <BillBoard />
        </>
    )
}
