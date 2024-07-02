import React from 'react';

function BannerNoteHome({title,...prop}: any) {
    return (
        <section className="banner-not-home h-[250px] md:h-[470px] flex items-center justify-center">
            <div className="container">
                <h1 className="text-[24px] md:text-[28px] lg:text-[38px] text-[#fff] font-bold mb-[15px] text-center">{title}</h1>
                <div className="flex items-center justify-center gap-[4px] text-[#fff] text-[15px] md:text-[18px] font-normal">
                    <a href="/" className="transition-all duration-500 ease-linear hover:text-[#333]">Home</a>
                    <span>/</span>
                    <span>{title}</span>
                </div>
            </div>
        </section>
    )
}

export default BannerNoteHome;