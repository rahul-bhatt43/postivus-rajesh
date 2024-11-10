import React from 'react'
import Image from '../../assets/ctaBlock/illustration.svg'

function CtaBlock() {
  return (
    <div className='mt-20 font-space-grotesk'>
        <div className='w-[95vw] h-[370px] lg:w-[1240px] lg:h-[347px] mx-auto border flex justify-around items-center
        bg-light rounded-3xl'>

            <div className= 'w-[290px] h-[270px] lg:w-[500px] lg:h-[227px] flex flex-col justify-between'>
                <h3 className='font-medium text-[1.6rem] lg:text-[1.9rem] text-[#000000]'>Let’s make things happen</h3>
                <p className='font-normal text-[1rem] lg:text-[1.2rem] text-[#000000]'>Contact us today to learn more about how our digital
                     marketing services can help your business grow and succeed online.</p>
                <button className='w-[288px] h-[60px] text-[1.2rem] bg-dark text-white rounded-xl'>Get your free proposal</button>

            </div>
            <img src={Image} alt="" className='hidden lg:block' />

        </div>
    </div>
  )
}

export default CtaBlock