import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='mt-5 pt-5'>
           <div className='footer p-5 mt-5 footer-logo'>
               <Row className='m-0 '>
                   <Col className="col-md-4 col-12 ps-md-5 mb-5">
                       <div className='d-flex align-items-center ms-md-5'>
                           <img className=' img-fluid me-4' src={logo} alt="" />
                           <h4 className='text-yellow mt-2'>NIGHT KING CLUB</h4>
                       </div>
                   </Col>
                   <Col className="col-md-4 col-6">
                      <div className="text-start ps-md-5 ms-md-5">
                      <h5>Quicks Links</h5>
                        <p><small>Home</small></p>
                        <p><small>Team Vision</small></p>
                        <p><small>Founder Story</small></p>
                      </div>
                   </Col>
                   <Col className="col-md-4 col-6">
                       <div className='text-start'>
                       <h5>Social Media</h5>
                       <small><i class="fa-brands fa-telegram footer-icon"></i> Telegram</small> <br />
                       <small><i class="fa-brands fa-twitter footer-icon"></i> Twitter</small>
                       </div>
                   </Col>
               </Row>
               <Container className='mt-5 dividers'>
                   <a href="#top"><button className='upScrool'>&#129105;</button></a>
                    <hr />
                    <p>&copy; Copyright 2022 Night King Club All Rights Reserved</p>
           </Container>
           </div>
         
        </div>
    );
};

export default Footer;