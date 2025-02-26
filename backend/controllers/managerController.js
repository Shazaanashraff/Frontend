import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import managerModel from '../models/managerModel.js'
import bookingModel from '../models/BookingModel.js'
import { v2 as cloudinary } from 'cloudinary'
import courtModel from '../models/courtModel.js'


const changeAvailability = async (req,res) =>{
    try {
        
        const {manId} = req.body

        const manData = await  managerModel.findById(manId)
        await managerModel.findByIdAndUpdate(manId, {available: !manData.available})
        res.json({
            success:true,
            message: 'Availablity changed'
        })

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}

const courtsList = async (req, res) => {
    try {
        
        const courts = await courtModel.find({})

        res.json({success:true, courts})

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
}

}


//API for doctor logging
const loginManager = async (req, res) => {
    try{

        const {email, password} = req.body

        const manager = await managerModel.findOne({email})

        if(!manager){
            return res.json({
                success:false,
                message:'Doctor not found'
            })
        }
        
        const isMatch = await bcrypt.compare(password, manager.password)

        if(isMatch){
            const token = jwt.sign({id:manager._id}, process.env.JWT_SECRET)
            res.json({
                success:true,
                token,
            })
                
        }else{
            res.json({
                success:false,
                message:'Invalid credentials'
            })
        }
        
       
    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}


//API to get doctor appointments for doctor panel
const bookingsManager = async (req, res) => {
    try {
        
        const {docId} = req.body
        const bookings = await bookingModel.find({docId})

        res.json({
            success: true,
            bookings
        })

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }
}

//API to appointment complete in doctor panel
const bookingComplete = async (req, res) =>{
    try {
        
        const {manId, bookingId} = req.body
        const bookingData = await bookingModel.findById(bookingId)

        if(bookingData && bookingData.manId === manId){
            await bookingModel.findByIdAndUpdate(bookingId, {isCompleted : true})
            return res.json({
                success:true,
                message: "Booking completed"
            })
        }else{
            return res.json({
                success:false,
                message: "Failed to complete"
            })
        }


    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

//API to appointment cancel in doctor panel
const bookingCancel = async (req,res) =>{
    try {
        
        const {manId, bookingId} = req.body
        const bookingData = await bookingModel.findById(bookingId)

        if(bookingData && bookingData.manId === manId){
            await bookingModel.findByIdAndUpdate(bookingId, {cancelled : true})
            return res.json({
                success:true,
                message: "Booking cancelled"
            })
        }else{
            return res.json({
                success:false,
                message: "Failed to cancel"
            })
        }


    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}


//API to get dashboard data for doctor panel

const managerDashboard = async (req,res) => {
    try{

        const {manId} = req.body 
        const bookings = await bookingModel.find({manId})

        let earnings = 0;

        bookings.map((item) => {
            if(item.isCompleted || item.payment){
                earnings += item.amount
            }
        });

        let Users = []

        bookings.map((item) =>{
            if(!Users.includes(item.userId)) {
                Users.push(item.userId)
            }
        });


        const dashData = {
            earnings, 
            bookings: bookings.length,
            Users: Users.length,
            latestBookings: bookings.reverse().slice(0,5)

        }

        res.json({
            success:true,
            dashData
        })

    }catch(error){
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}


//API to get doctor profile in doctor panel

const managerProfile = async (req,res) =>{
    try{


        const{manId} = req.body
        console.log(manId)
        const profileData = await courtModel.find({manId}).select('-password')
        console.log("profile DATA: ", profileData)
        res.json({
            success:true,
            profileData
        })

    }catch (error) {
        console.error("Error adding court:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
       
}

//API to update doctor profile from doctor panel

const updateManagerProfile = async (req,res) =>{
    try{

        const {manId, fees, address, available} = req.body

        await courtModel.findOneAndUpdate({manId}, {fees, address, available})
        res.json({
            success:true,
            message: 'Profile Updated'
        })


    }catch(error){
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}

const addCourts = async (req,res) =>{
    try {

        const manId = req.user?.id;
        const { name, address, about, available, fees, speciality, latitude, longitude, openTime, closeTime} = req.body
        const imageFile = req.file


        if (!manId) {
            return res.status(400).json({
                success: false,
                message: "Manager ID is missing",
            });
        }


        // checking all data to add court
        if( !name || !address || !about || available === undefined || available === null || !fees  || !speciality || !latitude || !longitude || !openTime || !closeTime){
            return res.json({
                success:false,
                message:"missing details",
            })
        }

        //adding image
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        //generating link for address
         const generateGoogleMapsLink = (address) => {
             const encodedAddress = encodeURIComponent(address);
             return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
           };

      
        const courtData = {
            manId,
            name,
            location: address,
            about,
            available,
            fees,
            speciality,
            latitude,
            longitude,
            openTime,
            closeTime,
            locationLink : generateGoogleMapsLink(address),
            image:imageUrl,

        }
        console.log(courtData)

        const newCourt = new courtModel(courtData)
        await newCourt.save()

        res.json({
            success: true,
            message: "Court added"
        })



        
    } catch (error) {
        console.error("Error adding court:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
    
}



export {addCourts ,changeAvailability, courtsList, loginManager, bookingsManager, bookingCancel, bookingComplete, managerDashboard, managerProfile, updateManagerProfile}