import React, { useState } from 'react'

function ProcessBlock() {
    // const [toggle,setToggle] = useState(false)
    // const handler= ()=>{
    //     setToggle(!toggle)
    //     console.log("handler called")
    // }

    const [toggle, setToggles] = useState({
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        card6: false,
    });

    const handler = (card) => {
        setToggles((prevToggles) => ({
            ...prevToggles,
            [card]: !prevToggles[card], // Toggle the specific card's state
        }));
        console.log("handler called for", card);
    };
  return (
    <section className='mt-20 mb-4  h-[800px] lg:min-h-[1000p]  lg:h-[1000px]  '>
        <div className='w-[100vw]  lg:w-[1250px] h-[1000px] mx-auto space-y-8 flex flex-col items-center font-space-grotesk'>
           
        <div className=' w-[90vw] text-center lg:w-fit  gap-y-5 flex gap-x-7 flex-col items-center lg:flex-row lg:self-start  mb-10 '>
         <h3 className='bg-green text-[2.3rem]   font-medium lg:text-[2.5rem]'>Our Working Process </h3>
         <div className='text-center lg:text-start lg:w-[580px] text-[1.1rem] hidden lg:block'>
            <p>
            Step-by-Step Guide to Achieving Your Business Goals
            </p>
         </div>
       </div>
            {/* first */}
            <div className={`w-[95vw] shadow-[0_3px_0px_rgba(0,0,0,1)]  rounded-3xl ${toggle.card1?'bg-green':'bg-light'} lg:w-[1234px]  border-black flex 
            flex-col border space-y-5 lg:space-y-8 items-center justify-center  `}>
                <div className='w-[90vw] lg:w-[1117px] flex justify-between items-center  '>
                <div className='  flex items-center gap-x-5 h-'>
                    <h3 className='font-medium text-[1.9rem] lg:text-[3.8rem] text-[#000000]'>01</h3>
                    <p className='font-medium text-[1.1rem] lg:text-[1.9rem] text-[#000000]'>Consultaion</p>
                </div>
                <div className='w-[30px]  border border-black
                flex items-center justify-center font-medium h-[30px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#F3F3F3]'>
                <button onClick={()=>handler('card1')} className='text-2xl lg:text-4xl'>{toggle.card1 ?'-':'+'}</button>
                 </div> 
                </div>
                <div className={`bg-[#7e7f84] w-[90vw]   lg:w-[1117px] h-[1px] ${toggle.card1?'block':'hidden'}`}></div>
                
                <p className={` w-[90vw] lg:w-[1117px] font-normal text-[1.1rem] text-black pb-7
                    ${toggle.card1 ?'block':'hidden'} `}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to
                understand your needs and tailor our services to best fit your requirements.</p>
            </div>

            {/* second */}
            <div className={`w-[95vw] shadow-[0_3px_0px_rgba(0,0,0,1)]  rounded-3xl ${toggle.card2?'bg-green':'bg-light'} lg:w-[1234px]  border-black flex 
            flex-col border space-y-5 lg:space-y-8 items-center justify-center  `}>
                <div className='w-[90vw] lg:w-[1117px] flex justify-between items-center  '>
                <div className='  flex items-center gap-x-5 h-'>
                    <h3 className='font-medium text-[1.9rem] lg:text-[3.8rem] text-[#000000]'>02</h3>
                    <p className='font-medium text-[1.1rem] lg:text-[1.9rem] text-[#000000]'>
                    Research and Strategy Development</p>
                </div>
                <div className='w-[30px] border border-black
                flex items-center justify-center font-medium h-[30px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#F3F3F3]'>
                <button onClick={()=>handler('card2')} className='text-2xl lg:text-4xl'>{toggle.card2 ?'-':'+'}</button>
                 </div> 
                </div>
                <div className={`bg-[#7e7f84] w-[90vw]   lg:w-[1117px] h-[1px] ${toggle.card2?'block':'hidden'}`}></div>
                
                <p className={` w-[90vw] lg:w-[1117px] font-normal text-[1.1rem] text-black pb-7
                    ${toggle.card2 ?'block':'hidden'} `}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to
                understand your needs and tailor our services to best fit your requirements.</p>
            </div>

            {/* third */}
            <div className={`w-[95vw] shadow-[0_3px_0px_rgba(0,0,0,1)]  rounded-3xl ${toggle.card3?'bg-green':'bg-light'} lg:w-[1234px]  border-black flex 
            flex-col border space-y-5 lg:space-y-8 items-center justify-center  `}>
                <div className='w-[90vw] lg:w-[1117px] flex justify-between items-center  '>
                <div className='  flex items-center gap-x-5 h-'>
                    <h3 className='font-medium text-[1.9rem] lg:text-[3.8rem] text-[#000000]'>03</h3>
                    <p className='font-medium text-[1.1rem] lg:text-[1.9rem] text-[#000000]'>
                    Implementation</p>
                </div>
                <div className='w-[30px] border border-black
                flex items-center justify-center font-medium h-[30px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#F3F3F3]'>
                <button onClick={()=>handler('card3')} className='text-2xl lg:text-4xl'>{toggle.card3 ?'-':'+'}</button>
                 </div>
                </div>
                <div className={`bg-[#7e7f84] w-[90vw]   lg:w-[1117px] h-[1px] ${toggle.card3?'block':'hidden'}`}></div>
                
                <p className={` w-[90vw] lg:w-[1117px] font-normal text-[1.1rem] text-black pb-7
                    ${toggle.card3 ?'block':'hidden'} `}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to
                understand your needs and tailor our services to best fit your requirements.</p>
            </div>

            {/* forth */}
            <div className={`w-[95vw] shadow-[0_3px_0px_rgba(0,0,0,1)]  rounded-3xl ${toggle.card4?'bg-green':'bg-light'} lg:w-[1234px]  border-black flex 
            flex-col border space-y-5 lg:space-y-8 items-center justify-center  `}>
                <div className='w-[90vw] lg:w-[1117px] flex justify-between items-center  '>
                <div className='  flex items-center gap-x-5 h-'>
                    <h3 className='font-medium text-[1.9rem] lg:text-[3.8rem] text-[#000000]'>04</h3>
                    <p className='font-medium text-[1.1rem] lg:text-[1.9rem] text-[#000000]'>
                    Monitoring and Optimization</p>
                </div>
                <div className='w-[30px] border border-black
                flex items-center justify-center font-medium h-[30px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#F3F3F3]'>
                <button onClick={()=>handler('card4')} className='text-2xl lg:text-4xl'>{toggle.card4 ?'-':'+'}</button>
                 </div>
                </div>
                <div className={`bg-[#7e7f84] w-[90vw]   lg:w-[1117px] h-[1px] ${toggle.card4?'block':'hidden'}`}></div>
                
                <p className={` w-[90vw] lg:w-[1117px] font-normal text-[1.1rem] text-black pb-7
                    ${toggle.card4 ?'block':'hidden'} `}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to
                understand your needs and tailor our services to best fit your requirements.</p>
            </div>

            {/* fifth */}
            <div className={`w-[95vw] shadow-[0_3px_0px_rgba(0,0,0,1)]  rounded-3xl ${toggle.card5?'bg-green':'bg-light'} lg:w-[1234px]  border-black flex 
            flex-col border space-y-5 lg:space-y-8 items-center justify-center  `}>
                <div className='w-[90vw] lg:w-[1117px] flex justify-between items-center  '>
                <div className='  flex items-center gap-x-5 h-'>
                    <h3 className='font-medium text-[1.9rem] lg:text-[3.8rem] text-[#000000]'>05</h3>
                    <p className='font-medium text-[1.1rem] lg:text-[1.9rem] text-[#000000]'>
                    Reporting and Communication</p>
                </div>
                <div className='w-[30px] border border-black
                flex items-center justify-center font-medium h-[30px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#F3F3F3]'>
                <button onClick={()=>handler('card5')} className='text-2xl lg:text-4xl'>{toggle.card5 ?'-':'+'}</button>
                 </div>
                </div>
                <div className={`bg-[#7e7f84] w-[90vw]   lg:w-[1117px] h-[1px] ${toggle.card5?'block':'hidden'}`}></div>
                
                <p className={` w-[90vw] lg:w-[1117px] font-normal text-[1.1rem] text-black pb-7
                    ${toggle.card5 ?'block':'hidden'} `}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to
                understand your needs and tailor our services to best fit your requirements.</p>
            </div>

            {/* sisth */}
            <div className={`w-[95vw] shadow-[0_3px_0px_rgba(0,0,0,1)]  rounded-3xl ${toggle.card6?'bg-green':'bg-light'} lg:w-[1234px]  border-black flex 
            flex-col border space-y-5 lg:space-y-8 items-center justify-center  `}>
                <div className='w-[90vw] lg:w-[1117px] flex justify-between items-center  '>
                <div className='  flex items-center gap-x-5 h-'>
                    <h3 className='font-medium text-[1.9rem] lg:text-[3.8rem] text-[#000000]'>06</h3>
                    <p className='font-medium text-[1.1rem] lg:text-[1.9rem] text-[#000000]'>
                    Continual Improvement
                    </p>
                </div>
                <div className='w-[30px] border border-black
                flex items-center justify-center font-medium h-[30px] lg:w-[58px] lg:h-[58px] rounded-full bg-[#F3F3F3]'>
                <button onClick={()=>handler('card6')} className='text-2xl lg:text-4xl'>{toggle.card6 ?'-':'+'}</button>
                 </div>
                </div>
                <div className={`bg-[#7e7f84] w-[90vw]   lg:w-[1117px] h-[1px] ${toggle.card6?'block':'hidden'}`}></div>
                
                <p className={` w-[90vw] lg:w-[1117px] font-normal text-[1.1rem] text-black pb-7
                    ${toggle.card6 ?'block':'hidden'} `}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to
                understand your needs and tailor our services to best fit your requirements.</p>
            </div>

        
           
           
        </div>
    </section>
  )
}

export default ProcessBlock