import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import check from '../../assets/roadmap/cheack.png'
import p1 from '../../assets/roadmap/p1.png'
import p2 from '../../assets/roadmap/p2.png'
import p3 from '../../assets/roadmap/p3.png'
import p4 from '../../assets/roadmap/p4.png'
import mp4 from '../../assets/roadmap/pm4.png'
import mp3 from '../../assets/roadmap/pm3.png'
import kingLogo from '../../assets/roadmap/kingLogo.png'
import dotleft from '../../assets/roadmap/dotleft.png'
import dotright from '../../assets/roadmap/dotright.png'
import ddotleft from '../../assets/roadmap/ddleft.png'
import ddotright from '../../assets/roadmap/ddotright.png'
import './Roadmap.css'

const Roadmap = () => {
    return (
        <div>
            <h1 className="mainHeading text-yellow">Roadmap:</h1>
            <div>
                <Container>
                    <Row className='m-0 p-md-5'>
                        <Col className="col-12 col-md-5">
                            <div className='topPase'>
                                <ul className='ul-element'>
                                    <p className='paseHeading'>Phase 1</p>
                                    <li> <p>Initial OG pass minting launch</p> </li>
                                    <li> <p>Official membership NFT minting launch</p> </li>
                                    <li> <p>Opensea NFT listing</p></li>
                                    <li> <p>Release of $NKG governance token</p></li>
                                    <li> <p>NFT clubbing function complete</p></li>
                                </ul>
                                 <div className='p-md-4 mt-md-4 pt-md-5'>
                                 <img className='parseNO1 p-2 pt-md-2' src={p1} alt="" />
                                 </div>
                            </div>
                        </Col>


                    {/* for mobile// */}
                        <Col className="col-12 col-md-5 desktop-visibility">
                            <div className='topPase me-md-3'>
                                <ul className='ul-element'>
                                <p className='paseHeading'>Phase 2</p>
                                    <li><p>Epic launch party for OG membership NFT holders</p> </li>
                                    <li><p>Exclusive model NFTs drop to holders with 2 membership NFTs</p> </li>
                                    <li><p>Announce first wave of partners </p></li>
                                </ul>
                                 <div className='p-4 pt-5'>
                                 <img className='parseNO2' src={p2} alt="" />
                                 </div>
                            </div>
                        </Col>
                        {/* end */}

                        <Col className="col-md-2 mt-3 mobile-visibility">
                           <div className='dotet-img mt-5 pt-4'>
                            <img src={dotleft} alt="" />
                            <img src={dotright} alt="" />
                           </div>
                        </Col>
                        <Col className="col-12 col-md-5">
                          <div className='topPase mt-md-5 pt-md-3 ms-md-4'>
                               <img className='parseNO parseNO3 ms-md-3 p-md-0 mt-md-4 pt-md-3 mobile-visibility' src={p3} alt="" />
                                <ul className='ul-element ps-md-4'>
                                <p className='paseHeading'>Phase 3</p>
                                    <li><p> Legendary party invitation for all top $NKG token and NFT holders </p></li>
                                    <li><p> Announce second wave of partners</p></li>                        
                                </ul>
                                <img className='parseNO  ms-3 desktop-visibility' src={mp3} alt="" />
                            </div>
                        </Col> 
                       
                        <Col className="col-md-5 mobile-visibility"></Col>
                        <Col className="col-md-2 mobile-visibility">
                            <img className='img-fluid' src={kingLogo} alt="" />
                        </Col>
                        <Col className="col-md- mobile-visibility"></Col>



                        <Col className="col-12 col-md-5 mobile-visibility">
                            <div className='topPase me-md-3'>
                                <ul className='ul-element'>
                                <p className='paseHeading'>Phase 2</p>
                                    <li><p>Epic launch party for OG membership NFT holders</p> </li>
                                    <li><p>Exclusive model NFTs drop to holders with 2 membership NFTs</p> </li>
                                    <li><p>Announce first wave of partners </p></li>
                                </ul>
                                 <div className='p-4 pt-md-4'>
                                 <img className='parseNO2 ' src={p2} alt="" />
                                 </div>
                            </div>
                        </Col>

                        <Col className="col-md-2 mobile-visibility">
                        <div className='dotet-img down'>
                            <img src={ddotleft} alt="" />
                            <img src={ddotright} alt="" />
                        </div>
                        </Col>
                        <Col className="col-12 col-md-5">
                        <div className='topPase me-md-3'>
                                <div className='ps-md-4 pb-4 pt-md-4 ms-md-3'>
                                 <img className='parseNO4 mobile-visibility' src={p4} alt="" />
                                 </div>
                                <ul className='ul-element'>
                                <p className='paseHeading'>Phase 4</p>
                                    <li> <p>Legendary party invitation for all top $NKG token and NFT holders</p> </li>
                                    <li> <p>Metaverse alpha launch</p> </li>
                                    <li> <p>Announce third wave of partners</p></li>
                                </ul>
                               <div className='desktop-visibility'>
                               <img className='parseNO4' src={mp4} alt="" />
                               </div>
                            </div>
                        </Col>


                      
                      
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Roadmap;