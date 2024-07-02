import React from 'react'

function AppArea() {
  return (
    <section className="app-download pt-[40px] pb-[100px]">
      <div className="max-w-[720px] px-[12px] mx-auto lg:container flex flex-col lg:flex-row items-start gap-[24px]">
        <div className="w-[100%] lg:w-[calc((100%-24px)/2)] relative">
          <img src="/assets/images/app-1.png" alt="" className="app-download-img-1 relative lg:absolute top-0 right-0 lg:right-[25px] z-[1] mx-auto lg:mx-0" />
          <img src="/assets/images/app-2.png" alt="" className="app-download-img-2 relative lg:absolute top-0 lg:top-[8px] right-0 lg:right-[130px] z-0 mx-auto lg:mx-0" />
        </div>
        <div className="w-[100%] lg:w-[calc((100%-24px)/2)] lg:py-[150px] mt-[30px] lg:mt-0">
          <h3 className="title-section lg:!text-[#fff] mb-[20px]">Download The Glabe Mobile App</h3>
          <p className=" lg:text-[#fff] text-[14px] md:text-[16px] mb-[20px] leading-[1.8]">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          <div className="flex items-center gap-[8px] md:gap-[20px]">
            <a href="" className="w-[140px] md:w-[165px] h-[51px] md:h-[60px] flex items-center justify-center gap-[6px] md:gap-[10px] rounded-[8px] bg-[#040707]">
              <img src="" alt="" className="w-[25px] md:w-[40px] h-[25px] md:h-[40px] object-cover" />
              <div>
                <p className="text-[10px] text-[#fff] font-normal mb-[-3px]">Download on the</p>
                <span className="text-[14px] md:text-[16px] text-[#fff] font-normal">App Store</span>
              </div>
            </a>
            <a href="" className="w-[140px] md:w-[165px] h-[51px] md:h-[60px] flex items-center justify-center gap-[6px] md:gap-[10px] rounded-[8px] bg-[#040707]">
              <img src="" alt="" className="w-[25px] md:w-[40px] h-[25px] md:h-[40px] object-cover" />
              <div>
                <p className="text-[10px] text-[#fff] font-normal mb-[-3px]">ANDROID APP ON</p>
                <span className="text-[14px] md:text-[16px] text-[#fff] font-normal">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppArea