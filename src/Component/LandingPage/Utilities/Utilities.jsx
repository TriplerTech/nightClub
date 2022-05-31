import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import roundLogo from '../../assets/logoRound.png';
import icon1 from '../../assets/icons/discord.png'
import icon2 from '../../assets/icons/medal.png'
import icon3 from '../../assets/icons/virtual.png'
import icon4 from '../../assets/icons/userGroup.png'
import icon5 from '../../assets/icons/joy.png'
import icon6 from '../../assets/icons/persent.png'
import icon7 from '../../assets/icons/music.png'
import icon8 from '../../assets/icons/key.png'
import icon9 from '../../assets/icons/cup.png'
import './Utilities.css'

const Utilities = () => {
    return (
        <div>
             <Container>
             <div className='king-Nightclub-wraper p-2 p-md-5'>
               <div className='utiliyies-header'>
                  <img className='utilitiesLogo' src={roundLogo} alt="" />
                  <div>
                      <h4 className='text-yellow'>EXCLUSIVE UTILITIES OF THE</h4>
                      <h1 className='text-yellow'>NKG CLUBBER NFT</h1>
                  </div>
               </div>

               {/* table// */}
                <section className='utilites-table'>
               <Row className='m-0 p-0 g-2 '>
                   <Col className='col-0 d-none d-md-block col-md-4'>
                       <div className='empy-table-box'>
                       </div>
                   </Col>
                   <Col className='col-3 col-md-2'>
                       <div className='table-box '>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-md-4 col-12'>
                       <div className=''>
                       </div>
                   </Col>
                   <Col className='col-3 col-md-2'>
                       <div className='table-color-btn p-md-3 p-1'>
                         Invitation pass
                       </div>
                   </Col>
                   <Col className='col-3 col-md-2'>
                       <div className='table-color-btn p-3'>
                           Rare
                       </div>
                   </Col>
                   <Col className='col-3 col-md-2'>
                       <div className='table-color-btn p-3'>
                           Mythical
                       </div>
                   </Col>
                   <Col className='col-3 col-md-2'>
                       <div className='table-color-btn p-3'>
                       Legendary
                       </div>
                   </Col>
               </Row>

               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon1} alt="" />
                           <p className='box-text px-2 ps-5'>
                             Access to exclusive, NFT-gated Discord
                            (Models, top crypto traders, celebrities, and more)
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           Yes
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon2} alt="" />
                           <p className='box-text px-2 ps-5'>
                           NFT clubbing welcome reward (in $NKG)*
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           No
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           80,000
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           160,000
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           400,000
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon3} alt="" />
                           <p className='box-text px-2 ps-5'>
                            NFT clubbing reward multiplier once the metaverse launches
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           No
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           1x
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           2x
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           4x
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon4} alt="" />
                           <p className='box-text px-2 ps-5'>
                           Access to private in-person parties hosted by our Night King Club team alongside models 
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           Selected
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       Selected
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           All
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           All
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon5} alt="" />
                           <p className='box-text px-2 ps-5'>
                           Access to Night King’s invite-only parties alongside celebrities and models
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                          <small> Passes printed by OG leagendary NFT</small>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           No
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           No
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon6} alt="" />
                           <p className='box-text px-2 ps-5'>
                           Discounts at partnering night club venues  
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           VIP
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       VIP
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       VIP
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       VVIP
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon7} alt="" />
                           <p className='box-text px-2 ps-5'>
                             NFT clubbing bonus- Invitation pass minting (OG only)
                         </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           No
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           1 every 30 days
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           1 every 15 days
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                       1 every 15 days
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon8} alt="" />
                           <p className='box-text px-2 ps-5'>
                           Opportunity to win paid 5-star hotel visits to attend our events
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           Low 
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Medium
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           High
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Highest
                       </div>
                   </Col>
               </Row>
               <Row className='m-0 p-0 g-2'>
                   <Col className='col-12 col-md-4'>
                       <div className='table-box'>
                           <img className='boxIcon img-fluid' src={icon9} alt="" />
                           <p className='box-text px-2 ps-5'>
                           Exclusive model NFT drop for holders of 2 NKG community NFTs
                           </p>
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box '>
                           No
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
                   <Col className='col-md-2 col-3'>
                       <div className='table-box'>
                           Yes
                       </div>
                   </Col>
               </Row>
               </section>
                <div className='px-md-5 mx-md-5'>
                    <p className='pt-5 px-md-5 p-3 mt-3 mx-5'>
                    *$NKG will be linearly vested over a 90-day period as long as the NFT has been clubbed on our website. Price of $NKG at TGE = $0.01 USD. OG NFTs will receive 20% more $NKG welcome clubbing rewards compared to non-OG NFTs at the same tier
                    </p>
                    <button className='long-button'>Elevate Your Life. Get Your NKG Clubber NFT NOW</button>
                </div>

            </div>
             </Container>
        </div>
    );
};

export default Utilities;