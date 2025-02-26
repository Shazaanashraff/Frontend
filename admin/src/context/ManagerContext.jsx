import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const ManagerContext = createContext()

const ManagerContextProvider = (props) => {
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const[dToken, setDToken] = useState(localStorage.getItem('dToken')? localStorage.getItem('dToken'):'')
    const[bookings, setBookings] = useState([])
    const[dashData, setDashData] = useState(false)
    const[profileData, setProfileData] = useState(false)



    const getBookings = async () =>{
        try {
            
            const {data} = await axios.get(backendUrl + '/api/manager/bookings', {headers: {dToken}})

            if (data.success){
                setBookings(data.bookings)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const completeBooking = async (bookingId) => {
        try {
            
            const {data} = await axios.post(backendUrl + '/api/manager/complete-booking', {bookingId}, {headers:{dToken}})

            if(data.success){
                toast.success(data.message)
                getBookings()
            }else{
                toast.error(data.message)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelBooking = async (bookingId) => {
        try {
            
            const {data} = await axios.post(backendUrl + '/api/manager/cancel-booking', {bookingId}, {headers:{dToken}})

            if(data.success){
                toast.success(data.message)
                getBookings()
            }else{
                toast.error(data.message)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
 
    const getDashData = async () => {
        try{

            const {data} = await axios.get(backendUrl + '/api/manager/dashboard' , {headers: {dToken}})
            if(data.success){
                setDashData(data.dashData)
            }else{
                toast.error(data.message)
            }

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }


    const getProfileData = async () =>{
        try{

            const {data} = await axios.get(backendUrl + '/api/manager/profile', {headers:{dToken}})
            if(data.success){
                setProfileData(data.profileData)
            }


        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }


    const value = {
        backendUrl,
        dToken,
        setDToken,
        bookings,
        setBookings,
        getBookings,
        completeBooking,
        cancelBooking,
        dashData,
        setDashData,
        getDashData,
        getProfileData,
        setProfileData,
        profileData
    }




    return (
        <ManagerContext.Provider value={value}>
            {props.children}
        </ManagerContext.Provider>
    )
}

export default ManagerContextProvider