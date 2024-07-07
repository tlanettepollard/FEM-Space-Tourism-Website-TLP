import React, { useState } from 'react';
import Header from '../layout/Header';
import { ButtonContainer } from '../components/ButtonContainer';

export default function Crew({ data }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='crew-page container-fluid'>
            <Header />
            <section className="crew-container w-100 container-xxl">
                <h1 className='numbered-title nav-text text-uppercase text-center text-md-start w-100'>
                    <span aria-hidden='true' className='numbered-title opacity-25'>02</span> Meet your crew
                </h1>
                <div className='crew-content'>
                    <article className='crew-image-container w-100 borderBottom'>
                        <picture className='crew-img'>
                            <source srcSet={data[activeTab].images.webp} type='image/webp' />
                            <img className='img-fluid mx-auto d-block' src={data[activeTab].images.png} alt={data[activeTab].name} />
                        </picture>
                    </article>
                    <article className='crew-information container h-100'>
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
                                <h2 className='subheading-1 text-center text-xl-start crew-role'>{data[activeTab].role}</h2>
                                <h3 className='subheading text-center text-xl-start crew-name'>{data[activeTab].name}</h3>
                            </header>
                            <p className='crew-bio body-text text-center text-xl-start mx-auto'>{data[activeTab].bio}</p>
                        </div>
                    </article>

                </div>
            </section>
        </section>
    );
}