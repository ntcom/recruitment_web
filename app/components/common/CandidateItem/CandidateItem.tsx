import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CandidateItem({ProfileList}: any) {
  return (
    <div>
      <div><img src={`${ProfileList.img}`} alt="" className='h-[426px] md:h-[422px] lg:h-[390px] w-[100%] object-cover' /></div>
      <div className='box-text-profile relative'>
        <h3 className='text-[18px] font-semibold mb-[8px]'>{ProfileList.name}</h3>
        <p className='text-[#808291] text-[14px] font-normal mb-[10px]'>{ProfileList.job}</p>
        <a href={`${ProfileList.link}`} className='flex items-center gap-[8px]'>
          <p className='button-view-profile'>View Profile</p>
          <FontAwesomeIcon icon={faArrowRight} className='text-[13px] text-[#4cce5b]' />
        </a>
        <button className='absolute bottom-[25px] right-[25px] w-[30px] h-[30px] border-[1px] border-solid border-[#dedede] rounded-full'>
          <FontAwesomeIcon icon={faHeart} className='text-[#4cce5b]' />
        </button>
      </div>
    </div>
  )
}

export default CandidateItem