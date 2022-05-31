import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './KingClub.css'
import logo from '../../assets/logolarge.png'
import clubImg from '../../assets/clubImg.png'
const KingClub = () => {
    return (
        <div>
           <Container>
              <div className='king-Nightclub-wraper after-effect p-2 p-md-5'>
              <Row>
                    <Col className='col-12 col-md-5 p-5 pt-md-2 king-logo'>
                        <img className='img-fluid' src={logo} alt="" />
                    </Col>
                    <Col className='col-12 col-md-7 ps-md-3 p-4 p-md-1 pe-md-3'>
                        <div className='kingClub-text text-start '>
                            <h2 className='subHeading'>
                              <span className='text-yellow'>Night King Club:</span> an exclusive Web 3.0 Global social club
                            </h2>
                            <p className='pt-2'>
                            <p>As the Web 3.0 home for business elites and stunning models, Night King Club bridges the gap between the metaverse and the physical world. </p><br />
                            <p>We share a passion for life and ultra-high-energy parties. Here, gorgeous models and top businessmen will share their unique talents, expertise, resources, and <span className='text-yellow'>ALPHA.</span> </p><br />
                            Whether the market is up or down, Night King Club offers a place to unwind and live life to the fullest with members who feel like family.
                            </p>
                        </div>
                    </Col>
                    


                    <Col className='col-12 col-md-7 p-4 pe-md-5 mt-md-5 pt-md-5'>
                        <div className='kingClub-text text-start pt-4'>
                            <h2 className='subHeading'>
                             The dream membership NFT you've been waiting for - <span className='text-yellow'>NKG clubbers</span>  are more than just stylish guys
                            </h2>
                            <p className='pt-3'>
                            They're a collection of 5000 utility-enabled PFPs with unique designs and utilities. Each NKG clubber can unlock exclusive Night King Club benefits. The longer you hold and stake, the better the rewards. Of course, we call it clubbing.
                            </p>
                            <button className='long-button mt-4'>Learn more about the NKG Clubber NFT utilities</button>
                        </div>
                    </Col>
                    <Col className='col-12 p-4 col-md-5 mt-md-5'>
                        <div className='clubimg'>
                        <img className='img-fluid' src={clubImg} alt="" />
                        </div>
                    </Col>
                </Row>
              </div>
           </Container>
        </div>
    );
};

export default KingClub;