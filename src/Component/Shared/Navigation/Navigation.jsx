import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './Navigation.css'
const Navigation = () => {
    return (
        <div className='navigation'>
           <Navbar collapseOnSelect expand="lg" variant="dark" id='navbar'>
                <Container>
                <Navbar.Brand href="#home">
                    <div className='branding'>
                        <img className='logo' src={logo } alt="" />
                         <h1> NIGHT KING CLUB</h1>
                    </div>
                   
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">            
                    </Nav>

                    <Nav>
                        <Nav.Link className='mx-md-1' href="#deets">Home</Nav.Link>
                        <Nav.Link className='mx-md-1' href="#deets">TEAM VISION</Nav.Link>
                        <Nav.Link className='mx-md-1' href="#deets">FOUNDER STORY</Nav.Link>
                        <Nav.Link className='mx-md-1' href="#deets">MINIT</Nav.Link>
                        <Nav.Link className='mx-md-1' href="#deets">FIQ</Nav.Link>
                        <Nav.Link className='mx-md-1 icons' href="#deets">
                            <i class="fa-brands fa-twitter"></i></Nav.Link>
                        <Nav.Link className='mx-md-1 icons' href="#deets">
                            <i class="fa-brands fa-telegram"></i></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Navigation;