import React from 'react'
import BannerView from '@/app/components/common/banner-view';
import JobList from '@/app/components/common/JobList';

function ListJob() {
  const JobAll = [
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
  return (
    <main>
      <BannerView title="Job List" />
      <div className="container">
        <div className='pt-[50px] pb-[100px]'>
          <JobList jobs={JobAll} />
        </div>
      </div>
    </main>
  )
}

export default ListJob