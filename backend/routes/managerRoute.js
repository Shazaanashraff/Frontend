import express from 'express';  
import { loginManager, bookingsManager, bookingCancel, bookingComplete, managerDashboard, managerProfile, updateManagerProfile, addCourts, courtsList } from '../controllers/managerController.js';
import { getFutsalLocations } from '../controllers/mapController.js';
import authManager from '../middlewares/authManager.js';
import upload from '../middlewares/multer.js'




const managerRouter = express.Router();

managerRouter.get('/list', courtsList);
managerRouter.post('/login', loginManager);
managerRouter.get('/bookings', authManager, bookingsManager)
managerRouter.post('/cancel-booking', authManager, bookingCancel)
managerRouter.post('/complete-booking', authManager, bookingComplete)
managerRouter.get('/dashboard', authManager, managerDashboard)
managerRouter.get('/profile', authManager, managerProfile)
managerRouter.post('/update-profile', authManager, updateManagerProfile)
managerRouter.get('/location', getFutsalLocations)
managerRouter.post('/add-courts', authManager,  upload.single('image'), addCourts)



export default managerRouter;