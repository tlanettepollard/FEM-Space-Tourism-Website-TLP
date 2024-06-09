import React from 'react';
import Header from '../layout/Header';


export default function Home() {



    return (
        <div className='home-page w-100 min-vh-100 m-auto'>
            <Header />
            <main className='home-main container-fluid w-100 h-auto'>
                <section className='home-container container-xxl d-flex flex-column'>
                    <div className="row align-content-around">
                        <article className='home-content col-12 col-xl-6 w-100 h-100 mx-auto'>
                            <h1 className='header-5 text-uppercase text-center text-xl-start home-subheading'>So, you want to travel to</h1>
                            <span className='d-block header-1 text-center text-xl-start home-title'>Space</span>
                            <p className='home-text body-text text-center text-xl-start h-auto mx-auto mx-xl-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                        </article>
                        <div className='home-btn-container col-12 col-xl-4 d-flex justify-content-center align-self-xl-end'>
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