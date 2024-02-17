import React from 'react'
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import DreamSection from '../components/DreamSection/DreamSection';
import BillBoard from '../components/BillBoard/BillBoard';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <DreamSection />
            <BillBoard />
            <Footer />
        </>
    )
}
