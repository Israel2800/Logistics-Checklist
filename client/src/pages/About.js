import React from 'react';

export default function About({ handlePangeChange }) {
    return (
        <secttion id="about">
            <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-mainImage bg-cover bg-fixed bg-center bg-no-repeat bg-opacity-75 hover:opacity-100">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
                <p className="lg:inline-block">
                    Staging Task and more!
                </p>
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
                You will learn the different steps to successfully complete the Staging Task!
            </p>
            <p className="mb-8 leading-relaxed text-justify">
                
            </p>
             <p className="mb-8 leading-relaxed text-justify">
                
            </p>
             <p className="mb-8 leading-relaxed text-justify">
                
            </p>
            </div>
        </secttion>
    );
}