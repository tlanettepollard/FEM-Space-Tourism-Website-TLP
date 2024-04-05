import React from 'react';
import Header from '../layout/Header';


export default function Home() {



    return (
        <div className='home-page'>
            <Header />
            <main className='home-main'>
                <section className='grid-container grid-container--home container-fluid'>
                    <article className='home-content align-self-center align-content-xl-between mx-auto'>
                        <h1 className='header-5 text-uppercase text-center text-xl-start home-subheading'>So, you want to travel to</h1>
                        <h2 className='header-1 text-center text-xl-start home-title my-4'>Space</h2>
                        <p className='home-text body-text text-center text-xl-start'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </article>
                    <div className='home-btn-container d-flex justify-content-center align-self-start align-self-xl-center'>
                        <a className='btn btn-lg text-uppercase text-dark bg-white text-center text-decoration-none d-flex position-relative' href="#">
                            <span className='w-100'>Explore</span>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}