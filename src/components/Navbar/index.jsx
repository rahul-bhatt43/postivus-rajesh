import { useState } from 'react'
import logo from '../../assets/navaimg/Vector (13).svg'
import logoName from '../../assets/navaimg/Positivus.svg'

function Navbar() {
    const [toggle,setToggle] = useState(false)
    const hamburger=()=>{
       setToggle(!toggle)
    }
  return (
    <nav className='mt-[30px] '>
       <div className='w-[90vw] h-[23px] lg:w-[1250px] lg:h-[68px] mx-auto flex 
      relative  justify-between'>
      
            <div className='flex gap-x-2 items-center'>
                <img src={logo} alt="" className='w-[23px] h-[23px] lg:w-[35px] lg:h-[35px]' />
                <img src={logoName} alt="" className='w-[112px] h-[19px] lg:w-[171px] lg:h-[29px]' />

            </div>
             
                <ul className={` z-20 lg:mt-[-10px] absolute  top-[30px] right-0 w-[70vw] h-[100vh] lg:w-fit lg:h-[68px] bg-black lg:bg-transparent text-white flex flex-col 
                items-center  py-8 lg:py-0 lg:flex-row gap-y-12 
                 lg:translate-x-0 lg:gap-x-10 font-space-grotesk font-normal lg:text-[#000000] text-[1.2rem]
                  lg:opacity-[100%] lg:items-baseline
                    ${toggle?'translate-x-[30px] transition-all duration-300':
                    'translate-x-[500px] transition-all duration-300 opacity-0'}` }>
                    <li className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in'> About us</li>
                    <li className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in'>Services</li>
                    <li className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in'>Pricing</li>
                    <li className='cursor-pointer hover:text-red-500 transition-all duration-300 ease-in'>Blog</li>
                    
            <button className=' border lg:border-[#191A23] w-[200px] lg:w-[231px] h-[68px] mt-[-20px]  '>Request a quote</button>
            </ul>
            
            
            {/* <div > */}
                <i className="fa-solid fa-bars text-2xl  lg:hidden" onClick={hamburger} ></i>
            {/* </div> */}

       </div>

    </nav>
  )
}

export default Navbar