import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiArrowRight, FiSend } from 'react-icons/fi'

const Contact = () => {
  const contactMethods = [
    { icon: <FiPhone className="text-pink-400 text-xl" />, title: "Call Us", content: "+1 (773) 242-4587", action: "tel:+17732424587" },
    { icon: <FiMail className="text-pink-400 text-xl" />, title: "Email Us", content: "hello@kickoff.com", action: "mailto:hello@kickoff.com" },
    { icon: <FiMapPin className="text-pink-400 text-xl" />, title: "Visit Us", content: "54759 Willis Station, Suite 350, Washington, USA", action: "https://maps.google.com" }
  ];
  
  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink-900/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[80px]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="text-pink-400 text-sm uppercase tracking-wider font-medium mb-2 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          REACH OUT TO US
        </motion.span>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        
        <motion.div 
          className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Have questions about booking a court? We're here to help you every step of the way.
        </motion.p>
      </motion.div>

      <div className="container mx-auto px-4 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              href={method.action}
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-900/30 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 30px -10px rgba(126, 34, 206, 0.3)",
                borderColor: "rgba(236, 72, 153, 0.3)"
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center mb-5 group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300 mb-4">{method.content}</p>
              <div className="text-pink-400 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300">
                <span>Connect</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  <FiArrowRight />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-gray-900/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-purple-900/30 shadow-lg h-full"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(126, 34, 206, 0.25)" }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Send us a message
              </motion.h2>
              
              <motion.form 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800/50 border border-gray-700 focus:border-pink-500 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800/50 border border-gray-700 focus:border-pink-500 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-gray-800/50 border border-gray-700 focus:border-pink-500 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full bg-gray-800/50 border border-gray-700 focus:border-pink-500 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-lg inline-flex items-center shadow-lg shadow-pink-500/20"
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 15px 30px -5px rgba(236, 72, 153, 0.4)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FiSend />
                  </motion.div>
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative overflow-hidden rounded-2xl shadow-xl border border-purple-900/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(126, 34, 206, 0.25)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent z-10 pointer-events-none" />
            <motion.img 
              className="w-full h-[500px] object-cover" 
              src={assets.contact_us} 
              alt="Our office" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-purple-900/30">
              <p className="font-bold text-white mb-1">KickOff Headquarters</p>
              <p className="text-sm text-gray-300">Open Monday-Friday, 9AM-6PM</p>
              <motion.div 
                className="flex items-center gap-1.5 text-pink-400 font-medium text-xs mt-2 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span>Get directions</span>
                <FiArrowRight size={12} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 mb-16 py-12 rounded-2xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-3">Need Additional Help?</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out our extensive FAQ section or reach out to our dedicated support team
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.a 
            href="/faq" 
            className="bg-gray-900/60 backdrop-blur-sm px-8 py-5 rounded-xl shadow-md flex items-center justify-center border border-gray-800 group"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 20px 30px -10px rgba(126, 34, 206, 0.3)",
              borderColor: "rgba(236, 72, 153, 0.3)"
            }}
          >
            <span className="text-gray-200 font-medium group-hover:text-pink-400 transition-colors">View FAQs</span>
            <motion.div 
              className="ml-2 opacity-0 group-hover:opacity-100"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowRight className="text-pink-400" />
            </motion.div>
          </motion.a>
          <motion.a 
            href="/support" 
            className="bg-gradient-to-r from-pink-600/90 to-purple-600/90 px-8 py-5 rounded-xl shadow-md flex items-center justify-center"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 20px 30px -10px rgba(236, 72, 153, 0.4)" 
            }}
          >
            <span className="text-white font-medium">Contact Support</span>
            <motion.div 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiArrowRight className="text-white" />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact