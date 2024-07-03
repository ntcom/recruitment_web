import React from 'react'
import BannerView from '@/app/components/common/banner-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function PrivacyPolicy() {
  return (
    <main>
      <BannerView title="Privacy Policy" />
      <div className="container">
        <div className='py-[50px] md:py-[70px] lg:py-[100px] flex items-start flex-col lg:flex-row'>
          <div className='content w-[100%] flex flex-col gap-[30px] md:gap-[40px]'>
            <div>
              <h3 className='text-[10=9px] md:text-[26px] font-bold mb-[12px] md:mb-[20px]'>1.What is Terms & Conditions?</h3>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div>
              <h3 className='text-[10=9px] md:text-[26px] font-bold mb-[12px] md:mb-[20px]'>2.How do we apply our Terms & Conditions?</h3>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div>
              <h3 className='text-[10=9px] md:text-[26px] font-bold mb-[12px] md:mb-[20px]'>What personal data can you use?</h3>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Name, email address and/or your photo when you visit our exhibitions and make use of the technologies we offer to you to receive a Good GIF
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Personal data obtained through or generated on our website, newsletters, commercial emails
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                IP address
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Your browsing behaviour on the website such as information on your first visit
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Whether you open a newsletter of email and what sections you select
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Personal data obtained through or generated on our website, newsletters, commercial emails
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Your browsing behaviour on the website such as information on your first visit
              </p>
              <p className='text-[#646464] text-[14px] md:text-[16px] leading-[1.8] font-normal mb-[12px]'>
                <FontAwesomeIcon icon={faAnglesRight} className='text-[13px] text-[#646464] mr-[8px]' />
                Whether you open a newsletter of email and what sections you select
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicy