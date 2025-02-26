import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddManager = () => {

    const[manImg,SetManImg] = useState(false)
    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    // const [fees,SetFees] = useState('') 
    // const [about,SetAbout] = useState('')
    // const [speciality,SetSpeciality] = useState('Football')
    // const [address,SetAddress] = useState('') 
    // const [latitude,SetLatitude] = useState('')
    // const [longitude,SetLongitude] = useState('')
    const [phone, SetPhone] = useState('')

    
    
    const {backendUrl, aToken} = useContext(AdminContext)
    
    
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
           if(!manImg){
            return toast.error('Image not selected')
           }
           const formData = new FormData()
        
           formData.append('image', manImg)
           formData.append('name', name)
           formData.append('email', email)
           formData.append('password', password)
           formData.append('phone', phone)
        //    formData.append('fees', Number(fees))
        //    formData.append('about', about)
        //    formData.append('speciality', speciality)
        //    formData.append('address', JSON.stringify(address))
        //    formData.append('latitude', Number(latitude))
        //    formData.append('longitude', Number(longitude))

            //consoling form data

            // formData.forEach((value,key)=>{
            //     console.log(`${key} : ${value}`);
            // })

            const {data} = await axios.post(backendUrl + '/api/admin/add-manager', formData, {headers: {aToken}})
            
            if(data.success){
                toast.success(data.message)
                SetManImg(false)
                SetName('')
                SetPassword('')
                SetEmail('')
                // SetAddress('')
                // SetAbout('')
                // SetFees('')
                // SetSpeciality('Football')
                // SetLatitude('')
                // SetLongitude('')
                SetPhone('')


            } else{
                toast.error(data.message)
            }


        } catch (error) {
            toast.error(error.message)
            // console.log(error)
        }

    }











    return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
        <p className='mb-3 text-lg font-medium'>Add Manager</p>
        <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
            <div className='flex items-center gap-4 mb-8 text-gray-500'>
            <label htmlFor="man-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={manImg ?URL.createObjectURL(manImg) : assets.upload_area} alt="" />
            </label> 
            <input onChange={(e)=> SetManImg(e.target.files[0])} type="file" id="man-img" hidden />
            <p>Upload Manager <br /> picture</p>
            
        </div>

        <div className='flex flex-col lg:flex-row item-start gap-10 text-gray-600 '>
            <div className='w-full lg:flex-1 flex-col gap-4'>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Manager name</p>
                    <input onChange={(e)=> SetName(e.target.value)} value ={name} className='border rounded px-3 py-2 w-80' type="text" placeholder='Name' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Manager Email</p>
                    <input onChange={(e)=> SetEmail(e.target.value)} value ={email} className='border rounded px-3 py-2 w-80' type="email" placeholder='Email' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Manager Password</p>
                    <input onChange={(e)=> SetPassword(e.target.value)} value ={password} className='border rounded px-3 py-2 w-80' type="password" placeholder='Password' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Manager Phone</p>
                    <input onChange={(e)=> SetPhone(e.target.value)} value ={phone} className='border rounded px-3 py-2 w-80' type="number" placeholder='Phone' required />
                </div>
                
                {/* <div className='flex-1 flex flex-col gap-1'>
                    <p>Fees</p>
                    <input onChange={(e)=> SetFees(e.target.value)} value ={fees} className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
                </div> */}
            </div>
            {/* <div className='w-full lg:flex-1 flex flex-col gap-4'>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Court type</p>
                    <select onChange={(e)=> SetSpeciality(e.target.value)} value ={speciality} className='border rounded px-3 py-2'>
                    <option value="Football">Football</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Gaming">Gaming</option>
                  <option value="Table Pool">Table Pool</option>
                    </select>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Address</p>
                    <input onChange={(e)=> SetAddress(e.target.value)} value ={address} className='border rounded px-3 py-2' type="text" placeholder='address ' required/>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Longitude</p>
                    <input onChange={(e)=> SetLongitude(e.target.value)} value ={longitude} className='border rounded px-3 py-2' type="number" placeholder='longitude' required/>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Latitude</p>
                    <input onChange={(e)=> SetLatitude(e.target.value)} value ={latitude} className='border rounded px-3 py-2' type="number" placeholder='latitude ' required/>
                </div>

            </div> */}
        </div>
        </div>

                {/* <div>
                    <p className='mt-4 mb-2'>About Manager</p>
                    <textarea onChange={(e)=> SetAbout(e.target.value)} value ={about} className='w-full px-4 pt-2 border-rounded' type="text" placeholder='write about doctor' row={5} required />
                </div> */}
                <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Manager</button>

    </form>
    
    )
}

export default AddManager