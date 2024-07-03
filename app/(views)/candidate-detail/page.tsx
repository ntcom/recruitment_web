import React from 'react'
import BannerView from '@/app/components/common/banner-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope, faEye, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import LineSkill from '@/app/components/common/line-skill';

function CandidateDetail() {
  const boxShadow = { boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' };
  return (
    <main>
      <BannerView title="Candidate Detail" />
      <div className="max-w-[720px] lg:container mx-auto px-[12px]">
        <div className='py-[50px] md:py-[70px] lg:py-[100px] flex items-start gap-[24px] flex-col lg:flex-row'>
          <div className='w-[100%] lg:w-[40%]'>
            <img src="/assets/images/candidate-detail-demo.jpg" alt="" className='w-[100%]' />
            <div className='px-[15px] lg:px-[60px] py-[30px] lg:py-[50px] bg-[#fff] flex flex-col gap-[20px]' style={boxShadow}>
              <div>
                <h3 className='text-[18px] lg:text-[22px] font-semibold mb-[16px] lg:mb-[20px]'>Contact Info</h3>
                <a href='tel:+07 554 332 322' className='block text-[#858585] font-normal mb-[15px] lg:mb-[18px] text-[14px] lg:text-[18px]'>
                  <FontAwesomeIcon icon={faPhone} className='text-[13px] lg:text-[16px] text-[#4cce5b] mr-[10px]' />
                  Call : +07 554 332 322
                </a>
                <a href='mailto:hello@gable.com' className='block text-[#858585] font-normal mb-[15px] lg:mb-[18px] text-[14px] lg:text-[18px]'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-[13px] lg:text-[16px] text-[#4cce5b] mr-[10px]' />
                  hello@gable.com
                </a>
                <p className='block text-[#858585] font-normal mb-[15px] lg:mb-[18px] text-[14px] lg:text-[18px]'>
                  <FontAwesomeIcon icon={faLocationDot} className='text-[13px] lg:text-[16px] text-[#4cce5b] mr-[10px]' />
                  4th Floor, 408 No Chamber
                </p>
              </div>

              <div>
                <h3 className='text-[18px] lg:text-[22px] font-semibold mb-[20px]'>Social Links</h3>
                <a href='https://www.facebook.com' className='text-[14px] lg:text-[16px] text-[#858585] font-normal mb-[18px] flex items-center gap-[10px]'>
                  <div className='w-[16px] flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#4cce5b' viewBox="0 0 320 512" className='w-[10px]'>
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </div>
                  <p>https://www.facebook.com</p>
                </a>
                <a href='https://www.instagram.com' className='text-[14px] lg:text-[16px] text-[#858585] font-normal mb-[18px] flex items-center gap-[10px]'>
                  <div className='w-[16px] flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#4cce5b' viewBox="0 0 448 512" className='w-[16px]'>
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                  <p>https://www.instagram.com</p>
                </a>
                <a href='https://www.linkedin.com' className='text-[14px] lg:text-[16px] text-[#858585] font-normal mb-[18px] flex items-center gap-[10px]'>
                  <div className='w-[16px] flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#4cce5b' viewBox="0 0 448 512" className='w-[16px]'>
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                  </div>
                  <p>https://www.linkedin.com</p>
                </a>
                <a href='https://www.twitter.com' className='text-[14px] lg:text-[16px] text-[#858585] font-normal mb-[18px] flex items-center gap-[10px]'>
                  <div className='w-[16px] flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#4cce5b' viewBox="0 0 512 512" className='w-[16px]'>
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                    </svg>
                  </div>
                  <p>https://www.twitter.com</p>
                </a>
              </div>

              <div>
                <h3 className='text-[18px] lg:text-[22px] font-semibold mb-[20px]'>My Skills</h3>
                <LineSkill title='Frontend Design' progress={70}/>
                <LineSkill title='Software Development' progress={90}/>
                <LineSkill title='UIUX Design' progress={75}/>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[60%]">
            <div className='mb-[70px]'>
              <h3 className='text-[28px] lg:text-[38px] text-[#51504e] font-bold mb-[5px] lg:mb-[8px]'>Jac Jacson</h3>
              <p className='text-[16px] lg:text-[18px] text-[#999897] mb-[5px]'>Web Consultant</p>
              <p className='text-[14px] lg:text-[16px] text-[#838383] mb-[30px]'>Bachelor of Business Administation university of Gable</p>
              <div className='flex items-center gap-[10px] md:gap-[20px] lg:gap-[30px]'>
                <a href="" className='button-candidate-detail'>
                  <p>View Profile</p>
                  <FontAwesomeIcon icon={faEye} className='text-[13px]'/>
                </a>
                <a href="" className='button-candidate-detail'>
                  <p>Download CV</p>
                  <FontAwesomeIcon icon={faDownload} className='text-[13px]'/>
                </a>
              </div>
            </div>
            <div className='info-right-candidate pl-[60px] relative'>
              <div className='pb-[30px] last:pb-0'>
                <h3 className='title-info-right-candidate mb-[10px]'>Description</h3>
                <div className='text-[#838383]'>
                  <p className='mb-[10px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                  <p className='mb-[10px]'>Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
              <div className='pb-[30px] last:pb-0'>
                <h3 className='title-info-right-candidate mb-[10px]'>Education</h3>
                <div className='text-[#838383]'>
                  <p className='mb-[10px]'>PHD degree in Criminal Law at University of Gable Internatinal (2006)</p>
                  <p className='mb-[10px]'>Master of Family Law at University of Gable International (2002)</p>
                  <p className='mb-[10px]'>MBBS LLB (Hon’s) in at University of Gable International (2002)</p>
                  <p className='mb-[10px]'>Higher Secondary Certificate at Gable International collage (1991)</p>
                </div>
              </div>
              <div className='pb-[30px] last:pb-0'>
                <h3 className='title-info-right-candidate mb-[10px]'>Research</h3>
                <div className='text-[#838383]'>
                  <p className='mb-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                </div>
              </div>
              <div className='pb-[30px] last:pb-0'>
                <h3 className='title-info-right-candidate mb-[10px]'>Work Experiences</h3>
                <div className='text-[#838383]'>
                  <p className='mb-[10px]'>Hand On experience with Wordpress</p>
                  <p className='mb-[10px]'>Better knowledge of front-end technologies, including HTML5, CSS3, JavaScript, jQuery</p>
                  <p className='mb-[10px]'>Belief – believing in yourself and those around you</p>
                  <p className='mb-[10px]'>Experience designing and developing responsive design websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CandidateDetail