"use client"
import React from 'react'

function LineSkill({title, progress} : any) {
  const bacgroundStyle = { background: 'linear-gradient(90deg, rgb(56, 167, 69) 0%, rgb(76, 206, 91) 63%)' };
  return (
    <div className='mb-[30px] last:mb-0'>
      <p className='text-[#9a9a9a] leading-[1.8] mb-[20px] text-[15px] md:text-[16px]'>{title}</p>
      <div className='relative'>
        <div className='w-[100%] h-[6px] bg-[#857e7e]'></div>
        <span className='absolute top-0 left-[0] h-[6px]' style={{ ...bacgroundStyle, width: `${progress}%` }}></span>
        <span className='absolute top-[-25px] translate-x-[-50%] text-[#9a9a9a] text-[15px] md:text-[16px]' style={{left: `${progress}%`}}>{progress}%</span>
      </div>
    </div>
  )
}

export default LineSkill;