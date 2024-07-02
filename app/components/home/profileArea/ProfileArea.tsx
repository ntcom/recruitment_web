import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ProfileArea() {
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
    <section className="profile-section py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="container">
        <h2 className="title-section mb-[20px] md:mb-[40px]">Featured Profile</h2>
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
          {ProfileLists.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide-profile-item">
                  <div><img src={`${item.img}`} alt="" className='h-[426px] md:h-[422px] lg:h-[390px] w-[100%] object-cover' /></div>
                  <div className='box-text-profile relative'>
                    <h3 className='text-[18px] font-semibold mb-[8px]'>{item.name}</h3>
                    <p className='text-[#808291] text-[14px] font-normal mb-[10px]'>{item.job}</p>
                    <a href={`${item.link}`} className='flex items-center gap-[4px]'>
                      <p className='button-view-profile'>View Profile</p>
                      <i></i>
                    </a>
                    <button className='absolute bottom-[25px] right-[25px] w-[30px] h-[30px] border-[1px] border-solid border-[#dedede] rounded-full'>
                      <i></i>
                    </button>
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

export default ProfileArea