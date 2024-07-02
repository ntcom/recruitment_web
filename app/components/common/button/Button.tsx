import React from 'react'

function Button({hoverclass, width, height, ...prop}:any) {
  return (
    <a href="/login" className={`${hoverclass} text-[13px] md:text-[16px] text-[#333] w-${width} h-{height} flex items-center justify-center`}><p className="relative z-[1]">Login</p></a>
  )
}

export default Button