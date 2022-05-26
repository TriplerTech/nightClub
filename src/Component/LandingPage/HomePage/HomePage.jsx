import React from 'react';
import './HomePage.css'
import banner from '../../assets/homeBaner.png'
import { Container } from 'react-bootstrap';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import demovideo from '../../assets/demo.mp4';
import videoTham from '../../assets/videoTham.png'

const HomePage = () => {

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
           <img className='img-fluid' src={banner} alt="" /> 
           <Container>
            <div className='video-intro'>
                <h1 className='mainHeading'>
                    <span className='text-yellow'>It’s Time</span> to Transform Your <span className='text-yellow'>Dream Life</span> into <span>Reality</span></h1>
            </div>
            {/* <div className='banner-pair-btn'> */}
                <div className='video-wraper effect-perple effect-blue'>
                    <div className='modal-video'>
                    <img className='img-fluid' src={videoTham} alt="" />
                    <button onClick={()=>handleOpen()} className='play-thevideo-btn'><i class="fa-solid fa-play play-icon"></i></button>
                    </div>
                </div>
                
                 
                              <Modal      
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
             <div className='primary-text px-5'>
                 <p className='px-md-5 '>
                    Are you ready to have unforgettable experiences alongside the stunning models, crypto whales, and elite businessmen? It’s time to start living life as if you’re in a movie.
                 </p>
                 <button className='long-button'>Elevate Your Life. Get Your NKG Clubber NFT NOW</button>
                 </div>
           </Container>
        </div>
    );
};

export default HomePage;