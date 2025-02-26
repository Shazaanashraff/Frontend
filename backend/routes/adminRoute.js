import express from 'express'
import {  loginAdmin,  adminDashboard, addManager, allCourts, bookingAdmin, bookingCancel } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/managerController.js'

const adminRouter = express.Router()

adminRouter.post('/add-manager', authAdmin, upload.single('image'), addManager)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-courts',authAdmin, allCourts)
adminRouter.post('/change-availability',authAdmin, changeAvailability)
adminRouter.get('/bookings',authAdmin, bookingAdmin)
adminRouter.post('/cancel-bookings',authAdmin, bookingCancel)
adminRouter.get('/dashboard',authAdmin, adminDashboard)

export default adminRouter