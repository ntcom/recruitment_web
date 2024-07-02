import React from "react";

function Statis() {
    const statisComponentLists = [
        {
            img: 'img',
            number: '14 k+',
            text: 'Job Available'
        },
        {
            img: 'img',
            number: '18 k+',
            text: 'CV Submitted'
        },
        {
            img: 'img',
            number: '9 k+',
            text: 'Companies'
        },
        {
            img: 'img',
            number: '35 k+',
            text: 'Appointed to Job'
        },
    ]
    return (
        <section className="statis py-[50px] md:py-[70px] lg:py-[100px]">
            <div className="container">
                <div className="statis-wrap flex h-auto flex-wrap justify-center mx-[-12px] gap-y-[30px]">
                    {statisComponentLists.map((item, index) => {
                        return (
                            <div className="statis-item px-[12px] w-1/2 md:w-1/4" key={index}>
                                <div><img src="" alt="" className="w-[35px] md:w-[45px] h-[35px] md:h-[45px] object-cover mx-auto" /></div>
                                <p className="text-[35px] lg:text-[48px] font-bold text-[#fff] text-center mt-[12px]">{item.number}</p>
                                <p className="text-[#fff] text-[14px] md:text-[16px] text-center">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Statis;