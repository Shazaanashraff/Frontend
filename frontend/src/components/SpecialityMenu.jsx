import React, { useMemo } from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SpecialityMenu = () => {
  const specialityItems = useMemo(() => 
    specialityData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 * index, type: 'spring', stiffness: 120 }}
        whileHover={{ y: -12, scale: 1.1, transition: { type: 'spring', stiffness: 300, damping: 10 } }}
      >
        <Link 
          onClick={() => scrollTo(0, 0)} 
          className='flex flex-col items-center text-base cursor-pointer flex-shrink-0 group'
          to={`/courts/${item.speciality}`}
        >
          <div className='relative mb-6 p-2'>
            <motion.div 
              className='absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-600/10 blur-lg'
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            
            <motion.div 
              className='absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/30 to-purple-600/20'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 * index }}
              whileHover={{ opacity: 0.7 }}
            />
            
            <motion.div 
              className='w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-purple-900/30 overflow-hidden group-hover:shadow-xl group-hover:shadow-purple-900/50 transition-all duration-300 relative z-10 border border-purple-800/40'
              whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
            >
              <img 
                className='w-16 sm:w-20 group-hover:scale-125 transition-all duration-500 brightness-200 contrast-125 filter invert' 
                src={item.image} 
                alt={item.speciality} 
              />
            </motion.div>
          </div>
          <p className='font-medium text-lg text-gray-300 group-hover:text-pink-400 transition-colors duration-300'>{item.speciality}</p>
          <motion.span 
            className='h-0.5 w-0 bg-pink-500 mt-2 rounded-full'
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </motion.div>
    )), 
    []
  );

  return (
    <motion.div 
      className='flex flex-col items-center gap-12 py-32 text-white bg-gradient-to-b from-fuchsia-950 via-purple-950 to-black px-4 sm:px-8 relative overflow-hidden'
      id='speciality'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <motion.div 
        className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-purple-900/10 to-transparent"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div 
        className="absolute -top-20 right-0 w-1/2 h-80 bg-pink-900/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <FloatingIconsBackground />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.span 
          className="text-pink-400 uppercase tracking-wider font-medium mb-3 block"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sports Selection
        </motion.span>
        
        <motion.h1 
          className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 relative mb-6'
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Find by Sport
        </motion.h1>
        
        <motion.div 
          className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-10 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        <motion.p 
          className='text-lg md:text-xl text-center text-gray-300 max-w-2xl mx-auto relative z-10 mb-4'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our wide selection of premium sports courts and book your game effortlessly. Find the perfect venue for your favorite sport and get ready to play!
        </motion.p>
        
        <motion.p
          className='text-base text-gray-400 max-w-xl mx-auto mb-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Select from our variety of professional-grade courts designed for optimal performance
        </motion.p>
      </div>

      <motion.div 
        className='flex flex-wrap sm:justify-center gap-10 lg:gap-16 w-full max-w-7xl mx-auto overflow-x-auto py-10 px-4 hide-scrollbar relative z-10'
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {specialityItems}
      </motion.div>
      
      <motion.div
        className="relative z-10 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link to="/courts">
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-medium shadow-lg shadow-purple-900/30 flex items-center gap-2 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(219, 39, 119, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore All Sports</span>
            <motion.span 
              className="group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsBackground = () => {
  const sportsIcons = useMemo(() => [
    ...specialityData.map(item => item.image)
  ], []);

  const floatingIcons = useMemo(() => [
    { size: 'w-20 h-20', position: 'top-10 left-[10%]', rotate: 15, opacity: 0.15, duration: 15 },
    { size: 'w-16 h-16', position: 'top-[25%] right-[15%]', rotate: -10, opacity: 0.12, duration: 18 },
    { size: 'w-14 h-14', position: 'bottom-[20%] left-[15%]', rotate: 8, opacity: 0.1, duration: 20 },
    { size: 'w-12 h-12', position: 'bottom-[30%] right-[20%]', rotate: -5, opacity: 0.14, duration: 16 },
    { size: 'w-24 h-24', position: 'top-[40%] left-[30%]', rotate: 12, opacity: 0.08, duration: 22 },
    { size: 'w-18 h-18', position: 'bottom-20 right-[25%]', rotate: -15, opacity: 0.1, duration: 19 },
    { size: 'w-14 h-14', position: 'top-[15%] left-[40%]', rotate: 20, opacity: 0.12, duration: 17 },
    { size: 'w-16 h-16', position: 'bottom-[15%] left-[5%]', rotate: -8, opacity: 0.1, duration: 21 },
    { size: 'w-20 h-20', position: 'top-[60%] right-[8%]', rotate: 15, opacity: 0.09, duration: 24 },
    { size: 'w-14 h-14', position: 'bottom-[40%] left-[35%]', rotate: -12, opacity: 0.11, duration: 18 },
    { size: 'w-12 h-12', position: 'top-[80%] right-[30%]', rotate: 10, opacity: 0.13, duration: 20 },
    { size: 'w-16 h-16', position: 'bottom-[10%] right-[10%]', rotate: -18, opacity: 0.08, duration: 25 },
  ], []);

  return (
    <>
      {floatingIcons.map((config, index) => {
        const iconIndex = index % sportsIcons.length;
        const iconSrc = sportsIcons[iconIndex];
        
        return (
          <motion.div
            key={index}
            className={`absolute ${config.size} ${config.position} z-0`}
            animate={{
              y: [0, -25, 0, 25, 0],
              x: [0, 20, 0, -20, 0],
              rotate: [0, config.rotate, 0, -config.rotate, 0],
              opacity: [config.opacity * 0.7, config.opacity, config.opacity * 0.7]
            }}
            transition={{
              repeat: Infinity,
              duration: config.duration,
              ease: "easeInOut",
            }}
          >
            <img 
              src={iconSrc} 
              alt="Sports icon" 
              className="w-full h-full object-contain filter brightness-200 contrast-125 invert opacity-70"
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default SpecialityMenu;