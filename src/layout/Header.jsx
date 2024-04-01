import React from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (

        <>
            <header className='page-header container-fluid'>
                <div className="container-fluid">
                    <nav className='bg-body-transparent mb-3 navbar-expand-md d-flex justify-content-between align-items-center py-2 pt-md-4'>
                        <a href="#" className="navbar-brand">
                            <img src="/assets/shared/logo.svg" alt="company logo" />
                        </a>
                        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' aria-label='Toggle navigation'>
                            <img src="/assets/shared/icon-hamburger.svg" alt="Menu open" />
                        </button>
                        <div className='offcanvas offcanvas-end w-75 bg-dark' tabIndex='2' id='offcanvasNavbar' aria-labelledby="offcanvasNavbarLabel">
                            <div className='offcanvas-header'>
                                <button type='button' className=" btn-close btn-close-white" data-bs-dismiss='offcanvas' aria-label='Close'>
                                </button>
                            </div>
                            <div className='offcanvas-body container'>
                                <ul className="navbar-nav justify-content-end flex-grow-1 ps-4 pe-5 gap-4 ">
                                    <NavLink to='/home' className='nav-text text-uppercase d-inline-flex pe-1 justify-content-start align-items-start gap-5 gap-lg-2 text-decoration-none'>
                                        <span className='d-md-none d-lg-block fw-bold'>00</span>
                                        <span>Home</span>
                                    </NavLink>
                                    <NavLink to='/destinations' className='nav-text text-uppercase d-inline-flex pe-1 justify-content-start align-items-start gap-5 gap-lg-2 text-decoration-none'>
                                        <span className='d-md-none d-lg-block fw-bold'>01</span>
                                        <span>Destinations</span>
                                    </NavLink>
                                    <NavLink to='/crew' className='nav-text text-uppercase d-inline-flex pe-1 justify-content-start align-items-start gap-5 gap-lg-2 text-decoration-none'>
                                        <span className='d-md-none d-lg-block fw-bold'>02</span>
                                        <span>Crew</span>
                                    </NavLink>
                                    <NavLink to='/technology' className='nav-text text-uppercase d-inline-flex pe-1 justify-content-start align-items-start gap-5 gap-lg-2 text-decoration-none'>
                                        <span className='d-md-none d-lg-block fw-bold'>03</span>
                                        <span>Technology</span>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
            </header >
        </>

    );
}