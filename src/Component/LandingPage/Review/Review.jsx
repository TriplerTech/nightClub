import React from 'react';
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
import user5 from '../../assets/user5.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'
import { Swiper, SwiperSlide } from "swiper/react";

import {Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
const Review = () => {
    return (
        <div>
            <Container>
                <h1 className='mainHeading'>What do people say about<span className='text-yellow'> Night King Club?</span></h1>
            
                <div>
                    
                   <Swiper 
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                          }}
                        modules={[Autoplay, Pagination]} 
                        className="mySwiper">
                    <SwiperSlide>
                          <Row className='m-0 p-3 p-md-5 review-slider'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is super well-connected in the entertainment industry and always throws the best parties.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Hollywood actress</p>
                                  </div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
                                      <span className='coma pe-md-5'>❛❛</span>
                                      <div  className='pe-md-5 '>
                                      <i>Night King’s parties are always jam-packed with gorgeous women, even from a plastic surgeon’s perspective.</i>
                                      </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Seoul plastic surgeon</p>
                                  </div>
                                 </div>
                              </Col>
                              <Col className='col-12 col-md-6'>
                                  <img className='img-fluid review-user ps-md-5 ' src={user1} alt="" />
                              </Col>
                          </Row>
                    </SwiperSlide>    


                    <SwiperSlide>
                          <Row className='m-0 p-3 p-md-5 review-slider'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Making money without living life is meaningless. Night King always knows how to have the most fun.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Crypto whale T</p>
                                  </div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
                                      <span className='coma pe-md-5'>❛❛</span>
                                      <div  className='pe-md-5 '>
                                      <i>It’s a pity that they do not accept VC investments. The value Night King Club is creating is insane.</i>
                                      </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Leading venture capitalist</p>
                                  </div>
                                 </div>
                              </Col>
                              <Col className='col-12 col-md-6'>
                                  <img className='img-fluid review-user ps-md-5 ' src={user2} alt="" />
                              </Col>
                          </Row>
                    </SwiperSlide>    
                    <SwiperSlide>
                          <Row className='m-0 p-3 p-md-5 review-slider'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is a party beast.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>"Facebook engineer"</p>
                                  </div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
                                      <span className='coma pe-md-5'>❛❛</span>
                                      <div  className='pe-md-5 '>
                                      <i>I met my model girlfriend at the Night King’s event. That's all I have to say.</i>
                                      </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>"Google engineer"</p>
                                  </div>
                                 </div>
                              </Col>
                              <Col className='col-12 col-md-6'>
                                  <img className='img-fluid review-user ps-md-5 ' src={user3} alt="" />
                              </Col>
                          </Row>
                    </SwiperSlide>    
                    <SwiperSlide>
                          <Row className='m-0 p-3 p-md-5 review-slider'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Given the team’s past successes, Night King Club will surely be the leading Web 3.0 international social club.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>"Web 2.0 millionaire"</p>
                                  </div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
                                      <span className='coma pe-md-5'>❛❛</span>
                                      <div  className='pe-md-5 '>
                                      <i>I always look forward to Night King’s party invitations. </i>
                                      </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Wallstreet lawyer</p>
                                  </div>
                                 </div>
                              </Col>
                              <Col className='col-12 col-md-6'>
                                  <img className='img-fluid review-user ps-md-5' src={user4} alt="" />
                              </Col>
                          </Row>
                    </SwiperSlide>    
                    <SwiperSlide>
                          <Row className='m-0 p-3 p-md-5 review-slider'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King’s events inspire my creative vision.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Tokyo digital artist</p>
                                  </div>
                                 <div className='review-card p-4 pt-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
                                      <span className='coma pe-md-5'>❛❛</span>
                                      <div  className='pe-md-5 '>
                                      <i>The events hosted by Night King are, by far, the best I’ve ever attended.</i>
                                      </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Crypto whale W</p>
                                  </div>
                                 </div>
                              </Col>
                              <Col className='col-12 col-md-6'>
                                  <img className='img-fluid review-user ps-md-5 ' src={user5} alt="" />
                              </Col>
                          </Row>
                    </SwiperSlide>    
                </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Review;