import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';


export default function Destinations({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='destination-page container-fluid w-100 min-vh-100 m-auto'>
            <Header />
            <main className='destination-main w-100 h-auto'>
                <section className='destination-container container-xxl d-flex flex-column'>
                    <div className='row align-content-between'>
                        <div className='destination-intro col-12 col-xl-6 d-xxl-flex  flex-xxl-column justify-content-xxl-around'>
                            <h1 className='numbered-title nav-text text-uppercase text-center text-md-start container'>
                                <span aria-hidden='true' className='numbered-title opacity-25 pe-2
                    '>01</span> Pick your destination
                            </h1>

                            <article className='destination-image-container'>
                                <picture className='destination-img m-auto'>
                                    <source srcSet={data[activeTab].images.webp} type='image/webp' />
                                    <img className='img-fluid mx-auto d-block pb-3' src={data[activeTab].images.png} alt={data[activeTab].name} />
                                </picture>
                            </article>
                        </div>

                        <article className='container destination-content col-12 col-xl-6 d-flex flex-column justify-content-evenly'>
                            <ButtonContainer
                                name={'destinations'}
                                data={data}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            <div className='destination-info w-100'>
                                <h3 className='dest-title header-3 fw-normal text-center'>{data[activeTab].name}</h3>
                                <p className='destination-text body-text text-center m-auto'>
                                    {data[activeTab].description}
                                </p>
                            </div>
                            <div className='destination-details container borderTop d-xxl-flex align-items-xxl-center justify-content-xxl-around'>
                                <div className='pt-4 pt-xxl-0'>
                                    <p className='details-title subheading-2 text-center text-xxl-start'>AVG. Temperature</p>
                                    <p className='details-data text-center text-xxl-start data-text'>{data[activeTab].distance}</p>
                                </div>
                                <div>
                                    <p className='details-title subheading-2 text-center text-xxl-start'>Est. Travel Time</p>
                                    <p className='details-data text-center text-xxl-start data-text'>{data[activeTab].travel}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </section>
    );




}