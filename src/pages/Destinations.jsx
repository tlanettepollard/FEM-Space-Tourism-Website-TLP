import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';


export default function Destinations({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='destination-page container-fluid'>
            <Header />
            <div className='grid-container grid-container--destination container'>
                <h1 className='numbered-title nav-text text-uppercase pb-3'>
                    <span aria-hidden='true' className='nav-text opacity-25'>01</span> Pick your destination
                </h1>
                <article className='dest-image-container align-self-center  align-self-xl-end'>
                    <picture className='destinations-img'>
                        <source media="(min-width: 992px)" srcSet={data[activeTab].images.webp} />
                        <img className='img-fluid mx-auto d-block' src={data[activeTab].images.png} alt={data[activeTab].name} />
                    </picture>
                </article>
                <article className='container dest-content'>
                    <ButtonContainer
                        name={'destinations'}
                        data={data}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <div className='dest-info'>
                        <h3 className='dest-title header-3 fw-normal text-center'>{data[activeTab].name}</h3>
                        <p className='dest-text body-text'>
                            {data[activeTab].description}
                        </p>
                    </div>
                    <div className='dest-details container  borderTop d-flex flex-column'>
                        <div>
                            <p className='dest-details-title subheading-2 text-center'>AVG. Temperature</p>
                            <p className='dest-details-data text-center data-text'>{data[activeTab].distance}</p>
                        </div>
                        <div>
                            <p className='dest-details-title subheading-2 text-center'>Est. Travel Time</p>
                            <p className='dest-details-data text-center data-text'>{data[activeTab].travel}</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );




}