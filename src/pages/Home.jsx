import React from 'react';
import Header from '../layout/Header';


export default function Home() {
    return (
        <div className='home-page'>
            <Header />
            <main className='home-main'>
                <section>
                    <div>
                        <h1>Hi Trista</h1>
                    </div>
                </section>
            </main>
        </div>
    );
}