import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import team1 from '../../assets/teams/team1.png'
import team2 from '../../assets/teams/team2.png'
import team3 from '../../assets/teams/team3.png'
import team4 from '../../assets/teams/team4.png'
import team5 from '../../assets/teams/team5.png'
import team6 from '../../assets/teams/team6.png'
import team7 from '../../assets/teams/team7.png'
import team8 from '../../assets/teams/team8.png'
import './Team.css'
const Team = () => {
    return (
        <div id='team'>
           <Container>
               <div className='teamsEffect king-Nightclub-wraper p-md-5'>
                   <h1 className='teams mainHeading pb-5'><span className='text-yellow'> Night King </span>Club Dream Team:</h1>
                  <Row>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team1} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des first-4 px-md-5 pt-md-4 pb-5'>
                                    <p>KT</p>
                                    <p>
                                    Ex-Google engineer with extensive Web 3 development experience who met his beautiful model girlfriend at Night King’s party. 
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team2} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des first-4 px-md-5 pt-md-4 pb-5'>
                                    <p>Luckystar</p>
                                    <p>
                                    Extensive experience in the model agency business, professional model in her early career, broad access to international professional models.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team3} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des first-4 px-md-5 pt-md-4 pb-5'>
                                    <p>C Dragon</p>
                                    <p>
                                    Ex-Blizzard veteran game designer and amateur DJ, loves to enjoy nightlife with Night King and his crew.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team4} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des first-4 px-md-5 pt-md-4 pb-5'>
                                    <p>Goldmine</p>
                                    <p>
                                    Ex-consultant at a leading Web 3 business strategy consultancy. Knows how to develop tokonomics and partnerships that will benefit the true long-term holders.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team5} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des px-md-5 pt-md-4 pb-5'>
                                    <p>Astella</p>
                                    <p>
                                    Professional model in her early career, experience in operating several nightclubs and bars to provide the best experience to customers, great taste in interior design and wine.
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team6} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des px-md-5 pt-md-4 pb-5'>
                                    <p>Stacy</p>
                                    <p>
                                    In charge of community building/ management and online marketing/ partnerships. Will work with a group of moderators to make sure community members have a great experience interacting with each other. 
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team7} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des px-md-5 pt-md-4 pb-5'>
                                    <p>Luna</p>
                                    <p>
                                    Extensive event planning experience, hosting parties with 1000+ attendees (always makes sure even the most introverted guest enjoy the party), yacht party, concierge service, and special service for gentlemen : )
                                    </p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-6 col-md-4 col-lg-3">
                            <div className='team-card'>
                                <div className='team-profile-box'>
                                    <img className='team-avater' src={team8} alt="" />
                                    <div className='blank'></div>
                                </div>
                                <div className='team-des px-md-5 pt-md-4 pb-5'>
                                    <p>Dr. L</p>
                                    <p>
                                    Ex-Hollywood play writer, now helping Night King to do branding works for his businesses. Also met his model girlfriend at a Night King’s event. 
                                    </p>
                                </div>
                            </div>

                        </Col>
                       
                  </Row>
               </div>
           </Container>
        </div>
    );
};

export default Team;