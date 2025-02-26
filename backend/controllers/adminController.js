import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary } from "cloudinary"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js"
import managerModel from "../models/managerModel.js"
import bookingModel from "../models/BookingModel.js"



//API for adding manager

const addManager = async (req,res) => {
    try{

        const {name, email, password, phone} = req.body
        const imageFile = req.file

        //cheking for all data to add doctor 
        if(!name || !email || !password || !phone){
            return res.json({
                success:false,
                message:"missing details",
            })
        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter valid email",
            })
        }

        //validating strong password
        if(password.length < 8){
            return res.json({
                success:false,
                message:"Please enter strong password",
            })
        }

        // hashing password doctor
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        // //generating link for address
        // const generateGoogleMapsLink = (address) => {
        //     const encodedAddress = encodeURIComponent(address);
        //     return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        //   };

        //saving in db
        const managerData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            // speciality,
            // about,
            // fees,
            // address:JSON.parse(address),
            // date:Date.now(),
            // locationLink: generateGoogleMapsLink(address),
            // latitude,
            // longitude,
            phone,
        }

        const newManager = new managerModel(managerData)
        await newManager.save()

        res.json({
            success:true,
            message: "manager added"
        })



        

    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}



// API for admin login

const loginAdmin = async (req,res) =>{
    try{
        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({
                success:true,
                token
            })

        }else{
            res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }

    }catch (error) {
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}


//api to get all managers list for admin panel
const allCourts = async (req,res) =>{
    try{

        const managers = await managerModel.find({}).select('-password')
        res.json({
            success:true,
            managers
        })



    }catch(err){ 
        console.log(err)
        res.json({
            success:false,
            message: err.message
        })
    }
}

//API to get all appointments list

const bookingAdmin = async (req,res) =>{
    try {
        
        const bookings = await bookingModel.find({})
        res.json({
            success:true,
            bookings})

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}

//API for appointment cancellation
const bookingCancel = async (req,res) => {
    try {
        const { bookingId } = req.body;

        const bookingData = await bookingModel.findById(bookingId);

        if (!bookingData) {
            return res.json({
                success: false,
                message: "Booking not found"
            });
        }

        // Delete appointment
        await bookingModel.findByIdAndUpdate(bookingId, { cancelled: true });

        // Releasing doctor slot
        const { manId, slotDate, slotTime } = bookingData;
        const manData = await managerModel.findById(manId).select('-password');
        let slots_booked = manData.slots_booked;

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);

        await managerModel.findByIdAndUpdate(manId, { slots_booked });

        res.json({
            success: true,
            message: "Appointment cancelled"
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};


//API to get dashboard data for admin panel

const adminDashboard = async (req,res) =>{
    try{

        const managers = await managerModel.find({})
        const users = await userModel.find({})
        const bookings = await bookingModel.find({})
        const courts = await courtModel.find({})

        const dashData = {
            managers: managers.length,
            bookings: bookings.length,
            users: users.length,
            courts: courts.length,
            latestBookings: bookings.reverse().slice(0,5)
        }
        res.json({
            success:true,
            dashData
        })

    }catch (error){
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
}




export {addManager,loginAdmin,allCourts, bookingAdmin,bookingCancel,adminDashboard};