import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';


export default function Destinations({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='destination-page container-fluid'>
            <Header />
            <div className='destination-container container'>
                <h1 className='numbered-title nav-text text-uppercase text-center pb-3'>
                    <span aria-hidden='true' className='nav-text opacity-25'>01</span> Pick your destination
                </h1>
                <article className='destination-image-container'>
                    <picture className='destination-img'>
                        <source media="(min-width: 992px)" srcSet={data[activeTab].images.webp} />
                        <img className='img-fluid mx-auto d-block pb-3' src={data[activeTab].images.png} alt={data[activeTab].name} />
                    </picture>
                </article>
                <article className='container destination-content'>
                    <ButtonContainer
                        name={'destinations'}
                        data={data}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    <div className='destination-info'>
                        <h3 className='dest-title header-3 fw-normal text-center'>{data[activeTab].name}</h3>
                        <p className='destination-text body-text'>
                            {data[activeTab].description}
                        </p>
                    </div>
                    <div className='destination-details container  borderTop d-flex flex-column flex-md-row justify-content-md-evenly py-5'>
                        <div>
                            <p className='details-title subheading-2 text-center'>AVG. Temperature</p>
                            <p className='details-data text-center data-text'>{data[activeTab].distance}</p>
                        </div>
                        <div>
                            <p className='details-title subheading-2 text-center'>Est. Travel Time</p>
                            <p className='details-data text-center data-text'>{data[activeTab].travel}</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );




}