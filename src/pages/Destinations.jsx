import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';


export default function Destinations({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='destination-page '>
            <Header />
            <div className='d-flex flex-column justify-content-start align-items-center container'>
                <h1 className='dest-page-title nav-text text-uppercase'>
                    <span className='page-title-number nav-text opacity-25'>01</span> Pick your destination
                </h1>
                <article className='dest-image-container pb-4'>
                    <picture className='destinations-img'>
                        <source media="(min-width: 30rem)" srcSet={data[activeTab].images.png} />
                        <img className='img-fluid mx-auto d-block' src={data[activeTab].images.webp} alt={data[activeTab].name} />
                    </picture>
                </article>
                <article className='container dest-content'>
                    <ButtonContainer
                        name={'destinations'}
                        data={data}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <div className='mb-5'>
                        <h3 className='dest-title header-3 fw-normal text-center'>{data[activeTab].name}</h3>
                        <p className='dest-text body-text text-center'>
                            {data[activeTab].description}
                        </p>
                    </div>
                    <div className='dest-details-container mb-5 borderTop pt-4'>
                        <div className='dest-details py-2'>
                            <p className='dest-details-title subheading-2 text-center'>AVG. Temperature</p>
                            <p className='dest-details-data text-center data-text'>{data[activeTab].distance}</p>
                        </div>
                        <div className='dest-details py-2'>
                            <p className='dest-details-title subheading-2 text-center'>Est. Travel Time</p>
                            <p className='dest-details-data text-center data-text'>{data[activeTab].travel}</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );




}