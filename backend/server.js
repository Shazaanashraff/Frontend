import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js' 
import adminRouter from './routes/adminRoute.js'
import userRouter from './routes/userRoute.js'
import managerRouter from './routes/managerRoute.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//api endpoints

app.use('/api/admin', adminRouter)
app.use('/api/manager', managerRouter)
app.use('/api/user', userRouter)


app.get('/', (req,res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=> console.log("server started", port))

app.use((req, res, next) => {
    res.setTimeout(1200, () => { // 2 minutes timeout
      res.status(504).send('Request timed out');
    });
    next();
  });
