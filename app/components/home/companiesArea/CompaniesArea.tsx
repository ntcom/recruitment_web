import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function CompaniesArea() {
  const CompanyLists = [
    {
      img: '/assets/images/company-1.png',
      name: 'Company 1',
      address: 'Address 1',
      link: '/company1'
    },
    {
      img: '/assets/images/company-1.png',
      name: 'Company 2',
      address: 'Address 2',
      link: '/company2'
    },
    {
      img: '/assets/images/company-1.png',
      name: 'Company 3',
      address: 'Address 3',
      link: '/company3'
    },
    {
      img: '/assets/images/company-1.png',
      name: 'Company 4',
      address: 'Address 4',
      link: '/company4'
    },
    {
      img: '/assets/images/company-1.png',
      name: 'Company 5',
      address: 'Address 5',
      link: '/company5'
    },
    {
      img: '/assets/images/company-1.png',
      name: 'Company 6',
      address: 'Address 6',
      link: '/company6'
    },
  ]
  const breakpoints = {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
  return (
    <section className="company-section py-[50px] md:py-[75px] lg:py-[100px] bg-[#f7faf7]">
      <div className="container">
        <h2 className="title-section mb-[20px] md:mb-[25px]">Popular Companies</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={breakpoints}
          speed={700}
        >
          {CompanyLists.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide-company-item px-[20px] py-[35px] bg-[#fff] transition-all duration-500 ease-linear">
                  <div className='mb-[25px]'><img src={`${item.img}`} alt="" className='w-[60px] h-[60px] object-cover mx-auto' /></div>
                  <a href="{`${item.link}`}" className='block text-[18px] font-bold hover:text-[#4bcc5a] transition-all duration-500 ease-linear text-center mb-[16px]'>{item.name}</a>
                  <div className='flex items-center justify-center gap-[4px] mb-[22px]'>
                    <i></i>
                    <p className='text-[14px] text-[#808291] font-normal'>{item.address}</p>
                  </div>
                  <div className='flex justify-center'>
                    <a href={`${item.link}`} className='inline-flex items-center justify-center border-button w-[78px] h-[43px] font-normal text-[14px]'><p>Hiring</p></a>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default CompaniesArea