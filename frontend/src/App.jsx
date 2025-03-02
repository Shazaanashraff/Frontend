import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from './assets/assets';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-gray-950 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.img 
          src={assets.logo} 
          alt="KickOff Logo" 
          className="h-20 sm:h-24 mb-8 relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div 
          className="absolute -inset-4 bg-purple-600/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <motion.h2 
        className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Loading Experience
      </motion.h2>
      
      <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-pink-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('bg-gray-950');
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    
    return () => {
      document.body.classList.remove('bg-gray-950');
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black text-white relative">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-purple-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 right-10 w-80 h-80 bg-pink-700/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-900/5 rounded-full blur-3xl"></div>
      </div>
      
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-gray-900 border border-purple-900/30 backdrop-blur-sm"
        progressClassName="bg-gradient-to-r from-pink-500 to-purple-600"
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <div>
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
      </div>
    </div>
  )
}

export default App