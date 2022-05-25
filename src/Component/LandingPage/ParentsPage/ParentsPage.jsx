import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import KingClub from '../kingClub/KingClub';
import Review from '../Review/Review';
import './ParentsPage.css'

const ParentsPage = () => {
    return (
        <div className='landingPageWraper'>
            <Navigation/>
            <HomePage/>
            <KingClub/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default ParentsPage;