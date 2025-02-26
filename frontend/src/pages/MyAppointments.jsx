import React, { useContext, useEffect, useState } from 'react'
import {AppContext} from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'


const MyBookings = () => {
  
  const {backendUrl, token, getCourtsData} = useContext(AppContext)
  const [bookings, setBookings] = useState([])
  const months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  
    const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]

  }

  

  const getUserBookings = async () => {
    try {
      
      const {data} = await axios.get(backendUrl + '/api/user/my-appointments' , {headers:{token}})


      if(data.success) {
        setBookings(data.bookings.reverse())
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelBooking = async (bookingId) => {
    try {
      
      const {data} = await axios.post(backendUrl + '/api/user/cancel-booking', {bookingId}, {headers:{token}})

      if(data.success){
        toast.success(data.message)
        getUserBookings()
        getCourtsData()
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){
      getUserBookings()
    }
  },[token])





  return ( 
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Bookings</p>
      <div >
        {

        bookings.map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.courtData.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.courtData.name}</p>
              <p>{item.courtData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address: </p>
              <p className='text-xs'>{item.courtData.address}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)}| {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && !item.isCompleted && <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:text-white hover:bg-primary transition-all duration-300'>Pay Online</button>}
              {!item.cancelled && !item.isCompleted && <button onClick={()=> cancelBooking(item._id )} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border over:text-white hover:bg-red-600 transition-all duration-300'>Cancel Booking</button>}
              {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'> Booking cancelled </button>}
            {item.isCompleted && <button className='sm:min-2-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings
