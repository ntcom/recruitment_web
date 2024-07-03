"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface buttonProps {
  hoverclass?: string,
  width?: string,
  height?: string,
  icon?: string | any,
  value: string,
  color?: string,
  link?: string,
  classProp?: string,
  onClick?: any,
  active?: boolean,
  isLink?: boolean
}

function Button(props: buttonProps) {
  return props.isLink ? <a href={`${props.link}`} onClick={props.onClick} style={{ width: `${props.width}`, height: `${props.height}` }} className={`${props.hoverclass} text-[13px] md:text-[16px] text-[${props.color}] flex items-center justify-center gap-[8px] ${props.classProp} ${props.active ? 'active' : ''}`}>
    <FontAwesomeIcon icon={props.icon} />
    <p className="relative z-[1]">{props.value}</p>
  </a> : <button onClick={props.onClick} style={{ width: `${props.width}`, height: `${props.height}` }} className={`${props.hoverclass} text-[13px] md:text-[16px] text-[${props.color}] flex items-center justify-center gap-[8px] ${props.classProp} ${props.active ? 'active' : ''}`}>
    <FontAwesomeIcon icon={props.icon} />
    <p className="relative z-[1]">{props.value}</p>
  </button>
}

export default Button;