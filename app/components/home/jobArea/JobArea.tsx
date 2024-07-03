"use client"
import React from 'react'
import JobList from '../../common/JobList/JobList'
import Button from '../../common/button'

function JobArea() {
  const [jobList, setJobList] = React.useState(0);
  
  const JobAll = [
    {
      title: 'All',
      listJobs: [
        {
          img: '/assets/images/job-1.png',
          name: 'UI/UX Designer',
          linkDetail: 'detail/1',
          company: 'Winbrans.com',
          linkCompany: 'copany/1',
          salary: '$20k - $25k',
          location: 'Location 210-27 Quadra, Market Street, Victoria Canada',
          time: 'Full Time',
          linkApply: '#'
        }
      ]
    },
    {
      title: 'New',
      listJobs: [
        {
          img: '/assets/images/job-1.png',
          name: 'UI/UX Designer',
          linkDetail: 'detail/1',
          company: 'Winbrans.com',
          linkCompany: 'copany/1',
          salary: '$20k - $25k',
          location: 'Location 210-27 Quadra, Market Street, Victoria Canada',
          time: 'Full Time',
          linkApply: '#'
        },
        {
          img: '/assets/images/job-1.png',
          name: 'UI/UX Designer',
          linkDetail: 'detail/1',
          company: 'Winbrans.com',
          linkCompany: 'copany/1',
          salary: '$20k - $25k',
          location: 'Location 210-27 Quadra, Market Street, Victoria Canada',
          time: 'Part Time',
          linkApply: '#'
        }
      ]
    }
  ]
  const handleTabClick = (index: number) => {
    setJobList(index);
  };
  const currentJobs = JobAll[jobList].listJobs;
  return (
    <section className="recent-job py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="container">
        <h2 className="title-section">Recent Jobs</h2>
        <div className="tab-recent-title mt-[30px] lg:mt-[40px] flex justify-center">
          <div className="recent-title-wrap bg-[#fff] inline-flex items-center flex-wrap gap-[16px] p-[15px] lg:p-[16px]">
            {JobAll.map((JobItem, index) => {
              return (
                <Button key={index} value={JobItem.title} hoverclass="border-button" active={index === jobList} color="#333" link="#" classProp="px-[20px] lg:px-[25px] py-[8px] lg:py-[10px]" onClick={() => handleTabClick(index)}/>
              )
            })}
          </div>
        </div>
        <JobList jobs={currentJobs}/>
      </div>
    </section>
  )
}

export default JobArea