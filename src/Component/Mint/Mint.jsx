import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Mint.css';
import scn from '../assets/Mint/scn.png'
import chart1 from '../assets/Mint/chart1.png'
import chart2 from '../assets/Mint/chart2.png'
import scn3 from '../assets/Mint/scn3.png'
import scn2 from '../assets/Mint/scn2.png'
import chart3 from '../assets/Mint/chart3.png'

const Mint = () => {

    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "06/05/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {

                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day))
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    // document.getElementById("headline").innerText = "Time is over";
                    // document.getElementById("countdown").style.display = "none";
                    // document.getElementById("content").style.display = "block";
                    // clearInterval(x);
                    document.getElementById("days").innerText = '00'
                    document.getElementById("hours").innerText ='00'
                    document.getElementById("minutes").innerText = '00'
                    document.getElementById("seconds").innerText = '00';
                }
                //seconds
            }, 0)
    }());



    return (
        <div className='minitPage'>
            <Navigation/>
            <Container>
            <div className='timereffect king-Nightclub-wraper p-md-5 py-5'>
              <h1 className='mainHeading'>
              Get your og membership <span className='text-yellow'>minting</span> <br /> pass in
              </h1>

              <div>
              <div className='day-counter py-3 me-4 '>
                <ul className='timer'>
                  <div className='d-flex'>
                  <div>
                      <li><span id="days"></span></li>
                      <p><small>Days</small></p>
                   </div>
                   <div>
                   <li><span id="hours"></span></li>
                   <p><small>Hours</small></p>
                   </div>
                  </div>
                    <div className='d-flex'>
                    <div>
                  <li><span id="minutes"></span></li>
                  <p><small>Minutes</small></p>
                  </div>
                   <div>
                   <li><span id="seconds"></span></li>
                   <p><small>Seconds</small></p>
                   </div>
                    </div>
                </ul>
            </div>
              </div>
            </div>


         {/*----------------------- chart card 1// 
         ------------------------------------------------------------*/}

           <div className='p-md-5'>
           <div className='chartCard p-md-5 m-md-5 p-3'>
            <p className='text-yellow fs-3'>Pool Consist of</p>
                <div className='scn-part'>
                    <img src={scn} alt="" />
                </div>
                <div>
                    <Row>
                        <Col className='col-md-4 col-12'>
                           <div className='text-start pricing '>
                           <h4 className='text-yellow'>LUCKY <br /> OG POOL</h4>
                            <p>Mint Price: 0.25ETH</p>
                            <b>Total : 1420</b>
                           </div>
                        </Col>
                    
                      <Col className='col-md-4 col-6 chart-wraper'>
                            <img className='chart-style' src={chart1} alt="" />
                        </Col>

                        <Col className='col-md-4 col-6'>
                            <div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Legendary</p>
                                    <div className='space-between text-end'>
                                        <p className='text-yellow fs-md-2 fs-5 pe-3 pe-md-4 fw-bold'>2%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-3 fs-md-5'>(20)</p>
                                    </div>
                                </div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Mythical</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-md-2 fs-5 fw-bold'>14%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-3 fs-5'>(200)</p>
                                    </div>
                                </div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Rare</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-md-2 fs-5 fw-bold'>84%</p>
                                        <p className='ps-md-4 ms-5 fs-md-2 fs--5'>(1200)</p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>

                        </Col>
                    </Row>
                </div>
                
            </div>
            <button className='minit-now-btn'>MINIT NOW</button>
           </div>

 
 {/*----------------------- chart card 2// 
         ------------------------------------------------------------*/}

        <div className='p-md-5'>
           <div className='chartCard p-md-5 m-md-5 p-3'>
                <div>
                    <Row>      
                      <Col className='col-md-4 col-6 chart-wraper'>
                      <p className='text-yellow fs-3'>Pool Consist of</p>
                            <img className='chart-style pb-5 pb-md-0' src={chart2} alt="" />
                        </Col>
                        <Col className='col-md-4 col-6'>
                            <div className='second-card-point'>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Legendary</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-md-2 fs-5 fw-bold'>2%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-3 fs-5'>(30)</p>
                                    </div>
                                </div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Mythical</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-md-2 fs-5 fw-bold'>98%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-3 fs-5'>(600)</p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col className='col-md-4 col-12 ps-md-5 mt-5 mt-md-0'>
                           <div className='text-start pricing '>
                           <h4 className='text-yellow'>LUCKY <br /> OG POOL</h4>
                            <p>Mint Price: 0.25ETH</p>
                            <b>Total : 1420</b>
                           </div>
                        </Col>
                    
                    </Row>
                </div>
                <div className='scn-part2'>
                    <img src={scn2} alt="" />
                </div>
            </div>
            <button className='minit-now-btn'>MINIT NOW</button>
           </div>



 {/*----------------------- chart card 3// 
         ------------------------------------------------------------*/}

           <div className='p-md-5'>
           <div className='chartCard p-md-5 m-md-5 p-3'>
            <p className='text-yellow fs-3'>Pool Consist of</p>
                <div className='scn-part'>
                    <img src={scn3} alt="" />
                </div>
                <div>
                    <Row>
                        <Col className='col-md-4 col-12'>
                           <div className='text-start pricing '>
                           <h4 className='text-yellow'>MYTHICAL <br /> OG POOL</h4>
                            <p>Mint Price: 0.8ETH</p>
                            <b>Total : 630</b>
                           </div>
                        </Col>
                    
                      <Col className='col-md-4 col-6 chart-wraper'>
                            <img className='chart-style' src={chart3} alt="" />
                        </Col>

                        <Col className='col-md-4 col-6'>
                            <div className='third-chart-point'>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Legendaryl</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-md-2 fs-5 fw-bold'>100%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-3 fs-5'>(100)</p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
            <button className='minit-now-btn'>MINIT NOW</button>
           </div>

 {/*----------------------- chart card 4// 
         ------------------------------------------------------------*/}

<div className='p-md-5 pb-1 mb-0 last-chart-card'>
           <div className='chartCard p-md-5 m-md-5 p-3'>
                <div>
                    <Row>      
                      <Col className='col-md-4 col-6 chart-wraper'>
                      <p className='text-yellow fs-3'>Pool Consist of</p>
                            <img className='chart-style pb-5 pb-md-0' src={chart3} alt="" />
                        </Col>
                        <Col className='col-md-4 col-6'>
                        <div className='third-chart-point'>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-md-2 fs-4'>OG Legendary</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-md-2 fs-5 fw-bold'>100%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-3 fs-5'>(91)</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-4 col-12 ps-md-5 mt-5 mt-md-0'>
                           <div className='text-start pricing '>
                           <h4 className='text-yellow'>Founding<br /> OG POOL</h4>
                            <p>Mint Price:? ETH</p>
                            <b>Total : 91</b>
                           </div>
                        </Col>
                    
                    </Row>
                    <p className='text-start mt-5'>*Celebrties , Influencers , Top Traders , and Advisors</p>
                </div>
                <div className='scn-part2'>
                    <img src={scn3} alt="" />
                </div>
            </div>
            <button className='minit-now-btn'>MINIT NOW</button>
           </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Mint;