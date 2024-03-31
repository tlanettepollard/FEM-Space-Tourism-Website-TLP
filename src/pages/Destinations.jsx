import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';


export default function Destinations({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='destination-page d-flex flex-column align-items-center'>
            <Header />
            <h1 className='page-title nav-text text-uppercase'>
                <span className='page-title-number nav-text opacity-25'>01</span> Pick your destination
            </h1>
            <article className='image-container'>
                <picture className='destinations-img'>
                    <source media="(min-width: 30rem)" srcSet={data[activeTab].images.png} />
                    <img className='img-fluid mx-auto' src={data[activeTab].images.webp} alt={data[activeTab].name} />
                </picture>
            </article>
            <article className='container'>
                <ButtonContainer
                    name={'destinations'}
                    data={data}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}

                />
            </article>
        </section>
    );




}