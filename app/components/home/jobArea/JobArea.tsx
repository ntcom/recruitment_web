import React from 'react'
import JobList from '../../common/JobList/JobList'

function JobArea() {
  return (
    <section className="recent-job py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="container">
        <h2 className="title-section">Recent Jobs</h2>
        <div className="tab-recent-title mt-[30px] lg:mt-[40px] flex justify-center">
          <div className="recent-title-wrap bg-[#fff] inline-flex items-center flex-wrap gap-[16px] p-[15px] lg:p-[16px]">
            <button className="border-button text-[14px] lg:text-[16px] px-[20px] lg:px-[25px] py-[8px] lg:py-[10px]"><p>All</p></button>
          </div>
        </div>
        <JobList />
      </div>
    </section>
  )
}

export default JobArea