import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({hoverclass, width, height, icon, value, ...prop}:any) {
  return (
    <a href="/login" className={`${hoverclass} text-[13px] md:text-[16px] text-[#333] w-${width} h-{height} flex items-center justify-center gap-[4px]`}>
      <FontAwesomeIcon icon={icon} />
      <p className="relative z-[1]">{ value }</p>
    </a>
  )
}

export default Button