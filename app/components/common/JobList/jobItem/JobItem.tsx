import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../../button'

function JobItem({job} : any) {
  return (
    <div className="tab-content-item flex items-center gap-[10px] lg:gap-[30px] mb-[30px] p-[15px] lg:p-[30px] border-[1px] border-solid border-[#c1c1c1]">
      <div className="w-[49px] h-[51px] shrink-0">
        <img src={`${job.img}`} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <a href={`${job.linkDetail}`} className="block text-[13px] lg:text-[22px] font-semibold transition-all duration-500 ease-linear hover:tracking-[1px]">{job.name}</a>
        <a href={`${job.linkCompany}`} className="block recent-job-item-company mt-[5px] lg:mt-[8px]">{job.company}</a>
        <div className="flex items-start gap-[6px] mt-[10px]">
          <FontAwesomeIcon icon={faSackDollar} className='text-[13px] text-[#4cce5b] relative top-[3px]'/>
          <p className="text-[13px] lg:text-[14px] text-[#808291]">{job.salary}</p>
        </div>
        <div className="flex items-start gap-[6px] mt-[10px]">
          <FontAwesomeIcon icon={faLocationDot} className='text-[13px] text-[#4cce5b] relative top-[3px]'/>
          <p className="text-[13px] lg:text-[14px] text-[#808291]">{job.location}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] shrink-0">
        <Button hoverclass="border-button" value="Apply" color="#333" link={job.linkCompany} classProp="w-[73px] md:w-[149px] lg:w-[93px] py-[9px]" />
        <span className="flex justify-center recent-job-item-time text-[12px] text-[#fff] w-[73px] md:w-[149px] lg:w-[93px] lg:text-[14px] py-[9px]">{job.time}</span>
      </div>
    </div>
  )
}

export default JobItem