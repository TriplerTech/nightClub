import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Mint.css';
import scn from '../assets/Mint/scn.png'
import chart1 from '../assets/Mint/chart.png'

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
              <div className='day-counter py-3 '>
                <ul className='timer'>
                   <div>
                      <li><span id="days"></span></li>
                      <p><small>Days</small></p>
                   </div>
                   <div>
                   <li><span id="hours"></span></li>
                   <p><small>Hours</small></p>
                   </div>
                  <div>
                  <li><span id="minutes"></span></li>
                  <p><small>Minutes</small></p>
                  </div>
                   <div>
                   <li><span id="seconds"></span></li>
                   <p><small>Seconds</small></p>
                   </div>
                </ul>
            </div>
              </div>
            </div>


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
                    
                      <Col className='col-md-4 col-6'>
                            <img className='chart-style' src={chart1} alt="" />
                        </Col>

                        <Col className='col-md-4 col-6'>
                            <div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-2'>OG Legendary</p>
                                    <div className='space-between text-end'>
                                        <p className='text-yellow fs-2 fw-bold'>2%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-md-4'>(20)</p>
                                    </div>
                                </div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-2'>OG Mythical</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-2 fw-bold'>14%</p>
                                        <p className='ps-md-5 ms-md-5 ps-5 fs-3'>(200)</p>
                                    </div>
                                </div>
                                <div className='text-end pe-md-5'>
                                    <p className='fs-2'>OG Rare</p>
                                    <div className='space-between'>
                                        <p className='text-yellow fs-2 fw-bold'>84%</p>
                                        <p className='ps-md-5 ms-5 fs-2'>(1200)</p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
           </div>




            </Container>
            <Footer/>
        </div>
    );
};

export default Mint;