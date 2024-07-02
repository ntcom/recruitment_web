"use client"
import React from "react";

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
                    {item?.child && <span className="ml-[4px] text-[8px]">icon</span>}
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
          <button className=" text-[#fff]" onClick={handleIsMenu}>Menu</button>
          <div className="drop-menu absolute top-[100%] left-0 w-full ">
            <ul className={`bg-[#fff] max-h-0 overflow-hidden transition-all duration-500 ease-linear ${openMenu ? 'open' : ''}`}>
              {linkData.map((item, index) => {
                return (
                  <li key={index} className="relative">
                    <a href="javascript:void(0)" onClick={() => handleIsSubMenu(index)} className="block capitalize text-[14px] text-[#677294] leading-[22.5px] py-[14px] px-[5%] border-b-[1px] border-solid border-[#dbeefd]">
                      {item.title}
                    </a>
                    {item?.child && <div className={`menu-child max-h-0 overflow-hidden transition-all duration-1000 ease-linear ${openSubMenu === index ? 'open' : ''}`}>
                      <ul className="w-full h-full">
                        {item.child.map((menuChild, index) => {
                          return (
                            <li key={index}><a href={`${menuChild.link}`} className="block text-[14px] text-[#677294] px-[10%] py-[14px] capitalize border-b-[1px] border-solid border-[#dbeefd]">{menuChild.title}</a></li>
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
              <a href="/login" className="button-login border-button text-[13px] text-[#333] w-[107px] h-[39.5px] flex items-center justify-center"><p className="relative z-[1]">Login</p></a>
              <a href="/register" className="button-register bg-button text-[13px] text-[#fff] w-[107px] h-[39.5px] flex items-center justify-center"><p className="relative z-[1]">Sign Up</p></a>
            </div>
          </div>
        </div>
        <div className="button-header-wrap hidden lg:flex items-center gap-[14px]">
          <a href="/login" className="button-login border-button w-[120px] h-[50px] flex items-center justify-center"><p className="relative z-[1]">Login</p></a>
          <a href="/register" className="button-register text-[#fff] bg-button w-[120px] h-[50px] flex items-center justify-center"><p className="relative z-[1]">Sign Up</p></a>
        </div>
      </div>
    </header>
  )
}

export default Header;
