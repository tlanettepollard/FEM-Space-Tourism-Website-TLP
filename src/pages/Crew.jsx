import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Crew({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='crew-page container-fluid pb-1'>
            <Header />
            <h1 className='numbered-title nav-text text-uppercase text-center text-md-start w-100 container'>
                <span aria-hidden='true' className='numbered-title opacity-25 pe-2'>02</span> Meet your crew
            </h1>
            <div className='crew-container container d-flex flex-column flex-xl-row justify-content-evenly align-items-center'>

                <article className='crew-image-container order-md-3 flex-md-shrink-0 mt-xl-3 pt-xl-5'>
                    <picture className='crew-img'>
                        <source media="(min-width: 30rem)" srcSet={data[activeTab].images.png} />
                        <img className='img-fluid mx-auto d-block borderBottom' src={data[activeTab].images.webp} alt={data[activeTab].name} />
                    </picture>
                </article>
                <article className='crew-content container d-flex flex-column justify-content-center justify-content-lg-center order-md-2 h-100'>
                    <div className='order-md-2'>
                        <ButtonContainer
                            name={'crew'}
                            data={data}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>
                    <div className='crew-details order-md-1 pb-xl-5'>
                        <header>
                            <h2 className='subheading-1 text-center text-xl-start crew-role pb-3 pt-xl-5'>{data[activeTab].role}</h2>
                            <h3 className='subheading text-center text-xl-start crew-name pb-4 pb-xl-5'>{data[activeTab].name}</h3>
                        </header>
                        <p className='crew-bio body-text text-center text-xl-start px-4 m-auto px-md-0 ms-xl-0'>{data[activeTab].bio}</p>
                    </div>
                </article>

            </div>
        </section>
    );
}