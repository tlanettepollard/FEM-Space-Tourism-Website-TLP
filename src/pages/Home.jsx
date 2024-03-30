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
                        <picture>

                            <img className='img-fluid explore-btn' src="/public/assets/home/explorebtn-mobile.png" />
                        </picture>
                    </div>
                </section>
            </main>
        </div>
    );
}