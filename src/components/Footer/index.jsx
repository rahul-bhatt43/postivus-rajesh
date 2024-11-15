// import React from "react";
import logo from "../../assets/footer/Vector (17).svg";

function Footer() {
  return (
    <footer className="mt-20 font-space-grotesk mb-10">
      <div
        className=" mx-auto rounded-3xl w-[100vw] h-[960px]  lg:w-[1241px] lg:h-[514px] bg-dark
        flex flex-col  justify-around items-center space-y-"
      >
        <div
          className=" w-[100vw] h-[800px] lg:w-[1121px]  lg:h-[281px] 
            flex flex-col space-y-10 lg:space-y-0 lg:justify-between items-center "
        >
          <div className="w-[100vw]   lg:h-fit  lg:w-full flex flex-col lg:flex-row 
          space-y-10 lg:space-y-0 justify-between">
            <div className="flex gap-x-2 h-[30px] justify-center lg:justify-normal items-center">
              <img src={logo} alt="" className="w-[29px] h-[28px]" />
              <h3 className="text-white font-semibold text-[1.5rem]">
                Positivus
              </h3>
            </div>

            <ul className="w-[100px] h-[200px] lg:w-[501px] mx-auto lg:h-[23px] flex
             flex-col lg:flex-row  justify-between   text-[#FFFFFF] text-[1.2rem] lg:text-[1.2rem]">
              <li>About us</li>
              <li>Services</li>
              <li>Use cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>

            <div className="hidden order-100  lg:w-[130px] h[30px] lg:flex justify-between">
              <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ffff]">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ffff]">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className=" flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ffff]">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="w-[100vw]  lg:w-[1120px] mx-auto  flex flex-col lg:flex-row justify-between
           space-y-10 lg:space-y-0">
            <div className="mx-auto lg:mx-0 w-[295px] lg:w-[332px] lg:h-[185px]  text-[#fff] flex 
            flex-col justify-between lg:items-start items-center ">
              <h4
                className="bg-green text-[1.3rem] text-black font-medium 
                    w-fit px-1 mx-auto lg:mx-0 "
              >
                Contact us:
              </h4>
              <p className="">Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <div className="flex flex-col items-center lg:items-start">
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345 </p>
              </div>
            </div>

            <div
              className=" w-[90vw] mx-auto lg:mx-0 h-[216px] lg:w-[634px] lg:h-[184px] bg-[#292A32] rounded-lg 
              flex flex-col lg:flex-row justify-center items-center
                gap-y-4 lg:gap-x-4"
            >
              <input
                type="Email"
                placeholder="Email"
                className=" w-[330px] h-[66px] lg:w-[285px] lg:h-[67px] bg-black border
                    rounded-lg border-[#FFFFFF] pl-5 placeholder:text-white "
              />
              <button className="w-[330px] h-[66px] lg:w-[249px] lg:h-[68px] text-[1.3rem] text-black rounded-lg bg-green">
                Subscribe to news
              </button>
            </div>

            <div className=" lg:hidden  w-[50vw] mx-auto h[30px] flex justify-between">
              <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ffff]">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ffff]">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className=" flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#ffff]">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80vw]   lg:w-[1120px] lg:h-[78px] border-t flex ">
          <div className="text-[#fff] flex flex-col lg:flex-row mt-5 lg:mt-0
           items-center lg:items-start gap-x-7 gap-y-8 self-end">
            <p>© 2024 Positivus. All Rights Reserved.</p>
            <p>Privacy Polciy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
