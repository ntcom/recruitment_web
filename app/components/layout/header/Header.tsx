"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faMinus, faPlus, faSquarePlus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from "../../common/button";

function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(null);
  const linkData = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'job',
      link: '/job',
      child: [
        {
          title: 'job1',
          link: '/job1',
        },
        {
          title: 'job2',
          link: '/job2',
        },
      ]
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ]
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  const handleIsMenu = () => {
    setOpenMenu(!openMenu)
  }
  const handleIsSubMenu = (index: any) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    console.log(openSubMenu);
  }
  return (
    <header className={`fixed top-0 left-0 right-0 z-[20] header py-[10px] lg:py-[15px] bg-[#000] lg:bg-[#fff] transition-all duration-300 ease-linear ${scrolled ? 'scroll' : ''}`}>
      <div className="container flex items-center justify-between">
        <a href="/" className="logo">
          <img src="/assets/images/logo.png" alt="Logo" className="h-[35px] lg:h-[50px] w-auto" />
        </a>
        <div className="menu hidden lg:block">
          <ul className="flex items-center">
            {linkData.map((item, index) => {
              return (
                <li key={index} className="relative mx-[12px]">
                  <a href={`${item.link}`} className="block capitalize leading-[22.5px] py-[15px] transition-all duration-300 ease-linear">
                    {item.title}
                    {item?.child && <FontAwesomeIcon icon={faAngleDown} className="ml-[4px] w-[10px]" />}
                  </a>
                  {item?.child && <div className="menu-child">
                    <ul className="w-full h-full">
                      {item.child.map((menuChild, index) => {
                        return (
                          <li key={index}><a href={`${menuChild.link}`} className="block text-[#fff] text-[15px] px-[15px] py-[9px] capitalize transition-all duration-500 ease-linear">{menuChild.title}</a></li>
                        )
                      })}
                    </ul>
                  </div>

                  }

                </li>
              )
            })}
          </ul>
        </div>
        <div className="menu-mobile lg:hidden">
          <button className=" text-[#fff] text-[28px] outline-none" onClick={handleIsMenu}>
            {openMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
          <div className="drop-menu absolute top-[100%] left-0 w-full ">
            <ul className={`bg-[#fff] max-h-0 overflow-hidden transition-all duration-300 ease-linear ${openMenu ? 'open' : ''}`}>
              {linkData.map((item, index) => {
                return (
                  <li key={index} className="relative">
                    <a href="javascript:void(0)" onClick={() => handleIsSubMenu(index)} className="capitalize text-[14px] text-[#677294] leading-[22.5px] py-[14px] px-[5%] border-b-[1px] border-solid border-[#dbeefd] flex items-center justify-between">
                      <p>{item.title}</p>
                      {item?.child && <button>
                        {openSubMenu !== null ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                      </button>}
                    </a>
                    {item?.child && <div className={`menu-child overflow-hidden transition-all duration-300 ease-linear ${openSubMenu === index ? 'max-h-[300px]' : 'max-h-0'}`}>
                      <ul className="w-full h-full">
                        {item.child.map((menuChild, index) => {
                          return (
                            <li key={index}>
                              <a href={`${menuChild.link}`} className="block text-[14px] text-[#677294] px-[10%] py-[14px] capitalize border-b-[1px] border-solid border-[#dbeefd]">
                                {menuChild.title}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    }
                  </li>
                )
              })}
            </ul>
            <div className="button-header-wrap flex items-center justify-center gap-[12px] py-[10px] bg-[#fff]">
              <Button hoverclass='border-button' link='login' width='107px' height='39.5px' color='#333' icon={faSquarePlus} value='Login' />
              <Button hoverclass='bg-button' link='sign-up' width='107px' height='39.5px' color='#fff' icon={faUser} value='Sign Up' />
            </div>
          </div>
        </div>
        <div className="button-header-wrap hidden lg:flex items-center gap-[14px]">
          <Button hoverclass='border-button' link='login' width='120px' height='50px' color='#333' icon={faSquarePlus} value='Login' />
          <Button hoverclass='bg-button' link='sign-up' width='120px' height='50px' color='#fff' icon={faUser} value='Sign Up' />
        </div>
      </div>
    </header>
  )
}

export default Header;
