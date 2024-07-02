import React from 'react'

function CategoryArea() {
  const CateLists = [
    {
      img: 'img',
      text: 'Technical Support',
      bgColor: '#f5e0d6'
    },
    {
      img: 'img',
      text: 'Business Development',
      bgColor: '#dad7f2'
    },
    {
      img: 'img',
      text: 'Real Estate Business',
      bgColor: '#dbf5de'
    },
    {
      img: 'img',
      text: 'Share Maeket Analysis',
      bgColor: '#ece5d1'
    },
    {
      img: 'img',
      text: 'Weather & Environment',
      bgColor: '#ccceff'
    },
    {
      img: 'img',
      text: 'Finance & Banking Service',
      bgColor: '#ccc'
    },
  ]
  return (
    <section className="category pt-[370px] md:pt-[200px] pb-[100px] bg-[#f7faf7]">
      <div className="container">
        <h2 className="title-section text-center">Choose Your Desire Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[24px] gap-y-[30px] mt-[40px]">
          {CateLists.map((CateList, index) => {
            return (
              <div className="category-item pt-[25px] pb-[30px] md:py-[30px] bg-[#fff]" key={index}>
                <div className={`w-[60px] h-[60px] mx-auto flex items-center justify-center bg-[${CateList.bgColor}]`}><img src={`${CateList.img}`} alt="" className={`w-[30px] h-[30px] object-cover`} /></div>
                <a href="" className={`block text-[14px] md:text-[16px] text-center mt-[20px] font-semibold transition-all duration-500 ease-linear hover:text-[${CateList.bgColor}]`}><span className="inline-block md:max-w-[145px] mx-auto">{CateList.text}</span></a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryArea