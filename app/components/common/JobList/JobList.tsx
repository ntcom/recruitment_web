import React from 'react'
import JobItem from './jobItem/JobItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function JobList({ jobs }: any) {
  return (
    <div>
      <div className="tab-content mt-[50px] mx-[-12px] flex flex-wrap justify-center">
        {jobs.map((job: any, index: number) => {
          return (
            <div className="tab-content-item-wrap px-[12px] w-[100%] lg:w-[calc((100%-24px)/2)]" key={index}>
              <JobItem job={job} />
            </div>
          )
        })}
      </div>
      <div className="recent-job-pagination flex items-center gap-[16px] justify-center">
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[13px] rounded-full flex items-center justify-center bg-[#ebebeb]">
          <FontAwesomeIcon icon={faAngleLeft} />
        </a>
        <span className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]">1</span>
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]"><p>2</p></a>
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[14px] lg:text-[16px] rounded-full flex items-center justify-center bg-[#ebebeb]"><p>3</p></a>
        <a href="" className="w-[35px] lg:w-[40px] h-[35px] lg:h-[40px] text-[13px] rounded-full flex items-center justify-center bg-[#ebebeb]">
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
    </div>
  )
}

export default JobList