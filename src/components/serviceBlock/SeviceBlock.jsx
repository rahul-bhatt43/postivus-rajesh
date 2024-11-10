import React from 'react'
import arrowImage from '../../assets/serviceblock/Arrow 1.svg'
import firstCartImage from '../../assets/serviceblock/tokyo-magnifier-web-search-with-elements 2.svg'
import secondCartImage from '../../assets/serviceblock/tokyo-selecting-a-value-in-the-browser-window 1.png'
import thirdCartImage from '../../assets/serviceblock/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg'
import fourthCartImage from '../../assets/serviceblock/tokyo-sending-messages-from-one-place-to-another 1.svg'
import fifthCartImage from '../../assets/serviceblock/tokyo-many-browser-windows-with-different-information 1.svg'
import sixthCartImage from '../../assets/serviceblock/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg'



function SeviceBlock() {
  return (
    <section className='mt-16'>
        <div className='font-space-grotesk w-[95vw] lg:w-[1250px]  mx-auto '>
            <div className='w-[95vw] h-[148px] lg:h-fit lg:w-[800px]   flex  flex-col justify-between lg:flex-row mx-auto lg:mx-0 gap-x-9 items-center'>
               {/* <div className='w-[200px] h-[70px]'> */}
                <h3 className=' h-[46px] font-medium text-[36px] lg:text-[2.5rem] bg-green'>Services</h3>
                {/* </div> */}
                <p className='font-normal text-[15px] lg:text-[1rem] text-center lg:text-start lg:text-balance  text-dark '>At our digital marketing agency, we offer a range of services 
                to help businesses grow and succeed online. These services include:</p>

            </div>

            <div className=' mt-8 flex flex-wrap justify-between gap-y-10'>
                {/* first cart */}
                {/* <div> */}
                    <div className='bg-light w-[95vw] h-[322px] lg:w-[600px] lg:h-[310px] flex justify-center items-center
                     lg:gap-x-16 border border-[#191A23] rounded-3xl  shadow-[0_5px_0px_rgba(0,0,0,1)]'>
                        <div className='w-[290px] h-[222px] lg:w-[221px] lg:h-[210px] flex flex-col justify-between  '>
                           <div>
                            <h3 className='text-[1.7rem] w-fit pr-3 lg:pr-0 lg:text-[1.9rem] font-bold bg-green'>Search engine</h3>
                            <h3 className='w-[190px] text-[1.7rem] lg:text-[1.9rem] font-bold bg-green'>optimization</h3>
                           </div>
                            <div className=' mt-5 lg:mt-0 flex  items-end  justify-between lg:justify-normal lg:w-fit lg:gap-x-3'>
                            <div className='w-[41px] h-[41px] bg-black rounded-full flex justify-center items-center'>
                            <img src={arrowImage} alt="" className='w-[20px]' />
                            </div>
                            <button className=' hidden lg:block font-normal text-[1.2rem]'>Learn More</button>
                            <img src={firstCartImage} alt="" className='w-[165px] h-[129px] lg:hidden lg:w-[210px] lg:h-[170px]' />
                           </div>
                        </div>
                       
                         <img src={firstCartImage} alt="" className='hidden lg:block w-[165px] h-[129px] lg:w-[210px] lg:h-[170px]' />
                         

                    </div>

                    {/* second cart */}
                    <div className='bg-green w-[95vw] h-[322px] lg:w-[600px] lg:h-[310px] flex justify-center items-center
                     gap-x-16 border border-[#191A23] rounded-3xl shadow-[0_5px_0px_rgba(0,0,0,1)]'>
                        <div className='w-[290px] h-[222px] lg:w-[221px] lg:h-[210px] flex flex-col justify-between'>
                           <div>
                            <h3 className='text-[1.7rem] lg:text-[1.9rem] w-fit pr-5 lg:pr-0 font-bold bg-light'>Pay-per-click</h3>
                            <h3 className='w-[183px] text-[1.7rem] lg:text-[1.9rem] font-bold bg-light'>advertising</h3>
                           </div>
                            <div className=' mt-5 lg:mt-0 flex  items-end  justify-between lg:justify-normal lg:w-fit lg:gap-x-3'>
                            <div className='w-[41px] h-[41px] bg-black rounded-full flex justify-center items-center'>
                            <img src={arrowImage} alt="" className='w-[20px]' />
                            </div>
                            <button className=' hidden lg:block font-normal text-[1.2rem]'>Learn More</button>
                            <img src={secondCartImage} alt="" className=' w-[165px] h-[129px] lg:hidden lg:w-[210px] lg:h-[170px]' />
                           </div>
                        </div>
                       
                         <img src={secondCartImage} alt="" className='hidden lg:block w-[210px] h-[170px]' />
                         

                    </div>

                    {/* third cart */}
                    <div className='bg-black w-[600px] h-[310px] flex justify-center items-center
                     gap-x-16 border border-[#191A23] rounded-3xl  shadow-[0_5px_0px_rgba(0,0,0,1)]'>
                        <div className='w-[290px] h-[222px] lg:w-[221px] lg:h-[210px] flex flex-col justify-between'>
                           <div>
                            <h3 className='text-[1.7rem] w-fit pr-4 lg:text-[1.9rem] font-bold bg-light'>Social Media</h3>
                            <h3 className='w-[165px] text-[1.9rem] font-bold bg-light'>Marketing</h3>
                           </div>
                            <div className=' mt-5 lg:mt-0 flex  items-end  justify-between lg:justify-normal lg:w-fit lg:gap-x-3'>
                            <div className='w-[41px] h-[41px] bg-light rounded-full flex justify-center items-center'>
                            <img src={arrowImage} alt="" className='w-[20px]' />
                            </div>
                            <button className=' hidden lg:block font-normal text-[1.2rem] text-white'>Learn More</button>
                            <img src={thirdCartImage} alt="" className=' w-[165px] h-[129px] lg:hidden lg:w-[210px] lg:h-[170px]' />
                           </div>
                        </div>
                       
                         <img src={thirdCartImage} alt="" className=' hidden lg:block w-[210px] h-[170px]' />
                         

                    </div>

                    {/* fourth cart */}
                    <div className='bg-light w-[600px] h-[310px] flex justify-center items-center
                     gap-x-16 border border-[#191A23] rounded-3xl  shadow-[0_5px_0px_rgba(0,0,0,1)]'>
                        <div className='w-[290px] h-[222px] lg:w-[221px] lg:h-[210px] flex flex-col justify-between '>
                           <div>
                            <h3 className='text-[1.9rem] font-bold w-[80px] bg-green'>Email</h3>
                            <h3 className='w-[165px] text-[1.9rem] font-bold bg-green'>Marketing</h3>
                           </div>
                            <div className=' mt-5 lg:mt-0 flex  items-end  justify-between lg:justify-normal lg:w-fit lg:gap-x-3'>
                            <div className='w-[41px] h-[41px] bg-black rounded-full flex justify-center items-center'>
                            <img src={arrowImage} alt="" className='w-[20px]' />
                            </div>
                            <button className='hidden lg:block font-normal text-[1.2rem] '>Learn More</button>
                            <img src={fourthCartImage} alt="" className=' w-[165px] h-[129px] lg:hidden lg:w-[210px] lg:h-[170px]' />
                           </div>
                        </div>
                       
                         <img src={fourthCartImage} alt="" className='hidden lg:block w-[210px] h-[170px]' />
                         

                    </div>

                    {/* fifth */}
                    <div className='bg-green w-[600px] h-[310px] flex justify-center items-center
                     gap-x-16 border border-[#191A23] rounded-3xl  shadow-[0_5px_0px_rgba(0,0,0,1)]'>
                        <div className='w-[290px] h-[222px] lg:w-[221px] lg:h-[210px] flex flex-col justify-between '>
                           <div>
                            <h3 className='w-[130px] text-[1.9rem] font-bold bg-light'>Content</h3>
                            <h3 className='w-[135px] text-[1.9rem] font-bold bg-light'>Creation</h3>
                           </div>
                            <div className=' mt-5 lg:mt-0 flex  items-end  justify-between lg:justify-normal lg:w-fit lg:gap-x-3'>
                            <div className='w-[41px] h-[41px] bg-black rounded-full flex justify-center items-center'>
                            <img src={arrowImage} alt="" className='w-[20px]' />
                            </div>
                            <button className=' hidden lg:block font-normal text-[1.2rem]'>Learn More</button>
                            <img src={fifthCartImage} alt="" className=' w-[165px] h-[129px] lg:hidden lg:w-[210px] lg:h-[170px]' />
                           </div>
                        </div>
                       
                         <img src={fifthCartImage} alt="" className='hidden lg:block w-[210px] h-[170px]' />
                         

                    </div>

                    {/* sixth*/}
                    <div className='bg-black w-[600px] h-[310px] flex justify-center items-center
                     gap-x-16 border border-[#191A23] rounded-3xl  shadow-[0_5px_0px_rgba(0,0,0,1)]'>
                        <div className='w-[290px] h-[222px] lg:w-[221px] lg:h-[210px] flex flex-col justify-between'>
                           <div>
                            <h3 className=' w-fit pr-4 text-[1.7rem] lg:text-[1.9rem] font-bold bg-green'>Analytics and </h3>
                            <h3 className='w-[140px] text-[1.9rem] font-bold bg-green'>Tracking</h3>
                           </div>
                            <div className=' mt-5 lg:mt-0 flex  items-end  justify-between lg:justify-normal lg:w-fit lg:gap-x-3'>
                            <div className='w-[41px] h-[41px] bg-light rounded-full flex justify-center items-center'>
                            <img src={arrowImage} alt="" className='w-[20px]' />
                            </div>
                            <button className='hidden lg:block font-normal text-[1.2rem] text-white'>Learn More</button>
                            <img src={sixthCartImage} alt="" className=' w-[165px] h-[129px] lg:hidden lg:w-[210px] lg:h-[170px]' />
                           </div>
                        </div>
                       
                         <img src={sixthCartImage} alt="" className='hidden lg:block w-[210px] h-[170px]' />
                         

                    </div>
                    
                   

                {/* </div> */}

            </div>
        </div>

    </section>
  )
}

export default SeviceBlock