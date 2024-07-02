import React from "react";

function Footer() {
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
            <div className="flex items-center gap-[20px]">
              <a href=""></a>
            </div>
          </div>
          <div className="menu-footer">
            <h6 className="title-menu-footer relative text-[#fff] text-[18px] md:text-[22px] pb-[13px] md:pb-[20px] font-semibold mb-[22px] md:mb-[30px] border-b-[1px] border-solid border-[ffffff87]">Category</h6>
            <ul>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Development</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Business</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Tech & IT</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Finance</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Networking</a></li>
            </ul>
          </div>
          <div className="menu-footer">
            <h6 className="title-menu-footer relative text-[#fff] text-[18px] md:text-[22px] pb-[13px] md:pb-[20px] font-semibold mb-[22px] md:mb-[30px] border-b-[1px] border-solid border-[ffffff87]">Quick Links</h6>
            <ul>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Home</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">About Us</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Blogs</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Companies</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">Testimonial</a></li>
            </ul>
          </div>
          <div className="menu-footer">
            <h6 className="title-menu-footer relative text-[#fff] text-[18px] md:text-[22px] pb-[13px] md:pb-[20px] font-semibold mb-[22px] md:mb-[30px] border-b-[1px] border-solid border-[ffffff87]">Find Us</h6>
            <ul>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><span className="text-[#fff] text-[15px]">28/A Street, New York City</span></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">+88 0123 456 789</a></li>
              <li className="mb-[14px] md:mb-[15px] last:mb-0"><a href="" className="text-[14px] md:text-[16px] text-[#fff] text-[15px] transition-all duration-500 ease-linear">hello@gable.com</a></li>
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
