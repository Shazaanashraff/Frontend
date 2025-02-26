import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Courts = () => {

  const navigate = useNavigate();
  
  const {speciality} = useParams()

  
  const [filterMan, setFilterMan] = useState([])
  const {courts} = useContext(AppContext)
  const[showFilter, SetShowFilter] = useState(false)


  const applyFilter = () => {
    if(speciality){
      setFilterMan(courts.filter(man => man.speciality === speciality))
    }
    else{
      setFilterMan(courts)
    }
  }

  useEffect(()=> {
    applyFilter()
  },[courts,speciality])

    return (
    <div>
      <p className='text-gray-600'>Browse through our wide range of courts</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=> SetShowFilter(prev => !prev)} >Filter</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'Football' ? navigate('/courts') : navigate('/courts/Football')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Football" ? "bg-indigo-100 text-black": ""}`}>Football</p>
          <p onClick={()=> speciality === 'Cricket' ? navigate('/courts') : navigate('/courts/Cricket')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cricket" ? "bg-indigo-100 text-black": ""}`}>Cricket</p>
          <p onClick={()=> speciality === 'Swimming' ? navigate('/courts') : navigate('/courts/Swimming')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Swimming" ? "bg-indigo-100 text-black": ""}`}>Swimming</p>
          <p onClick={()=> speciality === 'Table Pool' ? navigate('/courts') : navigate('/courts/Table Pool')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Table Pool" ? "bg-indigo-100 text-black": ""}`}>Table Pool</p>
          <p onClick={()=> speciality === 'Gaming' ? navigate('/courts') : navigate('/courts/Gaming')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gaming" ? "bg-indigo-100 text-black": ""}`}>Gaming</p>
          <p onClick={()=> speciality === 'Badminton' ? navigate('/courts') : navigate('/courts/Badminton')} className={`w-[94Vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Badminton" ? "bg-indigo-100 text-black": ""}`}>Badminton</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterMan.map((item,index)=>(
              <div onClick={()=>navigate(`/bookings/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                  <div className={`flex flex-center gap-2 text-sm text-center ${item.available ? ' text-green-500' : 'text-gray-500'}`}>
                       <p className={`w-2 h-2 ${item.available ? 'bg-green-500'  : 'bg-gray-500' }  rounded-full`}></p>
                       <p>{item.available ? 'Available' : 'Not Available'}</p> 
                    </div>
                      <p className='text-gray-900 bg-green-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Courts
