import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Crew({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='crew-page container-fluid pb-1'>
            <Header />
            <div className='crew-container container d-flex flex-column justify-content-evenly align-items-center  pb-2 pb-md-0'>
                <h1 className='numbered-title nav-text text-uppercase text-center text-md-start w-100 pb-2 order-md-1'>
                    <span aria-hidden='true' className='numbered-title opacity-25 pe-2'>02</span> Meet your crew
                </h1>
                <article className='crew-image-container order-md-3'>
                    <picture className='crew-img pb-2 pb-md-0'>
                        <source media="(min-width: 30rem)" srcSet={data[activeTab].images.png} />
                        <img className='img-fluid mx-auto d-block borderBottom' src={data[activeTab].images.webp} alt={data[activeTab].name} />
                    </picture>
                </article>
                <article className='crew-content container d-flex flex-column justify-content-center order-md-2'>
                    <div className='order-md-2'>
                        <ButtonContainer
                            name={'crew'}
                            data={data}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>
                    <div className='crew-details order-md-1'>
                        <header>
                            <h2 className='subheading-1 text-center crew-role'>{data[activeTab].role}</h2>
                            <h3 className='subheading text-center crew-name'>{data[activeTab].name}</h3>
                        </header>
                        <p className='crew-bio body-text text-center px-4'>{data[activeTab].bio}</p>
                    </div>
                </article>

            </div>
        </section>
    );
}