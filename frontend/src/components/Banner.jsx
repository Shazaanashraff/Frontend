import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <motion.div 
      className='relative flex flex-col md:flex-row bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-950 rounded-2xl overflow-hidden px-6 sm:px-10 md:px-14 lg:px-16 my-24 md:mx-10 shadow-2xl border border-purple-800/30'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="absolute h-40 w-40 rounded-full bg-purple-500/20 -top-10 -left-10 blur-md"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute h-32 w-32 rounded-full bg-pink-500/20 bottom-10 right-1/3 blur-md"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className='flex-1 py-10 sm:py-12 md:py-16 lg:py-20 z-10'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className='relative mb-2'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-pink-400 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            NEARBY VENUES
          </motion.span>
        </motion.div>
        
        <motion.div 
          className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Browse for Courts
          </motion.p>
          <motion.p 
            className='mt-3 relative'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className='relative'>
              nearby location
              <motion.span 
                className='absolute -bottom-3 left-0 h-1 bg-pink-500 rounded-full'
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.9, duration: 0.8 }}
                viewport={{ once: true }}
              ></motion.span>
            </span>
          </motion.p>
        </motion.div>
        
        <motion.p 
          className='mt-6 text-white/80 max-w-md text-sm sm:text-base'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Find and book the perfect futsal court right in your neighborhood. 
          Our location-based search makes it easy to discover courts near you.
        </motion.p>
        
        <motion.button 
          onClick={()=>{navigate('/courts'); scrollTo(0,0)}} 
          className='flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-sm sm:text-base text-white font-medium px-8 py-3.5 rounded-full mt-8 group'
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(219, 39, 119, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>Find Courts Near Me</span>
          <motion.span 
            className="text-white group-hover:translate-x-1 transition-transform"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
      
      <motion.div 
        className='hidden md:flex md:w-1/2 lg:w-[450px] items-center justify-center relative z-10 py-8'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gray-800 rounded-xl overflow-hidden">
            <motion.div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/50.073658,14.418540,12,0/600x400?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')"
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut" 
              }}
            >
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                scale: [0.5, 1.5, 2]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeOut",
                repeatDelay: 0.5
              }}
            >
              <div className="w-full h-full rounded-full border-4 border-pink-500/40"></div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-4 -right-4 bg-black/50 backdrop-blur-md px-5 py-3 rounded-xl border border-purple-700/30 text-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div className="text-lg font-bold text-pink-400">24 Courts</div>
          <div className="text-sm opacity-80">available nearby</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Banner