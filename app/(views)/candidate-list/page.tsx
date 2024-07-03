import React from 'react'
import BannerView from '@/app/components/common/banner-view';
import CandidateItem from '@/app/components/common/CandidateItem';

function CandidateList() {
  const ProfileLists = [
    {
      img: '/assets/images/profile-1.jpg',
      name: 'profile 1',
      job: 'job 1',
      link: '/profile1'
    },
    {
      img: '/assets/images/profile-1.jpg',
      name: 'profile 2',
      job: 'job 2',
      link: '/profile2'
    },
    {
      img: '/assets/images/profile-1.jpg',
      name: 'profile 3',
      job: 'job 3',
      link: '/profile3'
    },
    {
      img: '/assets/images/profile-1.jpg',
      name: 'profile 4',
      job: 'job 4',
      link: '/profile4'
    },
    {
      img: '/assets/images/profile-1.jpg',
      name: 'profile 5',
      job: 'job 5',
      link: '/profile5'
    },
    {
      img: '/assets/images/profile-1.jpg',
      name: 'profile 6',
      job: 'job 6',
      link: '/profile6'
    },
  ]
  return (
    <main>
      <BannerView title="Candidate List" />
      <div className="container">
        <div className='py-[50px] md:py-[70px] lg:py-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[30px]'>
          {ProfileLists.map((ProfileList, index) => {
            return (
              <div key={index}>
                <CandidateItem ProfileList={ProfileList} />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default CandidateList