import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import meetImg from '../../assets/meetClub.png'
import './MeetWithClub.css'
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import demovideo from '../../assets/demo.mp4';
import videoTham from '../../assets/secondVideoTham.png'

const MeetWithClub = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'auto',
        bgcolor: 'transfarent',
        boxShadow: 24,
        p: 4,
      };
    return (
        <div>
             <Container>
              <div className='king-Nightclub-wraper p-2 p-md-5 meetClub'>
              <Row className='reverse-section'>
                    <Col className='col-12 col-md-5 p-5 pt-md-2 king-logo pb-0'>
                        <img className='img-fluid meetimg' src={meetImg} alt="" />
                    </Col>
                    <Col className='col-12 col-md-7 ps-md-3 p-4 p-md-1 pe-md-3 pb-0'>
                        <div className='kingClub-text text-start '>
                            <h2 className='subHeading'>
                            Meet <span className='text-yellow'>Night King Club’s</span> Acclaimed Founder
                            </h2>
                            <div className='pb-2'>
                             <img className='img-fluid meetimg-mobile' src={meetImg} alt="" />  
                            </div>
                            <p className='pt-2'>
                            <p>Night King Club was founded by our visionary leader, Night King. After starting with just $500, Night King built his fortune through real estate and crypto investing. He then created an empire of top nightclubs and international modeling agencies.  </p><br />
                            <p>Known as the “Godfather” in high-tier social circles, he hosted some of the most sought-after parties in Hollywood, New York, London, Seoul, Tokyo, and more. His life of adventure, top business connections, and stunning models is the envy of men worldwide. </p><br />
                            <p>Now, Night King and his dream team are poised to deliver <br /> <span className='text-yellow'>countless exclusive member benefits</span></p>
                            </p>
                        </div>
                    </Col>
                   
                </Row>
              </div>
              <Container>
                <div className='video-wraper'>
                    <div className='modal-video'>
                    <img className='img-fluid' src={videoTham} alt="" />
                    <button onClick={()=>handleOpen()} className='play-thevideo-btn'><i class="fa-solid fa-play play-icon"></i></button>
                    </div>
                </div>
                              <Modal    
                              className="modal-video"  
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                <Box sx={style}>
                                <video
                                style={{width:'100%'}}
                                    autoPlay
                                    controls
                                >
                                    <source src={demovideo} type="video/mp4"/>
                                    </video>
                                </Box>
                                </Fade>
                            </Modal>
             {/* </div> */}
             <div className='primary-text px-md-5'>
                 <h2 className='subHeading mx-md-5 py-4 mt-5 pt-5'>
                 NKG metaverse - Making Waves in the Over <span className="text-yellow">$100B Nightclub</span> Industry
                 </h2>
                 <p className='px-md-5 mx-md-5 pb-4'>
                     NKG Metaverse, a dynamic Web 3.0 nightclub metaverse, is poised to disrupt the $100B+ nightclub industry. No other in-person or Web 3.0 community attracts as many beautiful models and brilliant minds. 
                 </p>
                 <p className='px-md-5 mx-md-5 pb-4'>
                 In NKG metaverse, you will surround yourself with gorgeous models and lifelong friends while enjoying intoxicated evenings at the top nightclub metaverse.
                 </p>
                 <p className='px-md-5 mx-md-5'>
                   The NKG metaverse governance token $NKG can be used to purchase valuable in-metaverse NFTs or be used at our in-person events for special services 😉 
                 </p>
             </div>
                </Container>
           </Container>
        </div>
    );
};

export default MeetWithClub;