import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Crew({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='crew-page container-fluid'>
            <Header />
            <div className='grid-container grid-container--crew container'>
                <h1 className='numbered-title nav-text text-uppercase align-self-end pb-2'>
                    <span aria-hidden='true' className='nav-text opacity-25 pe-2'>02</span> Meet your crew
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
                    <div className='crew-details'>
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