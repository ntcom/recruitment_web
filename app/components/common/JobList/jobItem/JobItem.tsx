import React from 'react'

function JobItem() {
  return (
    <div className="tab-content-item flex items-center gap-[10px] lg:gap-[30px] mb-[30px] p-[15px] lg:p-[30px] border-[1px] border-solid border-[#c1c1c1]">
      <div className="w-[49px] h-[51px] shrink-0">
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <a href="" className="block text-[13px] lg:text-[22px] font-semibold transition-all duration-500 ease-linear hover:tracking-[1px]">UI/UX Designer</a>
        <a href="" className="block recent-job-item-company mt-[5px] lg:mt-[8px]">Winbrans.com</a>
        <div className="flex items-start gap-[6px] mt-[10px]">
          <span>i</span>
          <p className="text-[13px] lg:text-[14px] text-[#808291]">$20k - $25k</p>
        </div>
        <div className="flex items-start gap-[6px] mt-[10px]">
          <span>i</span>
          <p className="text-[13px] lg:text-[14px] text-[#808291]">Location 210-27 Quadra, Market Street, Victoria Canada</p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] shrink-0">
        <button className="border-button text-[12px] w-[73px] md:w-[149px] lg:w-[93px] lg:text-[14px] py-[9px]"><p>Apply</p></button>
        <span className="flex justify-center recent-job-item-time text-[12px] text-[#fff] w-[73px] md:w-[149px] lg:w-[93px] lg:text-[14px] py-[9px]">Full Time</span>
      </div>
    </div>
  )
}

export default JobItem