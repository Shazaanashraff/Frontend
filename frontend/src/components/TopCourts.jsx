import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const TopCourts = () => {
    const navigate = useNavigate()
    const { courts } = useContext(AppContext)

    return (
        <div className='flex flex-col  items-center gap-6 my-24 text-white md:mx-10 px-4 md:px-0 relative'>
            <div className="absolute inset-0  pointer-events-none overflow-hidden">
                <motion.div 
                    className="absolute -top-20 -right-20 w-64 h-64 bg-purple-800/5 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-700/5 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                />
            </div>

            <motion.div 
                className="flex flex-col items-center relative z-10 "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.span 
                    className="text-pink-400 text-sm font-medium tracking-wider uppercase mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    BEST SELECTION
                </motion.span>
                <motion.h2 
                    className='text-3xl md:text-4xl font-bold mb-2 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Featured Courts
                    <motion.span 
                        className='absolute -bottom-2 left-1/4 right-1/4 h-1 bg-pink-500 rounded-full'
                        initial={{ width: 0, left: "50%" }}
                        whileInView={{ width: "50%", left: "25%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    ></motion.span>
                </motion.h2>
                <motion.p 
                    className='max-w-md text-center text-gray-300 mt-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Discover our premium selection of courts with special offers and prime availability
                </motion.p>
            </motion.div>

            <motion.div 
                className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-8'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
            >
                {courts && courts.slice(0, 8).map((item, index) => (
                    <motion.div 
                        key={index}
                        className='bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer relative border border-purple-800/30'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        whileHover={{ 
                            y: -10,
                            boxShadow: "0 20px 30px rgba(126, 34, 206, 0.15)",
                        }}
                        viewport={{ once: true }}
                        onClick={() => { navigate(`/bookings/${item._id}`); scrollTo(0, 0) }}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <motion.img 
                                className='w-full h-full object-cover' 
                                src={item.image} 
                                alt={item.name}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div 
                                className={`absolute top-3 right-3 px-3 py-1 rounded-full ${item.available ? 'bg-pink-500/80' : 'bg-gray-500/80'} text-white text-xs font-medium`}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (0.1 * index), duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {item.available ? 'Available' : 'Booked'}
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
                        </div>
                        
                        <div className='p-5'>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className='text-lg font-bold text-white'>{item.name}</h3>
                                <motion.div 
                                    className="bg-purple-900/60 text-pink-300 px-2 py-0.5 rounded text-xs font-medium"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Top Rated
                                </motion.div>
                            </div>
                            <p className='text-gray-300 text-sm mb-3'>{item.speciality}</p>
                            
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <svg 
                                                key={i} 
                                                className={`w-4 h-4 ${i < 4 ? "text-pink-400" : "text-gray-600"} fill-current`} 
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 ml-1">4.0</span>
                                </div>
                                <motion.button
                                    className="text-pink-400 text-sm font-medium flex items-center gap-1"
                                    whileHover={{ scale: 1.05, x: 3 }}
                                >
                                    Book Now <span className="text-pink-400">→</span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.button 
                onClick={() => { navigate('/courts'); scrollTo(0, 0) }}
                className='mt-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2 group'
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(219, 39, 119, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <span>View All Courts</span>
                <motion.span 
                    className="group-hover:translate-x-1 transition-transform"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    →
                </motion.span>
            </motion.button>
        </div>
    )
}

export default TopCourts