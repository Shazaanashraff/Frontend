import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import {toast} from 'react-toastify'
import axios from 'axios'
import { ManagerContext } from '../../context/ManagerContext'



const AddCourts = () => {

    const [name, SetName] = useState('')
    const [available, SetAvailable] = useState(true)
    const [courtImg,SetCourtImg] = useState(false)
    const [fees,SetFees] = useState('') 
    const [about,SetAbout] = useState('')
    const [speciality,SetSpeciality] = useState('Football')
    const [address,SetAddress] = useState('') 
    const [latitude,SetLatitude] = useState('')
    const [longitude,SetLongitude] = useState('')
    const [openTime, SetOpenTime] = useState('')
    const [closeTime, SetCloseTime] = useState('')

    const {backendUrl, dToken} = useContext(ManagerContext)
    





    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        try {
           if(!courtImg){
            return toast.error('Image not selected')
           }
           const formData = new FormData()
        

            formData.append('name', name)
            formData.append('image', courtImg)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('address', address)
            formData.append('latitude', Number(latitude))
            formData.append('longitude', Number(longitude))
            formData.append('available', available === "true")
            formData.append("openTime", openTime);
            formData.append("closeTime",closeTime);

            //consoling form data

            // formData.forEach((value,key)=>{
            //     console.log(`${key} : ${value}`);
            // })

            const {data} = await axios.post(backendUrl + '/api/manager/add-courts', formData, {headers: {dToken}})
            
            if(data.success){
                toast.success(data.message)
                SetCourtImg(false)
                SetName('')
                SetAddress('')
                SetAbout('')
                SetFees('')
                SetSpeciality('Football')
                SetLatitude('')
                SetLongitude('')
                SetAvailable(true)
                SetOpenTime('')
                SetCloseTime('')


            } else{
                toast.error(data.message)
            }


        } catch (error) {
            toast.error(error.message)
            // console.log(error)
        }

    }











    return ( dToken &&
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
        <p className='mb-3 text-lg font-medium'>Add Court</p>
        <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
            <div className='flex items-center gap-4 mb-8 text-gray-500'>
            <label htmlFor="court-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={courtImg ?URL.createObjectURL(courtImg) : assets.upload_area} alt="" />
            </label> 
            <input onChange={(e)=> SetCourtImg(e.target.files[0])} type="file" id="court-img" hidden />
            <p>Upload Court <br /> picture</p>
            
        </div>

        <div className='flex flex-col lg:flex-row item-start gap-10 text-gray-600 '>
            <div className='w-full lg:flex-1 flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
                    <p>Name</p>
                    <input onChange={(e)=> SetName(e.target.value)} value ={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                </div> 
                <label>Open Time:</label>
            <input 
                type="time" 
                value={openTime} 
                onChange={(e) => SetOpenTime(e.target.value)}
            />

            <label>Close Time:</label>
            <input 
                type="time" 
                value={closeTime} 
                onChange={(e) => SetCloseTime(e.target.value)}
            />

            <div>
                <label>
                <input type="checkbox" checked={available} onChange={()=> SetAvailable(!available)} />
                Available
                </label>

            </div>

                <div className='flex-1 flex flex-col gap-1'>
                    <p>Fees</p>
                    <input onChange={(e)=> SetFees(e.target.value)} value ={fees} className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
                </div> 
            </div>
             <div className='w-full lg:flex-1 flex flex-col gap-4'>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Speciality</p>
                    <select onChange={(e)=> SetSpeciality(e.target.value)} value ={speciality} className='border rounded px-3 py-2'>
                    <option value="Football">Football</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Gaming">Gaming</option>
                  <option value="Table Pool">Table Pool</option>
                    </select>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Address</p>
                    <input onChange={(e)=> SetAddress(e.target.value)} value ={address} className='border rounded px-3 py-2' type="text" placeholder='Address ' required/>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Longitude</p>
                    <input onChange={(e)=> SetLongitude(e.target.value)} value ={longitude} className='border rounded px-3 py-2' type="number" placeholder='longitude' required/>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Latitude</p>
                    <input onChange={(e)=> SetLatitude(e.target.value)} value ={latitude} className='border rounded px-3 py-2' type="number" placeholder='latitude ' required/>
                </div>

            </div> 
        </div>
        </div>

                 <div>
                    <p className='mt-4 mb-2'>About Court</p>
                    <textarea onChange={(e)=> SetAbout(e.target.value)} value ={about} className='w-full px-4 pt-2 border-rounded' type="text" placeholder='write about doctor' row={5} required />
                </div> 
                <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Court</button>

    </form>
    
    )
}

export default AddCourts