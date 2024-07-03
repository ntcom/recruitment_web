import React from 'react'
import BannerView from '@/app/components/common/banner-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAt, faDollarSign, faGraduationCap, faLocationDot, faMedal, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';

function JobDetail() {
  return (
    <main>
      <BannerView title="Job List" />
      <div className="container">
        <div className='py-[50px] md:py-[70px] lg:py-[100px] flex items-start flex-col lg:flex-row gap-[30px] lg:gap-0'>
          <div className='content w-[100%] lg:w-2/3 mr-0 lg:mr-[12px] flex flex-col gap-[30px] md:gap-[40px]'>
            <div>
              <h3 className='text-[18px] md:text-[25px] font-bold mb-[12px] md:mb-[20px]'>Job Description</h3>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages</p>
                <br></br>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam sapiente dolor quos 
                expedita quis, ad perspiciatis hic nihil laboriosam at eius.</p>
            </div>

            <div>
              <h3 className='text-[18px] md:text-[25px] font-bold mb-[12px] md:mb-[20px]'>Required Knowledge, Skills, and Abilities</h3>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Hand On experience with Wordpress
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Better knowledge of front-end technologies, including HTML5, CSS3, JavaScript, jQuery
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Belief – believing in yourself and those around you
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Experience designing and developing responsive design websites
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Ability to convert comprehensive layout and wireframes into working HTML pages
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Strong understanding of PHP back-end development
              </p>
            </div>

            <div>
              <h3 className='text-[18px] md:text-[25px] font-bold mb-[12px] md:mb-[20px]'>Education Qualification</h3>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Any Graduattion Degree(13th Pass) (Preferred)
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Advanced degree or equivalent experience in graphic and web design
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                2 or more years of professional design experience
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Direct response email experience
              </p>
              <p className='text-[#808291] text-[14px] md:text-[15px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#4cce5b] mr-[8px]'/>
                Ecommerce website design experience
              </p>
            </div>

            <a href="" className='button-apply-detail'>Apply Now</a>
          </div>
          <div className="w-[100%] lg:w-1/3 ml-0 lg:ml-[12px] flex flex-col gap-[30px]">
            <div className='px-[20px] md:px-[50px] py-[25px] md:py-[40px] border-[1px] border-solid border-[#80829159]'>
              <h3 className='title-sidebar-detail text-[18px] md:text-[22px] font-semibold pb-[12px] md:pb-[15px] relative border-b-[1px] border-solid border-[#0080003d]'>Overview</h3>
              <div className='mt-[25px] md:mt-[30px] flex flex-col gap-[20px]'>
                <div className='flex items-center gap-[24px]'>
                  <div className='text-[30px] text-[#4cce5b] w-[40px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faDollarSign} /></div>
                  <div>
                    <p className='text-[14px] md:text-[15px] leading-[1.8] mb-[2px]'>Offered Salary</p>
                    <p className='text-[13px] md:text-[14px] font-normal text-[#808291]'>$10k-$150k</p>
                  </div>
                </div>
                <div className='flex items-center gap-[24px]'>
                  <div className='text-[30px] text-[#4cce5b] w-[40px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faUsers} /></div>
                  <div>
                    <p className='text-[14px] md:text-[15px] leading-[1.8] mb-[2px]'>Gender</p>
                    <p className='text-[13px] md:text-[14px] font-normal text-[#808291]'>Male</p>
                  </div>
                </div>
                <div className='flex items-center gap-[24px]'>
                  <div className='text-[30px] text-[#4cce5b] w-[40px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faMedal} /></div>
                  <div>
                    <p className='text-[14px] md:text-[15px] leading-[1.8] mb-[2px]'>Experince</p>
                    <p className='text-[13px] md:text-[14px] font-normal text-[#808291]'>2 Years</p>
                  </div>
                </div>
                <div className='flex items-center gap-[24px]'>
                  <div className='text-[30px] text-[#4cce5b] w-[40px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faGraduationCap} /></div>
                  <div>
                    <p className='text-[14px] md:text-[15px] leading-[1.8] mb-[2px]'>Qualification</p>
                    <p className='text-[13px] md:text-[14px] font-normal text-[#808291]'>Master Degree</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-[20px] md:px-[50px] py-[25px] md:py-[40px] border-[1px] border-solid border-[#80829159]'>
              <h3 className='title-sidebar-detail text-[18px] md:text-[22px] font-semibold pb-[12px] md:pb-[15px] relative border-b-[1px] border-solid border-[#0080003d]'>Company Address</h3>
              <div className='mt-[25px] md:mt-[30px] flex flex-col gap-[20px]'>
                <div className='flex items-center gap-[8px]'>
                  <div className='text-[13px] text-[#4cce5b] w-[20px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faLocationDot} /></div>
                  <p className='text-[13px] md:text-[14px] font-normal text-[#808291]'>4th Floor, 408 No Chamber</p>
                </div>
                <div className='flex items-center gap-[8px]'>
                  <div className='text-[13px] text-[#4cce5b] w-[20px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faPhone} /></div>
                  <a href='tel:+07 554 332 322' className='text-[13px] md:text-[14px] font-normal text-[#808291]'>Call : +07 554 332 322</a>
                </div>
                <div className='flex items-center gap-[8px]'>
                  <div className='text-[13px] text-[#4cce5b] w-[20px] shrink-0 flex justify-center'><FontAwesomeIcon icon={faAt} /></div>
                  <a href='mailto:hello@gable.com' className='text-[13px] md:text-[14px] font-normal text-[#808291]'>hello@gable.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default JobDetail