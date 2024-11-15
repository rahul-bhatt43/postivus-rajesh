// import React from 'react'

function ContactUs() {
  return (
    <section className='mt-10'>
        <div className=' bg-light rounded-3xl w-[90vw] h-[540px] lg:w-[1240px] lg:h-[773px] font-space-grotesk mx-auto 
        flex flex-col items-center justify-center lg:justify-center'>
            <form action="
            " className='  lg:ml-[100px] w-[80vw] h-[540px] lg:w-[556px] lg:h-[633px] flex flex-col
            justify-around lg:justify-between'>
                <div className='flex w-[70vw] lg:w-[276px]  
                 justify-between text-[1rem] lg:text-[1.2rem]'>
                    <div className='flex gap-x-3'>
                    <input type="radio" name="tick" id="" className='w-[28px] outline-none' />
                     <label htmlFor="">Say Hi</label>
                    </div>
                    <div className='flex gap-x-4'>
                    <input type="radio" name="tick" id="" className='outline-none w-[28px] text-green' />
                    <label htmlFor="">Get a Quote</label>
                    </div>
                </div>

                <div className='h-[88px] lg:w-[556px] lg:h-[52px]'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" placeholder='Name' 
                    className='outline-none w-[80vw] h-[60px] lg:w-[556px] lg:h-[56px] border border-black pl-8 rounded-xl' />
                </div>

                <div className='h-[88px] lg:w-[556px] lg:h-[52px]'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder='Email' 
                    className='outline-none h-[60px] w-[80vw] lg:w-[556px] lg:h-[56px] border border-black pl-8 rounded-xl' />
                </div>

                <div className='h-[160px] lg:w-[556px] lg:h-[223 px]'>
                    <label htmlFor="">Message</label>
                    <input type="textaria" name="" id="" placeholder='message' 
                    className='outline-none  w-[80vw] lg:w-[556px] h-[132px]
                     lg:h-[190px] border border-black  rounded-xl' />
                </div>

                 <button className='hidden lg:block  lg:w-[556px] text-center rounded-lg lg:h-[68px] bg-black text-white'>Send Message</button>
            </form>
           
        </div>
        <button className='lg:hidden mt-5 w-[80vw] h-[60px] mx-auto flex  items-center justify-center 
         rounded-lg  bg-black text-white'>Send Message</button>
    </section>
  )
}

export default ContactUs