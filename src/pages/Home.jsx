import React from 'react';
import Header from '../layout/Header';


export default function Home() {



    return (
        <div className='home-page'>
            <Header />
            <main className='home-main container-fluid mt-4'>
                <section className='home-container container-xxl'>
                    <div className="row justify-content-start min-vh-100">
                        <article className='home-content mx-auto col-12 col-xl-6 d-flex flex-column justify-content-center'>
                            <h1 className='header-5 text-uppercase text-center text-xl-start home-subheading'>So, you want to travel to</h1>
                            <span className='d-block header-1 text-center text-xl-start home-title'>Space</span>
                            <p className='home-text body-text text-center text-xl-start mx-auto ms-xl-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </article>
                        <div className='home-btn-container d-flex justify-content-center align-self-start align-self-xl-center align-self-xxl-center col-12 col-xl-4'>
                            <a className='btn btn-lg text-uppercase text-dark bg-white text-center text-decoration-none d-flex position-relative' href="#">
                                <span className='w-100'>Explore</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}