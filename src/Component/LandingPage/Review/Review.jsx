import React from 'react';
import user1 from '../../assets/user1.png'
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'
import { Swiper, SwiperSlide } from "swiper/react";

import {Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
const Review = () => {
    return (
        <div>
            <Container>
                <h1 className='mainHeading'>What do people say about Night <span className='text-yellow'>King Club?</span></h1>
            
                <div>
                    
                   <Swiper 
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                          }}
                        modules={[Autoplay, Pagination]} 
                        className="mySwiper">
                    <SwiperSlide>
                          <Row className='m-0 p-3 p-md-5'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is super well-connected in the entertainment industry and always throws the best parties.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Hollywood actress</p>
                                  </div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
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
                          <Row className='m-0 p-3 p-md-5'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is super well-connected in the entertainment industry and always throws the best parties.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Hollywood actress</p>
                                  </div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
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
                          <Row className='m-0 p-3 p-md-5'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is super well-connected in the entertainment industry and always throws the best parties.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Hollywood actress</p>
                                  </div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
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
                          <Row className='m-0 p-3 p-md-5'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is super well-connected in the entertainment industry and always throws the best parties.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Hollywood actress</p>
                                  </div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
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
                          <Row className='m-0 p-3 p-md-5'>
                              <Col className='col-12 col-md-6'>
                                 <div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4'>
                                      <span className='coma pe-md-5'>❛❛</span>
                                        <div  className='pe-md-5 '>
                                        <i>Night King is super well-connected in the entertainment industry and always throws the best parties.</i>
                                        </div>
                                      <p className='pt-3 pb-md-1 fw-bold'>Hollywood actress</p>
                                  </div>
                                 <div className='review-card p-5 p-md-5 pb-md-4 my-4 mt-md-5 '>
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
                </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Review;