import React from 'react'

function PortalArea() {
  const statisLists = [
    {
      number: '14 k+',
      text: 'Job Available'
    },
    {
      number: '18 k+',
      text: 'Submitted CV'
    },
    {
      number: '9 k+',
      text: 'Company'
    },
    {
      number: '22 k+',
      text: 'Registered Member'
    },
    {
      number: '55 k+',
      text: 'Appointed to Job'
    },
  ]
  return (
    <section className="portal-section py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="container flex items-center flex-col lg:flex-row gap-[48px]">
        <div className="flex items-start flex-col md:flex-row gap-[10px] md:gap-[24px] w-[100%] lg:w-[calc((100%-24px)/2)] shrink-0 relative">
          <img src="/assets/images/portal-1.jpg" alt="" className="w-[100%] md:w-[56.14%] shrink-0" />
          <img src="/assets/images/portal-2.jpg" alt="" className="w-[100%] md:w-[40.12346%]" />
          <span className="absolute-portal md:absolute md:right-[50%] lg:right-[12px] md:translate-x-[50%] lg:translate-x-0 md:bottom-[10%] lg:bottom-[30px] w-[100%] md:w-[324px] h-[57px] md:h-[82px] flex items-center justify-center text-[#fff] text-[18px] md:text-[28px] font-semibold mt-[10px] md:mt-0">100% Trusted</span>
        </div>
        <div className="flex-1 xl:pl-[50px]">
          <h3 className="title-section mb-[10px] md:mb-[20px] lg:mb-[35px] !text-left">Trusted & Popular Job Portal</h3>
          <p className="leading-[1.8] text-[14px] md:text-[16px] font-normal mb-[24px] md:mb-[35px]">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>
          <div className="flex items-center justify-center gap-x-[24px] gap-y-[30px] flex-wrap">
            {statisLists.map((item, index) => {
              return (
                <div className="w-[calc((100%-24px)/2)] md:w-[calc((100%-48px)/3)]" key={index}>
                  <span className="block text-[#38a745] font-semibold text-[20px] md:text-[24px] lg:text-[28px] text-center">{item.number}</span>
                  <p className="text-[13px] md:text-[14px] text-center">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortalArea