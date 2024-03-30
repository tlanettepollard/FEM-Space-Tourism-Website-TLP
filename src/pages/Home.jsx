import React from 'react';
import Header from '../layout/Header';


export default function Home() {



    return (
        <div className='home-page'>
            <Header />
            <main className='home-main'>
                <section className='container'>
                    <article>
                        <span className='header-5 text-uppercase'>So, you want to travel to</span>
                        <h1 className='header-1'>Space</h1>
                        <p className='body-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </article>
                    <div className='btn-container'>
                        <img className='img-fluid explore-btn d-md-none' src='/assets/home/explorebtn-mobile.png' alt='explore button' />
                        <img className='d-none d-md-block d-lg-none' src="/assets/home/explorebtn-tablet.png" alt="explore button" />
                        <img className='d-none d-md-none d-lg-block' src="/assets/home/explorebtn-desktop.png" alt="explore button" />
                    </div>
                </section>
            </main>
        </div>
    );
}