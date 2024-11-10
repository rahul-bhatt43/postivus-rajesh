
import React from 'react';
import arrowImage from '../../assets/caseStudy/Arrow 1.svg';
import lineImage from '../../assets/caseStudy/Line 4.svg';

function CaseStudy() {
  return (
    <div className='font-space-grotesk mt-20 mb-5 lg:w-full lg:flex flex-col items-center lg:justify-center '>
       
       <div className=' w-[100vw] lg:w-fit  gap-y-5 flex gap-x-7 flex-col lg:flex-row lg:self-start lg:ml-16 mb-10 '>
         <h3 className='bg-green text-[2.3rem]  self-center font-medium lg:text-[2.5rem]'>Case studies</h3>
         <div className='text-center lg:text-start lg:w-[580px] text-[1.1rem]'>
            <p>Explore Real-Life Examples 
            of Our Proven Digital Marketing Success through Our Case Studies</p>
         </div>
       </div>

        <div className='overflow-x-auto   lg:ml-0 
         h-[260px] bg-none lg:bg-black   lg:justify-around gap-x-3
         snap-x snap-mandatory  ml-2  flex   lg:w-[1234px] lg:h-[326px] 
         lg:items-center  lg:rounded-3xl'>
            {/* cart1 */}
            <div className=' rounded-3xl  flex-none w-[88vw]  h-[252px] lg:w-[286px] lg:h-[163px]
             bg-black flex flex-col justify-evenly  lg:justify-between p-4 snap-start'>
              <div className='mx-auto'>
                <p className='text-white text-[15px] lg:text-[1rem] w-[250px]'>
                    For a local restaurant, we implemented a targeted PPC
                    campaign that resulted in a 50% increase in website
                    traffic and a 25% increase in sales.
                </p>
                <div className='flex items-center gap-x-2 mt-3 '>
                    <button className='text-green text-[1.3rem]'>Learn more</button>
                    <img src={arrowImage} alt="" className='w-[25px] h-[18px]'/>
                </div>
                </div>
            </div>

            <img src={lineImage} alt="" className='hidden lg:block' />

            {/* cart2 */}
            <div className=' rounded-3xl  flex-none w-[88vw] h-[252px] lg:w-[286px] lg:h-[163px]
             bg-black flex flex-col justify-evenly lg:justify-between p-4 snap-start'>
                <div className='mx-auto'>
                <p className='text-white text-[15px] lg:text-[1rem] w-[250px]'>
                    For a B2B software company, we developed an SEO strategy that resulted in a first 
                    page ranking for key keywords and a 200% increase in organic traffic.
                </p>
                <div className='flex items-center gap-x-2'>
                    <button className='text-green text-[1.3rem] mt-3'>Learn more</button>
                    <img src={arrowImage} alt="" className='w-[25px] h-[18px]'/>
                </div>
                </div>
            </div>

            <img src={lineImage} alt="" className='hidden lg:block' />

            {/* cart3 */}
            <div className='rounded-3xl mr-3 flex-none w-[90vw] h-[252px] lg:w-[286px] lg:h-[163px]
            bg-black flex flex-col justify-evenly lg:justify-between p-4 snap-start'>
              <div className='mx-auto'>
                <p className='text-white text-[15px] lg:text-[1rem] w-[250px]'>
                    For a national retail chain, we created a social media marketing campaign that increased
                    followers by 25% and generated a 20% increase in online sales.
                </p>
                <div className='flex items-center gap-x-2'>
                    <button className='text-green text-[1.3rem] mt-3'>Learn more</button>
                    <img src={arrowImage} alt="" className='w-[25px] h-[18px]'/>
                </div>
              </div>  
            </div>
        </div>
    </div>
  );
}

export default CaseStudy;