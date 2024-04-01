import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Crew({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='crew-page'>
            <Header />
            <div className='d-flex flex-column justify-content-start align-items-center container'>
                <h1 className='crew-page-title nav-text text-uppercase'>
                    <span className='page-title-number nav-text opacity-25'>02</span> Meet your crew
                </h1>
                <article className='crew-image-container'>
                    <picture className='crew-img'>
                        <source media="(min-width: 30rem)" srcSet={data[activeTab].images.png} />
                        <img className='img-fluid mx-auto d-block borderBottom' src={data[activeTab].images.webp} alt={data[activeTab].name} />
                    </picture>
                </article>
                <article className='crew-content container'>
                    <ButtonContainer
                        name={'crew'}
                        data={data}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </article>
            </div>
        </section>
    );
}