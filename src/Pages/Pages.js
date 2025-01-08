import React from 'react';
import HomeHero from '../Components/HomeHero/HomeHero';
import BusinessQr from '../Components/BusinessQr/BusinessQr';
import Service from '../Components/Service/Service';
import Contact from '../Components/Contact/Contact';
import Price from '../Components/Price/Price';
import SuitsBusiness from '../Components/SuitsBusiness/SuitsBusiness';

const Pages = () => {
    return (
        <div>
            <HomeHero/>
            <Service/>
            <BusinessQr/>
            <SuitsBusiness/>
            <Price/>
            <Contact/>
        </div>
    );
};

export default Pages;