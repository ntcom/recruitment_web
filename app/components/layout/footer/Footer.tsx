import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const CateLists = [
    {name: 'Development', link: '/development'},
    {name: 'Business', link: '/business'},
    {name: 'Tech & IT', link: '/tech-it'},
    {name: 'Finance', link: '/finance'},
    {name: 'Networking', link: '/networking'},
  ]
  const QuickLinks = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Blogs', link: '/blogs'},
    {name: 'Companies', link: '/companies'},
    {name: 'Testimonial', link: '/testimonial'},
  ]
  return (
    <footer>
      <section className="section-newsletter relative">
        <div className="container">
          <div className="section-newsletter-bg relative bg-[#fff] pt-[30px] pb-[40px] md:py-[60px] px-[15px]">
            <h6 className="title-section text-center mt-[-10px]">Subscribe Newsletter</h6>
            <form action="" className="max-w-[660px] mx-auto relative z-[1] mt-[40px]">
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="newsletter-decor">
              <img src="/assets/images/decor-newsletter-1.png" alt="" />
              <img src="/assets/images/decor-newsletter-1.png" alt="" className="hidden md:block" />
              <img src="/assets/images/decor-newsletter-1.png" alt="" />
              <img src="/assets/images/decor-newsletter-1.png" alt="" className="hidden md:block" />
              <img src="/assets/images/decor-newsletter-2.png" alt="" className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>
      <section className="footer mt-[50px] md:mt-[75px] lg:mt-[100px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[24px]">
          <div className="">
            <div className="mb-[20px] md:mb-[25px]">
              <img src="/assets/images/logo-footer.png" alt="" />
            </div>
            <p className="mb-[15px] md:mb-[20px] text-[#fff] text-[14px] md:text-[15px] leading-[1.8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium deleniti reprehenderit illum eveniet! Error deserunt ab fuga accusantium quod delectus dolorem quam consectetur molestiae, nam cupiditate iusto porro. Sit?</p>
            <div className="list-social flex items-center gap-[20px]">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={16} height={16} fill="#fff">
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={16} height={16} fill="#fff">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={16} height={16} fill="#fff">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={16} height={16} fill="#fff">
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="menu-footer">
            <h6 className="title-menu-footer relative text-[#fff] text-[18px] md:text-[22px] pb-[13px] md:pb-[20px] font-semibold mb-[22px] md:mb-[30px] border-b-[1px] border-solid border-[ffffff87]">Category</h6>
            <ul>
              {CateLists.map((item, index) => {
                return (
                  <li className="mb-[14px] md:mb-[15px] last:mb-0" key={index}>
                    <a href={`${item.link}`} className="text-[14px] md:text-[15px] text-[#fff] transition-all duration-500 ease-linear">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-[8px] text-[13px]"/>
                      {item.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="menu-footer">
            <h6 className="title-menu-footer relative text-[#fff] text-[18px] md:text-[22px] pb-[13px] md:pb-[20px] font-semibold mb-[22px] md:mb-[30px] border-b-[1px] border-solid border-[ffffff87]">Quick Links</h6>
            <ul>
              {QuickLinks.map((item, index) => {
                return (
                  <li className="mb-[14px] md:mb-[15px] last:mb-0" key={index}>
                    <a href={`${item.link}`} className="text-[14px] md:text-[15px] text-[#fff] transition-all duration-500 ease-linear">
                      <FontAwesomeIcon icon={faAngleRight} className="mr-[8px] text-[13px]"/>
                      {item.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="menu-footer">
            <h6 className="title-menu-footer relative text-[#fff] text-[18px] md:text-[22px] pb-[13px] md:pb-[20px] font-semibold mb-[22px] md:mb-[30px] border-b-[1px] border-solid border-[ffffff87]">Find Us</h6>
            <ul>
              <li className="mb-[14px] md:mb-[15px] last:mb-0">
                <FontAwesomeIcon icon={faLocationDot} className="text-[13px] text-[#fff] mr-[8px]"/>
                <span className="text-[#fff] text-[15px]">28/A Street, New York City</span>
              </li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0">
                <FontAwesomeIcon icon={faPhone} className="text-[13px] text-[#fff] mr-[8px]"/>
                <a href="tel:+880123456789" className="text-[14px] md:text-[15px] text-[#fff] transition-all duration-500 ease-linear">+88 0123 456 789</a>
              </li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0">
                <FontAwesomeIcon icon={faAt} className="text-[13px] text-[#fff] mr-[8px]"/>
                <a href="mailto:hello@gable.com" className="text-[14px] md:text-[15px] text-[#fff] transition-all duration-500 ease-linear">hello@gable.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container copyright">
          <div className="flex items-center flex-col md:flex-row gap-[5px] justify-between py-[20px] md:py-[30px] mt-[30px] md:mt-[50px] lg:mt-[100px] border-t-[1px] border-solid border-[#6bbf75]">
            <p className="text-[#fff] text-[13px] md:text-[16px]">© Gable is Proudly Owned by <a href=""> HiBoostrap</a></p>
            <div className="text-[#fff] text-[13px] md:text-[16px]">
              <a href="" className=" text-[13px] md:text-[16px]">Terms & Conditions</a>
              <span className="mx-[10px]">-</span>
              <a href="" className=" text-[13px] md:text-[16px]">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
