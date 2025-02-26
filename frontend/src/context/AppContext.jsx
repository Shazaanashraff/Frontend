import { createContext } from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import {toast} from 'react-toastify'




export const AppContext = createContext()

const AppContextProvider = (props) =>{


    const currencySymbol = '$'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [courts, setCourts] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || false)
    const [userData, setUserData] = useState(false)


    const getCourtsData = async () => {
        try {
            
            const {data} = await axios.get(backendUrl + '/api/manager/list')
            if (data.success) {
               setCourts(data.courts)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)

        }
    }




    const loadUserProfileData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers: {token}})
            if(data.success){
                setUserData(data.userData)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    
    const value = {
        courts,setCourts,
        getCourtsData,
        currencySymbol,
        token,setToken,
        backendUrl, 
        userData, setUserData,
        loadUserProfileData,
    }

    


    useEffect(() => {
        getCourtsData()
    }, [])

    useEffect(() => {
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    }, [token])


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContextProvider