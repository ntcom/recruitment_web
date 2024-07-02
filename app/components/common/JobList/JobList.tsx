import React from 'react'
import JobItem from './jobItem/JobItem'

function JobList() {
  return (
    <div>
      <div className="tab-content mt-[50px] mx-[-12px] flex flex-wrap justify-center">
        <div className="tab-content-item-wrap px-[12px] w-[100%] lg:w-[calc((100%-24px)/2)]">
          <JobItem />
        </div>
      </div>
      <div className="recent-job-pagination flex items-center gap-[16px] justify-center">
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]">prev</a>
        <span className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]">1</span>
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]">2</a>
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]">3</a>
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]">next</a>
      </div>
    </div>
  )
}

export default JobList