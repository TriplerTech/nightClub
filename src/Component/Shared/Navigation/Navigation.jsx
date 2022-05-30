import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navigation.css'
const Navigation = () => {
    return (
        <div id='top' className='navigation'>
           <Navbar collapseOnSelect expand="lg" variant="dark" id='navbar'>
                <Container>
                <Navbar.Brand href="/">
                    <div className='branding'>
                        <img className='logo' src={logo } alt="" />
                         <h1> NIGHT KING CLUB</h1>
                    </div>
                   
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">            
                    </Nav>

                    <Nav className='manu-nav'>
                            <NavLink className='mx-md-1 items ' to='/'><span> Home </span></NavLink>
                            <a className='mx-md-1 items' href='#team'><span>TEAM VISION </span></a>
                            <NavLink className='mx-md-1 items' to=''><span> FOUNDER STORY </span></NavLink>
                            <NavLink className='mx-md-1 items' to='/mint'><span> MINIT </span></NavLink>
                            <a className='mx-md-1 items' href ='#faq'><span>FAQ </span></a>
                            <div className='social-icons'>
                            <NavLink className='mx-md-1  icons' to=''><span> <i class="fa-brands fa-twitter"></i> </span></NavLink>
                            <NavLink className='mx-md-1  icons' to=''><span> <i class="fa-brands fa-telegram"></i> </span></NavLink>
                            </div>
                            {/* <NavLink className='mx-md-1' to=''><span> Home </span></NavLink> */}
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Navigation;