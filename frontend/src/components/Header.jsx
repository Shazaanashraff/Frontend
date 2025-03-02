import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className='flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-black via-purple-950 to-fuchsia-950  shadow-2xl px-6 md:px-10 lg:px-12 mt-20 overflow-hidden relative border border-purple-800/20'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute h-40 w-40 rounded-full bg-pink-500/40 -top-10 -left-10 blur-md"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute h-52 w-52 rounded-full bg-indigo-600/30 bottom-20 left-1/4 blur-md"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute h-32 w-32 rounded-full bg-purple-500/35 top-20 right-1/3 blur-md"
          animate={{ 
            x: [0, 25, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute h-24 w-24 rounded-full bg-fuchsia-600/40 bottom-10 right-10 blur-md"
          animate={{ 
            x: [0, -10, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut" 
          }}
        ></motion.div>
      </div>
      
      <motion.div 
        className="absolute top-0 left-1/2 w-60 h-[800px] bg-pink-600/10 blur-3xl -rotate-45 origin-top"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.18, 0],
          x: [-200, 200]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent opacity-0 z-10"
        animate={{ 
          opacity: [0, 0.15, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      {/* --------- Left Side --------- */}
      <motion.div 
        className='md:w-1/2 flex flex-col items-start justify-center gap-7 py-14 m-auto md:py-[10vw] z-10'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className='text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.span 
            className='bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100/80 inline-block'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Book your playtime
          </motion.span>
          <br /> 
          <motion.span 
            className='relative inline-block'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}  
          >
            with <motion.span 
                    className='text-pink-500 inline-block'
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >100+</motion.span> courts
            <motion.span 
              className='absolute -bottom-3 left-0 h-2 bg-pink-600 rounded-full'
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 0.8 }}
            ></motion.span>
          </motion.span>
        </motion.div>
        
        <motion.div 
          className='flex flex-col md:flex-row items-center gap-5 text-white text-base backdrop-blur-md bg-white/5 p-5 rounded-xl border border-purple-700/30 hover:bg-white/10 transition-all duration-300'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ 
            boxShadow: "0 0 30px rgba(147, 51, 234, 0.25)",
            y: -5
          }}
        >
          <motion.img 
            className='w-32 drop-shadow-lg' 
            src={assets.group_profiles} 
            alt="Users" 
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div>
            <p className='font-light leading-relaxed'>Explore our wide selection of premium futsal courts and book your game effortlessly. Find the perfect venue and get ready to play!</p>
            <div className="flex items-center gap-2 mt-2">
              <motion.div 
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-4 h-4 text-pink-500 fill-current" 
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </motion.div>
              <span className="text-sm opacity-80">4.9/5 from 2,500+ players</span>
            </div>
          </div>
        </motion.div>
        
        <motion.a 
          href="#speciality" 
          className='flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-full text-white font-semibold text-sm m-auto md:m-0 hover:scale-105 hover:shadow-lg transition-all duration-300 group'
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(219, 39, 119, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span>Book Courts Now</span>
          <motion.div
            animate={{ 
              x: [0, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut" 
            }}
          >
            <motion.img 
              className='w-4' 
              src={assets.arrow_icon} 
              alt="" 
            />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* --------- Right Side ---------- */}
      <motion.div 
        className='md:w-1/2 relative flex items-start justify-center h-full pt-16 md:pt-20 pb-8 md:pb-12'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          perspective: "1000px"
        }}
      >
        <motion.div 
          className="relative w-[100%] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl mx-auto shadow-[0_0_45px_rgba(120,0,150,0.25)]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${(mousePosition.x / 100) * (isHovering ? 3 : 2)}deg) rotateX(${(-mousePosition.y / 100) * (isHovering ? 3 : 2)}deg)`
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/70 to-transparent z-10 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          ></motion.div>
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-600/20 to-transparent z-10 rounded-2xl opacity-0"
            animate={{ 
              opacity: [0, 0.6, 0],
              x: [-50, 50, -50],
              y: [-50, 50, -50],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut" 
            }}
          ></motion.div>
          
          <motion.img 
            className='w-full h-full object-cover rounded-2xl shadow-2xl'
            src={assets.heroKick} 
            alt="Futsal player" 
            initial={{ y: 60, scale: 1.1 }}
            animate={{ y: 5, scale: 1.05 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ objectPosition: "center 40%", filter: "contrast(1.1) brightness(0.8) saturate(1.1)" }} 
          />
          
          <motion.div 
            className="absolute top-5 right-5 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-purple-700/30 text-white font-medium flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(0,0,0,0.6)"
            }}
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-pink-500"
              animate={{ 
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 0 rgba(236, 72, 153, 0.4)",
                  "0 0 10px rgba(236, 72, 153, 0.7)",
                  "0 0 0 rgba(236, 72, 153, 0.4)"
                ]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut" 
              }}
            ></motion.div>
            Premium Courts
          </motion.div>
          
          <motion.div
            className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md px-5 py-3 rounded-xl border border-purple-700/30 text-white font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="text-pink-500 text-3xl font-bold">4.9</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-5 h-5 text-pink-500 fill-current" 
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + (i * 0.1) }}
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </div>
            </div>
            <div className="text-sm mt-1 opacity-80">Top-rated facilities nationwide</div>
          </motion.div>
          
          <motion.div
            className="absolute top-5 left-5 bg-purple-600/90 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-pink-300"
              animate={{ 
                scale: [1, 1.5, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut" 
              }}
            ></motion.div>
            Available Now
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header