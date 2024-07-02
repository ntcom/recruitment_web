import React from 'react'

function AccountArea() {
  const stepAccs = [
    {
      img: 'img',
      text: 'Register Your Account'
    },
    {
      img: 'img',
      text: 'Upload Your Resume'
    },
    {
      img: 'img',
      text: 'Apply for Dream Job'
    }
  ]
  return (
    <section className="account-section py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="container">
        <div className="account-step relative flex items-center flex-wrap gap-[30px] max-w-[696px] mx-auto">
          {stepAccs.map((item, index) => {
            return (
              <div className="account-step-item w-[100%] md:w-[calc((100%-30px)/2)] lg:w-[calc((100%-60px)/3)]" key={index}>
                <div className="bg-[#fff] h-[60px] md:h-[65px] w-[60px] md:w-[65px] flex items-center justify-center mx-auto"><img src={`${item.img}`} alt="" className="w-full h-full object-cover" /></div>
                <p className="text-[#fff] text-[14px] md:text-[16px] mt-[23px] md:mt-[25px] text-center">{item.text}</p>
              </div>
            )
          })}
        </div>
        <div className="account-button flex  items-center justify-center flex-col md:flex-row gap-[10px] md:gap-[24px] mt-[50px] md:mt-[70px]">
          <button className="w-full md:w-[210px] h-[49px] md:h-[56px] text-[14px] md:text-[16px] flex items-center justify-center text-[#38a745] bg-[#fff] transition-all duration-500 ease-linear hover:bg-[#333] hover:text-[#fff]">Create Your Profile</button>
          <button className="w-full md:w-[210px] h-[49px] md:h-[56px] text-[14px] md:text-[16px] flex items-center justify-center text-[#38a745] bg-[#fff] transition-all duration-500 ease-linear hover:bg-[#333] hover:text-[#fff]">Upload Your CV</button>
        </div>
      </div>
    </section>
  )
}

export default AccountArea