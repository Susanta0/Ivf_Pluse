import React, { useState } from 'react'
import logo from "../../public/ivf-pulse-logo.png"
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const navData=[
    {id:1, title:"Donor Programme", link:""},
    {id:2, title:"Fertility Preservation", link:""},
    {id:3, title:"Advanced Treatments", link:""},
    {id:4, title:"Infertility Treatments", link:""},
    {id:5, title:"IVF Testing", link:""},
    {id:6, title:"About Us", link:""},
]
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
   <>
   <nav className='fixed z-10 border-b border-[#E6E3D2] bg-[#FFFFFF] 
   desktop:w-full desktop:h-[85px] desktop:px-[120px] 
   mobile:px-[20px] mobile:h-[80px] mobile:w-full
   flex justify-between'>
    <img src={logo} alt="ivf_pulse_logo" className='

    desktop:w-[200px] desktop:h-[45px] desktop:mt-[20px]
    mobile:w-[130px] mobile:h-[30px] mobile:mt-[25px] 
    '/>
    <ul 
    // className=' items-center desktop:gap-x-[36px] mobile:gap-x-[14px]
    // laptop:flex
    // mobile:hidden
    // '
    className={`items-center desktop:gap-x-[30px] mobile:gap-x-[14px] 
        laptop:flex
        mobile:${menuOpen ? 'block absolute laptop:static top-[80px] left-0 w-full bg-white px-5' : 'hidden'}
        
    `}
    >
        {navData.map((items, ind)=> (
            
             <li key={items.id} className=''>
                <Link to={items.link} className='font-[600] desktop:text-[16px] mobile:text-[12px]  text-[#1E231E]'>{items.title}</Link>
            </li>
            
        ))}

    <button className='bg-[#D75555] w-[143px] h-[48px] rounded-md flex items-center justify-center gap-x-[8px]'>
        <span className='font-[500] text-base text-[#FFFFFF]'>Talk to Us</span>
        <GoArrowRight className='text-[#FFFFFF]'/>
    </button>
    </ul>

        {/* <GiHamburgerMenu className='h-[24px] w-[24px] laptop:hidden mt-[28px] ' onClick={toggleMenu}/>
        <RxCross2 className='h-[24px] w-[24px] laptop:hidden mt-[28px] '/> */}
        {menuOpen ? (
                    <RxCross2
                        className='h-[24px] w-[24px] laptop:hidden mt-[28px]'
                        onClick={toggleMenu}
                    />
                ) : (
                    <GiHamburgerMenu
                        className='h-[24px] w-[24px] laptop:hidden mt-[28px]'
                        onClick={toggleMenu}
                    />
                )}
   </nav>
   </>
  )
}

export default Navbar