import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken' 
import {v2 as cloudinary} from 'cloudinary'
import managerModel from '../models/managerModel.js'
import bookingModel from '../models/BookingModel.js'
import courtModel from '../models/courtModel.js'

// API to register user 

const registerUser = async (req,res) => {
    try{
        const {name , email, password} = req.body

        if (!name || !password || !email){
            return res.json({
                success:false,
                message:'missing details'
            })
        }

        // validating email format
        if (!validator.isEmail(email)){
            return res.json({
                success:false,
                message: "enter valid email"
            })
        }


        //validating strong password
        if (password.length < 8){
            return res.json({
                success:false,
                message: "enter strong password"
            })
        }

        //hashing password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password:hashedPassword
        }

        //save user data in database
        const newUser = await userModel(userData)
        const user = await newUser.save()

        // _id
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.json({
            success:true,
            message:'user registered successfully',
            token
        })
        
    }catch (error){
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}


//API for user Login
const loginUser = async (req,res) => {
    try{
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({
                success:false,
                message:'user not found'
            })
        }

        //comparing password
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({
                success:true,
                message:'user logged in successfully',
                token
            })
        }else{
            res.json({
                success:false,
                message:'invalid credentials'
            })
        }


    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}

//API to get user profile data

const getProfile = async (req,res) => {
    try{
        const {userId} = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({
            success:true,
            userData
        })
       }catch(error){
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}


//API to update user profile data

const updateProfile = async (req,res) => {
    try{
        const {userId, name, phone, address, dob, gender } = req.body
        const imageFile = req.file 
        if(!name || !phone || !address || !dob || !gender){
            return res.json({
                success:false,
                message:'missing details'
            })
        }
        await userModel.findByIdAndUpdate(userId, { name, phone, address:JSON.parse(address), dob , gender})
        
        if(imageFile){
            //upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'})
            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, {image:imageUrl})
        }

        res.json({
            success:true,
            message:'profile updated successfully'
        })



    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })

    }
}


//API to book appointment

const bookAppointment = async (req,res) => {
    try {
        
        const {userId, manId, slotDate, slotTime} = req.body
        console.log(slotTime)

        const courtData = await courtModel.findById(manId).select('-password')

        console.log(courtData) 

        if(!courtData.available){
            return res.json({
                success:false,
                message:"Court not available "
            })
        }

        let slots_booked = courtData.slots_booked

        // checking for slot availibility

        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                return res.json({
                    success:false,
                    message: "slots not available"
                })
            }else{
                slots_booked[slotDate].push(slotTime)
            }
        }else{
            slots_booked[slotDate] = []

            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete courtData.slots_booked

        const bookingData = {
            userId,
            manId,
            userData,
            courtData,
            amount:courtData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newBooking = new bookingModel(bookingData)
        await newBooking.save()


        //save new slots data in docdata
        const court = await courtModel.findById(manId)
        console.log("current booked court data: ", court)
        const updatedCourt = await courtModel.findByIdAndUpdate(manId, {slots_booked}  )
        console.log("updated booked court data: ", updatedCourt)
        res.json({
            success:true,
            message: "Court booked" 

        })


    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}


// API to get user appointments for user 

const listBooking = async (req, res) => {
    try {
        const { userId } = req.body;

        
        // Fetch bookings
        const bookings = await bookingModel.find({ userId });
        

        res.json({
            success: true,
            bookings: bookings
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


//API to cancel appointment 

const cancelBooking = async (req,res) => {
    try{

        const {userId, bookingId} = req.body
        const bookingData = await bookingModel.findById(bookingId)
        // verify appointment user
        if(bookingData.userId !== userId){
            return res.json({
                success:false,
                message:"unauthorized"
            })
        }

        //delete appointment
        await bookingModel.findByIdAndUpdate(bookingId, {cancelled:true})

        //releasing court slot
        console.log(bookingData)
        const {manId, slotDate, slotTime} = bookingData
        const courtData = await courtModel.findById(manId)

        let slots_booked = courtData?.slots_booked || [];

        console.log(slots_booked)

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await courtModel.findByIdAndUpdate(manId, {slots_booked})

        res.json({
            success:true,
            message:"Booking cancelled"
        })

    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
    }
}



export {registerUser, loginUser, getProfile, updateProfile, bookAppointment, listBooking, cancelBooking} 