import React from 'react';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import HomeService from '../HomeService';
//import Contact from './Contact';
import Gallery from '../Gallery'
import ContactForm from '../ContactForm';
import HomeContact from '../HomeContact';

function Home() {
    return (
        <div>
            <HeroSection />

            <HomeService />
            <Gallery />

            <HomeContact />

        </div>
    )
}

export default Home;