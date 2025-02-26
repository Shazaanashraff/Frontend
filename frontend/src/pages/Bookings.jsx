import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedCourts from '../components/RelatedCourts'
import { toast  } from 'react-toastify'
import axios from 'axios'

const Bookings = () => {

  const {manId} = useParams()
  const {courts, currencySymbol, backendUrl, token, getCourtsData} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate = useNavigate()
  
  const[courtInfo, setCourtInfo] = useState(null)
  const[courtSlots,setCourtSlots] = useState([])
  const[slotIndex,setSlotIndex] = useState(0)
  const[slotTime, setSlotTime] = useState("")

  const fetchCourtInfo = async () => {
    const courtInfo = courts.find(court => court._id === manId)
    setCourtInfo(courtInfo)
    console.log(courtInfo)
  }

  const getAvailableSlots = async () => {
    
    setCourtSlots([])

    let today = new Date()

    for(let i = 0; i < 7; i++){
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30: 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        
        let day = currentDate.getDate()
        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()


        const slotDate = day + "_" + month + "_" + year
        const slotTime = formattedTime

        const isSlotAvailable = courtInfo.slots_booked[slotDate] && courtInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        if (isSlotAvailable){
        //add to slot
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
        }



        //increment time by 30 minutes 
        currentDate.setMinutes(currentDate.getMinutes()+ 30)
      } 

      setCourtSlots(prev => ([...prev,timeSlots]))

      console.log(timeSlots)


    }
    return courts.slots_booked;
  }


  const bookCourt = async () =>{
    if(!token){
      toast.warn("Login to book court")
      return navigate('/login')
    }

    try {
      
      const date = courtSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year
      
      const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {manId, slotDate, slotTime}, {headers: {token}})
      
      if(data.success){
        toast.success(data.message)
        getCourtsData()
        navigate('/my-bookings')

      }else{
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
 
  useEffect(() => {
    fetchCourtInfo()
  }, [courts,manId])

  useEffect(() =>{
    if(courtInfo){
      getAvailableSlots()
    }
  },[courtInfo])

  useEffect(()=>{
    console.log(courtSlots)
  },[courtSlots])



  return courtInfo && (
    <div>
      {/*-------------Doctor Details-------------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg ' src={courtInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
        {/*------------- Details---------- */}
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'> 
          {courtInfo.name}
          <img className='w-5' src={assets.verified_icon} alt="" />
        </p>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>{courtInfo.speciality}</p>
        </div>
        {/*---------doctor about ---------- */}
        <div>
          <div className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
            About
            <img src={assets.info_icon} alt="" />
            <span>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{courtInfo.about}</p>
           </span>
          </div>
        </div>
        <p className='text-gray-500 font-medium mt-4 '>
          Booking fee: <span className='text-gray-600'>{currencySymbol}{courtInfo.fees}</span>
        </p>
        <div>
          <p className='text-gray-800 font-medium mt-2 '>
            <span>Location</span>
            <a
              href={courtInfo.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {courtInfo.address}
            </a>
          </p>
        </div>
      </div>

      </div>
      {/*------------ Booking Slots ------------- */}

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
      <p>Booking Slots</p>
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {
          courtSlots.length  && courtSlots.map((item,index) => (
            <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))
        }
      </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {courtSlots.length && courtSlots[slotIndex].map((item,index)=>(
            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300' } :  `} key={index}>
              {item.time.toLowerCase()}
            </p>
          )) }
        </div>

        <div>
          <button onClick={bookCourt} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>
            Book Court 
          </button>
        </div>

          {/*------Listing related doctors ----- */}
          <RelatedCourts manId={manId} speciality={courtInfo.speciality} />

      </div>


    </div>
  )
}

export default Bookings
