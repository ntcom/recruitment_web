import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function BannerArea() {
  return (
    <section className="banner flex items-center justify-center">
      <div className="container relative z-[1]">
        <h2 className="text-[#fff] text-[25px] md:text-[32px] lg:text-[48px] mb-[5px] md:mb-[10px] font-bold">Get Your <span className="text-[#4bcc5a]">Preferred</span> Job</h2>
        <p className="text-[#fff]  text-[14px] md:text-[18px] mb-[40px] md:mb-[60px]">Jobs, Employment & Future Career Opportunities</p>
        <form action="">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="job-search relative px-[12px]">
              <input type="text" placeholder="Job Title" />
              <button className="text-[25px]"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className="city-search relative px-[12px]">
              <input type="text" placeholder="City or State" />
              <button className="text-[25px]"><FontAwesomeIcon icon={faLocationDot} /></button>
            </div>
            <select name="" id="">
              <option value="">ICT</option>
            </select>
          </div>
          <button className="button-search-banner">
            Search
          </button>
        </form>
      </div>
      <div className="jobseeker container grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="jobseeker-item">
          <div className="jobseeker-img w-[40px] h-[40px]">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex items-start lg:items-center flex-col lg:flex-row">
            <div className="jobseeker-text flex-1 text-[#fff]">
              <p className="mb-[6px] lg:mb-[10px] text-[13px] lg:text-[16px]">Jobseeker</p>
              <p className="text-[14px] lg:text-[20px] font-semibold">Looking For a Job ?</p>
            </div>
            <a href="" className="text-[#fff] text-[13px] lg:text-[16px] hover:text-[#333] transition-all duration-500 ease-linear">
              Apply now
              <FontAwesomeIcon icon={faArrowRight} className="ml-[8px]"/>
            </a>
          </div>
        </div>
        <div className="jobseeker-item">
          <div className="jobseeker-img w-[40px] h-[40px]">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex items-start lg:items-center flex-col lg:flex-row">
            <div className="jobseeker-text flex-1 text-[#fff]">
              <p className="mb-[6px] lg:mb-[10px] text-[13px] lg:text-[16px]">Jobseeker</p>
              <p className="text-[14px] lg:text-[20px] font-semibold">Looking For a Job ?</p>
            </div>
            <a href="" className="text-[#fff] text-[13px] lg:text-[16px] hover:text-[#333] transition-all duration-500 ease-linear">
              Apply now
              <FontAwesomeIcon icon={faArrowRight} className="ml-[8px]"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerArea;
