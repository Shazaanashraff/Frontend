import React from 'react'
import {assets} from '../assets/assets'
import {AdminContext} from '../context/AdminContext'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { ManagerContext} from '../context/ManagerContext' 

const Navbar = () => {
   
   
   const {aToken,setAToken} = useContext(AdminContext)
   const{dToken, setDToken} = useContext(ManagerContext)

   const navigate = useNavigate()
   
   
   const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')

}

    return (
        <div className='flex justify-between items-center px-4 bg-white sm:px-4 border-b py-3'>
            <div className='flex items-center gap-2 text-sm'>
                <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500'>{aToken 
                ? 'Admin'
                : 'Manager'} </p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar