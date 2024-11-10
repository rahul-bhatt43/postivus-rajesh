import React from 'react'
import amazoneImage from '../../assets/brand/Company logo.svg'
import dribbleImage from '../../assets/brand/Vector (16).svg'
import companyLogo1 from '../../assets/brand/Company logo (1).svg'
import companyLogo2 from '../../assets/brand/Company logo (2).svg'
import companyLogo3 from '../../assets/brand/Company logo (3).svg'
import companyLogo from '../../assets/brand/Company logo.png'


function Brand() {
  return (

    <div className='mt-10 flex justify-around flex-wrap'>
        <img src={amazoneImage} alt="" className='w-[100px] h-[48px] lg:w-fit lg:h-fit'/>
        <img src={dribbleImage} alt=""  className='w-[100px] h-[48px] lg:w-fit lg:h-fit' />
        <img src={companyLogo1} alt=""  className='w-[100px] h-[48px] lg:w-fit lg:h-fit' />
        <img src={companyLogo2} alt=""  className='w-[100px] h-[48px] lg:w-fit lg:h-fit' />
        <img src={companyLogo3} alt=""  className='w-[100px] h-[48px] lg:w-fit lg:h-fit' />
        <img src={companyLogo} alt=""  className='w-[100px] h-[48px] lg:w-fit lg:h-fit' />
    </div>
  )
}

export default Brand