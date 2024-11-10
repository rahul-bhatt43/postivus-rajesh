import React from 'react'
import speakerImg from '../../assets/header/Group (3).svg'
import heartImg from '../../assets/header/Vector (14).svg'
import shareImg from '../../assets/header/Vector (15).svg'
import playImg from '../../assets/header/Vector (4).png'
import locationImg from '../../assets/header/Group (4).svg'
import bigStarImg from '../../assets/header/Frame.svg'
import ellips1Img from '../../assets/header/Ellipse 9.svg'


function Header() {
  return (
    <section className=' mt-10'>
        <div className='w-[95vw] lg:w-[1250px] lg:h-[515px] mx-auto font-space-grotesk
        flex flex-col lg:flex-row lg:justify-between '>
            {/* left */}
            <div className='w-[95vw] lg:w-[531px] lg:h-[481px] flex flex-col gap-y-[35px]'>
                <h1 className='   text-dark font-medium text-[2.4rem] lg:text-[3.9rem] leading-[50x] lg:leading-[74px]'>Navigating the digital landscape for success</h1>
                <p className='hidden text-[1.3rem]  lg:block font-normal  leading-[28px]  text-balance text-dark'>Our digital marketing agency helps businesses grow
               and succeed online through a range of services       
                including SEO, PPC, social media marketing, and content creation.</p>
                 <button className='hidden lg:block w-[264px] py-5 bg-dark text-[#FFFFFF] rounded-xl'>Book a consultation</button>
            </div>
              {/* right */}
            <div className='w-[95vw] h-[310px] relative lg:w-[600px] lg:h-[515px]  flex justify-center '>
                <img src={speakerImg} alt="" className='w-[205px] h-[231px] lg:w-[340px] lg:h-[367px] z-10' />
                
                 <div className='absolute top-3 right-16 lg:top-0  lg:right-32 bg-black w-[44px] h-[43px] lg:w-[73px] lg:h-[72px] rounded-full 
                 flex justify-center items-center '>
                    <img src={heartImg} alt="" className='w-[20px] h-[22px] lg:w-[37px] lg:h-[34px] ' />
                 </div>

                 <div className='absolute top-5 right-3 lg:top-5 lg:right-12 bg-green w-[44px] h-[43px] lg:w-[73px] lg:h-[72px] rounded-full 
                 flex justify-center items-center'>
                    <img src={shareImg} alt="" className='w-[20px] h-[22px] lg:w-[37px] lg:h-[34px] ' />
                 </div>

                 <div className='absolute top-[80px] right-3 lg:top-28 lg:right-12 bg-black w-[44px] h-[43px] lg:w-[73px] lg:h-[72px] rounded-full 
                 flex justify-center items-center'>
                    <img src={playImg} alt="" className='w-[20px] h-[22px] lg:w-[37px] lg:h-[34px] '/>
                 </div>

                 <div className='absolute top-[135px] right-4 lg:top-52 lg:right-14 border border-black  bg-green w-[44px] h-[43px] lg:w-[73px] lg:h-[72px] rounded-full 
                 flex justify-center items-center'>
                    <img src={locationImg} alt="" className='w-[20px] h-[22px] lg:w-[39px] lg:h-[57px] ' />
                 </div>

                 <div className='absolute lg:left-2 left-7 top-[50px]  bottom-0 lg:top-[170px]  z-0 '>
                    <img src={ellips1Img} alt="" className='w-[340px] lg:w-[566px]' />
                 </div>
                               {/* 110 */}
                 <div className='absolute left-3 top-[110px] bottom-0 lg:top-[120px] z-0'>
                    <img src={ellips1Img} alt="" className='w-[340px] lg:w-[566px]' />
                 </div>
                                               {/* 79 */}
                 <div className='absolute lg:left-5 left-5 top-[79px] bottom-0 lg:top-[75px] z-0'>
                    <img src={ellips1Img} alt="" className='w-[340px] lg:w-[566px]' />
                 </div>

                 <div className='absolute top-[210px] lg:top-[313px] left-10'>
                    <img src={bigStarImg} alt="" className='w-[70px]' />
                 </div>

                 <div className='absolute top-[260px] lg:top-[400px] lg:left-[250px] '>
                    <img src={bigStarImg} alt="" className='w-[35px] h-[35px] rotate-[45deg] ' />
                 </div>

                 <div className='absolute left-4 lg:left-0 top-3 w-[27px] h-[27px] lg:w-[47px] lg:h-[47px] bg-black rounded-full'></div>
                 <div className='absolute left-20 top-12 lg:top-16 w-[19px] h-[18px] lg:w-[31px] lg:h-[31px] bg-green rounded-full'></div>
                 <div className='hidden lg:block absolute left-[400px] top-[430px] w-[20px] h-[20px] bg-green rounded-full'></div>

            </div>

                <p className=' mt-5 lg:hidden font-normal leading-[24px] lg:leading-[28px]  text-pretty text-dark'>Our digital marketing agency helps businesses grow
               and succeed online through a range of services       
                including SEO, PPC, social media marketing, and content creation.</p>
                 <button className=' mt-10 lg:hidden w-[full] lg:w-[264px] py-5 bg-dark text-[#FFFFFF] rounded-xl'>Book a consultation</button>
        </div>
    </section>
  )
}

export default Header