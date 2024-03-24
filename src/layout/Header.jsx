import React from 'react';
import { Nav, Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

export default function Header() {


    return (
        <header className='container-fluid'>
            <Navbar collapseOnSelect expand='md' className='navbar-dark container-fluid'>
                <Container>
                    <NavbarBrand>
                        <img src="/public/assets/shared/logo.svg" alt="company logo" />
                    </NavbarBrand>
                    <NavbarToggle aria-controls='navbarCollapse' id='navbarBtn' className='custom-toggler' />
                    <NavbarCollapse>

                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}