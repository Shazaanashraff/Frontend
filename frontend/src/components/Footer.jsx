import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone, BsGeoAlt } from 'react-icons/bs'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Courts', path: '/courts' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'FAQ', path: '/faq' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
    { name: 'YouTube', icon: <FaYoutube />, url: '#' }
  ]

  return (
    <footer className="w-full bg-gray-950 relative overflow-hidden mt-20">
      <div className="h-1.5 w-full bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-600/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[100px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="relative z-10 border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          <motion.div 
            className="bg-gradient-to-r from-gray-900/70 to-gray-900/70 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-purple-900/20 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-pink-600/20 blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-8 justify-between relative z-10">
              <div className="md:w-1/2">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >Stay updated with <span className="text-pink-500">KickOff</span></motion.h3>
                <motion.p 
                  className="text-gray-300 max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Join our newsletter for the latest updates on new courts, special offers, and community events.
                </motion.p>
              </div>
              
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-gray-800/50 border border-gray-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/50 flex-grow backdrop-blur-md"
                  />
                  <motion.button 
                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all whitespace-nowrap shadow-lg shadow-pink-500/20"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 20px rgba(219, 39, 119, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-gray-500 text-xs mt-2">We respect your privacy. Unsubscribe at any time.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6 flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img className="h-10" src={assets.logo} alt="KickOff Logo" />
              <div className="h-4 w-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full ml-2 shadow-lg shadow-pink-500/20"></div>
            </motion.div>
            
            <p className="text-gray-400 mb-8">
              Your go-to platform for booking courts with ease. Play anytime, anywhere with KickOff's seamless booking experience.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-9 h-9 rounded-full border border-gray-800 hover:border-pink-500 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r from-pink-600/20 to-purple-600/20 transition-all"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-medium mb-6 relative inline-block">
              Quick Links
              <span className="block h-1 w-2/3 bg-gradient-to-r from-pink-500 to-purple-600 mt-1 rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link to={link.path} className="text-gray-400 hover:text-pink-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-1 bg-pink-500 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-medium mb-6 relative inline-block">
              Support
              <span className="block h-1 w-2/3 bg-gradient-to-r from-pink-500 to-purple-600 mt-1 rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link to={link.path} className="text-gray-400 hover:text-pink-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-1 bg-pink-500 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-medium mb-6 relative inline-block">
              Contact Us
              <span className="block h-1 w-2/3 bg-gradient-to-r from-pink-500 to-purple-600 mt-1 rounded-full"></span>
            </h3>
            
            <ul className="space-y-4">
              <motion.li 
                className="flex gap-3 items-start text-gray-400 group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 p-2 bg-gray-800/50 rounded-lg group-hover:bg-pink-500/10 border border-gray-800 group-hover:border-pink-500/20 transition-all">
                  <BsGeoAlt className="text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-300">Our Location</p>
                  <p className="text-sm">123 Sport Street, Game City, SC 12345</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex gap-3 items-start text-gray-400 group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 p-2 bg-gray-800/50 rounded-lg group-hover:bg-pink-500/10 border border-gray-800 group-hover:border-pink-500/20 transition-all">
                  <BsTelephone className="text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-300">Call Us</p>
                  <p className="text-sm">075-116-4040</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex gap-3 items-start text-gray-400 group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 p-2 bg-gray-800/50 rounded-lg group-hover:bg-pink-500/10 border border-gray-800 group-hover:border-pink-500/20 transition-all">
                  <HiOutlineMail className="text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-300">Email Us</p>
                  <p className="text-sm">contact@kickoff.com</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              © 2025 <span className="text-pink-500 font-medium">KICKOFF</span>. All rights reserved.
            </motion.p>
            
            <div className="flex gap-6">
              {['Terms', 'Privacy', 'Cookies'].map((item, i) => (
                <motion.a 
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-pink-400 text-sm transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer