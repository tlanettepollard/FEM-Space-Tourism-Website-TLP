import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Technology({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="technology-page">
            <Header />
            <div className='d-flex flex-column justify-content-start align-items-center container'>
                <h1 className='tech-page-title nav-text text-uppercase'>
                    <span className='page-title-number nav-text opacity-25'>03</span> Space launch 101
                </h1>
                <article className='tech-image-container'>
                    <picture>
                        <source media="(max-width: 992px"
                            srcSet={data[activeTab].images.landscape} />
                        <img className='tech-img' src={data[activeTab].images.portrait} alt={`A ${data[activeTab].name}`} />
                    </picture>
                </article>
                <article className='tech-content container'>
                    <ButtonContainer
                        name={'technology'}
                        data={data}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </article>

            </div>

        </section>
    );
}