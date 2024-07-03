"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import CandidateItem from '../../common/CandidateItem';

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
          {ProfileLists.map((ProfileList, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide-profile-item">
                  <CandidateItem ProfileList={ProfileList} />
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