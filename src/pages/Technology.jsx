import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Technology({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="technology-page container-fluid">
            <Header />
            <h1 className='numbered-title nav-text text-uppercase text-center text-md-start w-100 container'>
                <span aria-hidden='true' className='numbered-text opacity-25 pe-2 '>03</span> Space launch 101
            </h1>
            <div className='technology-container container d-flex flex-column flex-xl-row justify-content-start align-items-center container'>
                <article className='tech-image-container'>
                    <picture>
                        <source media="(max-width: 992px"
                            srcSet={data[activeTab].images.landscape} />
                        <img className='tech-img' src={data[activeTab].images.portrait} alt={`A ${data[activeTab].name}`} />
                    </picture>
                </article>
                <article className='tech-content container d-flex flex-column flex-xl-row'>
                    <ButtonContainer
                        name={'technology'}
                        data={data}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <div className="tech-content-text">
                        <h2 className='subheading-2 text-center'>The Terminology...</h2>
                        <h3 className='subheading text-center tech-name pb-2'>{data[activeTab].name}</h3>
                        <p className='body-text text-center tech-info'>{data[activeTab].description}</p>
                    </div>
                </article>

            </div>

        </section>
    );
}