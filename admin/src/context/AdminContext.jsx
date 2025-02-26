import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
   
    const [aToken, setAToken] = useState(localStorage.getItem('aToken')? localStorage.getItem('aToken'):'')
    const [managers, setManagers] = useState([])
    const [bookings, setBookings] = useState([])
    const [dashData, setDashData] = useState(false)


    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllManagers = async ()=> {
        try{

            const {data} = await axios.post(backendUrl + '/api/admin/all-courts', {}, {headers:{aToken}} )
            if(data.success){
                setManagers(data.managers)
            }else{
                toast.error(data.message)
            }

        }catch(error){

            toast.error(error.message)
        }
    }

    const changeAvailability = async (manId) =>{
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/change-availability',{manId}, {headers: {aToken}})
            if(data.success){
                toast.success(data.message)
                getAllManagers()
            }else{
                toast.error(data.message)
            }


        } catch (error) {
            toast.error(error.message)
        }
    }


    const getAllBookings = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/bookings', { headers: { aToken } })
            if (data.success) {
                setBookings(data.bookings)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelBooking = async (bookingId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/cancel-bookings', { bookingId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
            if (data.success) {
                setDashData(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken,setAToken,
        backendUrl,managers,
        getAllManagers, changeAvailability,
        bookings,setBookings,
        getAllBookings,cancelBooking,
        dashData,setDashData,getDashData
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider