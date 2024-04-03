import React from 'react';
import Header from '../layout/Header';


export default function Home() {



    return (
        <div className='home-page'>
            <Header />
            <main className='home-main mb-5 mb-lg-5'>
                <section className='container d-flex flex-column justify-content-center align-items-center'>
                    <article className='home-content d-flex flex-column justify-content-center'>
                        <p className='header-5 text-uppercase text-center home-subheading mt-md-5 pt-md-5'>So, you want to travel to</p>
                        <h1 className='header-1 text-center home-title my-4'>Space</h1>
                        <p className='home-text body-text text-center px-5'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </article>
                    <div className='home-btn-container mt-5 mb-lg-5 pt-4 pt-md-5'>
                        <a className='btn btn-lg text-uppercase text-dark bg-white text-center text-decoration-none d-flex position-relative' href="#">
                            <span className='w-100'>Explore</span>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}