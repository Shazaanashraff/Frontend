import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookings from './pages/Bookings'
import Courts from './pages/Courts'

const App = () => {
  return (
    <div className='mx-0 sm:mx-[8%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courts' element={<Courts/>}/>
        <Route path='/courts/:speciality' element={<Courts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-bookings' element={<MyAppointments/>}/>
        <Route path='/bookings/:manId' element={<Bookings/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

