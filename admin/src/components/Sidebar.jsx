import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ManagerContext } from '../context/ManagerContext'

const Sidebar = () => {
    
    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(ManagerContext)
    
    
    return (
        <div className='min-h-screen bg-white border-r'>
            {
                aToken && <ul className='text-[#515151] mt-5'>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/admin-dashboard'}>
                        <img src={assets.home_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/all-bookings'}>
                        <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'>Bookings</p>
                    </NavLink>

                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/add-manager'}>
                        <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'> Add Manager</p>
                    </NavLink>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/manager-list'}>
                        <img src={assets.people_icon } alt="" />
                    <p className='hidden md:block'>Managers List</p>
                    </NavLink>
                </ul>
            }
            {
                dToken && <ul className='text-[#515151] mt-5'>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/manager-dashboard'}>
                        <img src={assets.home_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/manager-bookings'}>
                        <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'>Bookings</p>
                    </NavLink>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/manager-profile'}>
                        <img src={assets.people_icon } alt="" />
                    <p className='hidden md:block'>Profile</p>
                    </NavLink>
                    <NavLink className={({isActive})=> `flex items-center gap-3 cursor-pointer py-3.5 px-3 md:px-9 md:min-w-72 ${isActive ? `bg-[#F2F3FF] border-r-4 border-primary`: ''}`} to={'/add-courts'}>
                        <img src={assets.people_icon } alt="" />
                    <p className='hidden md:block'>Add Courts</p>
                    </NavLink>
                </ul>
            }
        </div>
    )
}

export default Sidebar