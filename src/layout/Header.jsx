import React from 'react';
import { Nav, Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            {[false].map((expand) => (
                <header className='bg-transparent'>
                    <Navbar key={expand} expand={expand} className='bg-transparent mb-3 navbar-expand-md'>
                        <Container fluid>
                            <Navbar.Brand href='#'>
                                <img src="/public/assets/shared/logo.svg" alt="company logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} className='bg-dark' aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement='end'>
                                <Offcanvas.Header closeButton />
                                <Offcanvas.Body>
                                    <Nav className='justify-content-end flex-grow-1 pe-3'>
                                        <NavLink to='/home' id='home'>
                                            <span>01</span>
                                            <span>Home</span>
                                        </NavLink>
                                        <NavLink to='/destinations' id='destinations'>
                                            <span>02</span>
                                            <span>Destinations</span>
                                        </NavLink>
                                        <NavLink to='/crew' id='crew'>
                                            <span>03</span>
                                            <span>Crew</span>
                                        </NavLink>
                                        <NavLink to='/technology' id='technology'>
                                            <span>04</span>
                                            <span>Technology</span>
                                        </NavLink>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </header>
            ))}
        </>
    );
}