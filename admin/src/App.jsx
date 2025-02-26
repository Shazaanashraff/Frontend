import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Login from './pages/login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AddManager from './pages/Admin/AddManager'
import DoctorsLists from './pages/Admin/ManagersLists'
import { ManagerContext } from './context/ManagerContext';
import AllBookings from './pages/Admin/AllBookings';
import ManagerBooking from './pages/Manager/ManagerBooking';
import ManagerProfile from './pages/Manager/ManagerProfile';
import ManagerDashboard from './pages/Manager/ManagerDashboard';
import AddCourts from './pages/Manager/AddCourts';

const App = () => {
  
  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(ManagerContext)

  return aToken || dToken ?  (
    <div className='bg-[#F8F9Fd]'>
     <ToastContainer />
     <Navbar />
     <div className='flex items-start '>
      <Sidebar />
      <Routes>
        {/*Admin Route */}

        <Route path='/' element={<></>} />
        <Route path='/admin-dashboard' element={<Dashboard />} />
        <Route path='/all-bookings' element={<AllBookings />} />
        <Route path='/add-manager' element={<AddManager />} />
        <Route path='/manager-list' element={<DoctorsLists/>} />
        
        {/*Doctor Route */}
        
        <Route path='/manager-dashboard' element={<ManagerDashboard/>} />
        <Route path='/manager-bookings' element={<ManagerBooking/>} />
        <Route path='/manager-profile' element={<ManagerProfile/>} />
        <Route path='/add-courts' element={<AddCourts/>} />
        
      </Routes>

     </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
