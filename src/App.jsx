
import { useContext } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import { AuthContext } from './context/ContextApi'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";


function App() {

  const {storeData:{status}, resetData}= useContext(AuthContext)
  return (
    <>
      <div className={`
         desktop:w-[1728px] desktop:h-[993px]
         mobile:h-[879px]
         mobile:w-full  ${status? 'bg-[#303030]':'bg-[#FCFAF5]'}`}>
        <Navbar/>
         {/* Breadcrumbs */}
      <div className='laptop:px-[120px] mobile:px-[20px] flex items-center gap-[15px] laptop:pt-[125px] mobile:pt-[97px]'>
          <p className={`text-[#1E231E] font-medium text-base mobile:hidden laptop:flex ${status && 'text-[#FFFFFF] font-normal'}`}>Home</p>
      <p className={`text-[#000000] font-medium text-base mobile:hidden laptop:flex ${status && 'text-[#FFFFFF] font-normal'}`}>/</p>
      <BsArrowLeft className=' mobile:flex laptop:hidden laptop:text-black mobile:text-white'/>
          <Link to="/" onClick={resetData} className={`text-[#1E231E] laptop:text-base mobile:text-[18px] ${status ? 'text-[#FFFFFF] font-normal' : 'font-semibold'}`}>IVF Success Rate Calculator</Link>
          {status && <Link className='text-[#FFFFFF] font-semibold text-base mobile:hidden laptop:flex'>/ &nbsp; Result</Link> }
          
      </div>
        <AllRoutes />
      </div>
    </>
  )
}

export default App
