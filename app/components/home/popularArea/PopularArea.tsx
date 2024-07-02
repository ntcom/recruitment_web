import React from 'react'

function PopularArea() {
  const splitArray = (arr: any, size: any) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  const popularLists = [
    {
      img: 'img',
      text: 'Trusted & Quality Job'
    },
    {
      img: 'img',
      text: 'Top Companies'
    },
    {
      img: 'img',
      text: 'No Extra Charge'
    },
    {
      img: 'img',
      text: ' International Job'
    },

  ];
  const splitArrays = splitArray(popularLists, 2);
  return (
    <section className="popular-section py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="container flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[48px]">
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[24px] w-[100%] lg:w-[calc((100%-48px)/2)] shrink-0 relative">
          <img src="/assets/images/popular-1.jpg" alt="" className="w-[100%] md:w-[56.14%] shrink-0" />
          <div className="w-[100%] md:w-[40.12346%] h-auto flex flex-col gap-[20px] md:gap-0 justify-between">
            <img src="/assets/images/popular-2.jpg" alt="" className="w-[100%] md:h-[56.273%] object-cover" />
            <img src="/assets/images/popular-3.jpg" alt="" className="w-[100%] md:h-[39.1144%] object-cover" />
          </div>
        </div>
        <div>
          <h3 className="title-section mb-[30px] lg:mb-[40px]">Why We are Most Popular</h3>
          <p className="leading-[1.8] text-[14px] md:text-[16px] font-normal mb-[30px] md:mb-[35px] text-[#808192]">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida</p>
          <div className="popular-list">
            {splitArrays.map((subArray, index) => {
              return (
                <div className="popular-list-row grid grid-cols-1 md:grid-cols-2 md:gap-[16px]" key={index}>
                  {subArray.map((item: any, index1: any) => {
                    return (
                      <div className="popular-list-item flex items-center gap-[10px] px-[7px] py-[20px]" key={index1}>
                        <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#c0f3c6] rounded-[12px]"><img src={`${item.img}`} alt="" className="w-[26px] h-[26px] object-cover" /></div>
                        <p className="text-[14px] md:text-[15px] text-[#033333] font-semibold">{item.text}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularArea