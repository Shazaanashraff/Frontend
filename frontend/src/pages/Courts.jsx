import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Courts = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const [filterMan, setFilterMan] = useState([])
  const { courts } = useContext(AppContext)
  const [showFilter, setShowFilter] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const applyFilter = () => {
    if (speciality) {
      setFilterMan(courts.filter(man => man.speciality === speciality))
    } else {
      setFilterMan(courts)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [courts, speciality])

  const filteredCourts = filterMan.filter(court => 
    court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    court.speciality.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [
    { name: 'Football', icon: '⚽' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Swimming', icon: '🏊‍♂️' },
    { name: 'Table Pool', icon: '🎱' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Badminton', icon: '🏸' }
  ]

  return (
    <motion.div 
      className="min-h-screen py-10 pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse Courts
          <motion.div 
            className="h-1 w-24 bg-pink-500 rounded-full mt-2"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h1>
        
        <motion.p 
          className='text-gray-300 mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Browse through our wide range of premium courts and find your perfect match
        </motion.p>

        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="bg-gray-900/50 border border-purple-800/30 w-full pl-10 pr-3 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all backdrop-blur-sm"
            placeholder="Search for courts by name or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <motion.div 
            className="lg:w-1/5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Filter By</h2>
              <button 
                className={`lg:hidden py-1 px-3 border rounded text-sm transition-all ${showFilter ? 'bg-pink-500 border-pink-600 text-white' : 'border-pink-500 text-pink-400'}`} 
                onClick={() => setShowFilter(prev => !prev)}
              >
                {showFilter ? 'Hide' : 'Show'} Filters
              </button>
            </div>
            
            <div className={`space-y-3 ${showFilter ? 'block' : 'hidden lg:block'}`}>
              {categories.map((category, index) => (
                <motion.div 
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.05), duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className={`
                    flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
                    ${speciality === category.name 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-900/30' 
                      : 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-200 border border-purple-800/20'}
                  `}
                  onClick={() => speciality === category.name 
                    ? navigate('/courts') 
                    : navigate(`/courts/${category.name}`)}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 bg-gray-800/50 p-5 rounded-lg border border-purple-800/30 backdrop-blur-sm hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-white">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">Not sure which court is right for you? Contact our team for assistance.</p>
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition duration-300">
                Contact Support
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className='lg:w-4/5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {filteredCourts.length === 0 ? (
              <motion.div 
                className="text-center py-12 px-4 bg-gray-800/30 rounded-lg border border-purple-800/20 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-white mb-1">No courts found</h3>
                <p className="text-gray-300">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredCourts.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.05), duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className='bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 border border-purple-800/30'
                    onClick={() => navigate(`/bookings/${item._id}`)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img 
                        className='w-full h-full object-cover' 
                        src={item.image} 
                        alt={item.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-3 right-3">
                        <motion.div 
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.available ? 'bg-pink-500/80 text-white' : 'bg-gray-500/80 text-white'
                          }`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (index * 0.05), duration: 0.4 }}
                        >
                          {item.available ? 'Available' : 'Booked'}
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
                    </div>

                    <div className='p-5'>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className='text-lg font-bold text-white'>{item.name}</h3>
                        <motion.div 
                          className="bg-purple-900/60 text-pink-300 px-2 py-0.5 rounded text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.speciality}
                        </motion.div>
                      </div>
                      
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
                          whileHover={{ x: 3 }}
                        >
                          Book Now <span className="text-pink-400">→</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Courts