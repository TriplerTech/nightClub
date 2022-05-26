import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Faq from '../Faq/Faq';
import HomePage from '../HomePage/HomePage';
import KingClub from '../kingClub/KingClub';
import MeetWithClub from '../MeetWithClub/MeetWithClub';
import Review from '../Review/Review';
import Roadmap from '../Roadmap/Roadmap';
import Team from '../Team/Team';
import Utilities from '../Utilities/Utilities';
import './ParentsPage.css'

const ParentsPage = () => {
    return (
        <div className='landingPageWraper'>
            <Navigation/>
            <HomePage/>
            <KingClub/>
            <Review/>
            <MeetWithClub/>
            <Utilities/>
            <Roadmap/>
            <Team/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default ParentsPage;