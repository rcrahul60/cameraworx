import React from 'react';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import HomeService from '../HomeService';
import Contact from './Contact';
import Gallery from '../Gallery'

function Home() {
    return (
        <div>
            <HeroSection />

            <HomeService />
            <Gallery />
            <Contact />

        </div>
    )
}

export default Home;