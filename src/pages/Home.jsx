import React from 'react';


export default function Home() {
    return (
        <section className='h-screen w-screen'>
            <div className="App mx-auto h-full bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover bg-no-repeat">
                <header className="App-header">
                    <h1 className='text-3xl text-ebony font-bold underline font-serif uppercase'>Hello Trista</h1>
                </header>
            </div>
        </section>
    );
}