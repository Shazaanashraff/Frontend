import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Login = () => {
  const { backendUrl, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        })
  
        if (data.success) {
          localStorage.setItem("token", data.token)
          setToken(data.token)
          toast.success("Account created successfully!")
          navigate("/")
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        })
  
        if (data.success) {
          localStorage.setItem("token", data.token)
          setToken(data.token)
          toast.success("Welcome back!")
          navigate("/")
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-950 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute h-96 w-96 rounded-full bg-purple-900/10 blur-[100px] -bottom-20 -left-20"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute h-80 w-80 rounded-full bg-pink-900/10 blur-[100px] top-40 right-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute h-64 w-64 rounded-full bg-indigo-900/10 blur-[80px] bottom-40 right-1/3"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut" 
          }}
        ></motion.div>
      </div>

      <motion.div
        className="w-full max-w-md z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <motion.img 
            src={assets.logo} 
            alt="KickOff Logo" 
            className="h-16 mx-auto mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h2 
            className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {state === 'Sign Up' ? "Create Account" : "Welcome Back"}
          </motion.h2>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {state === 'Sign Up' 
              ? "Join KickOff to start booking courts today" 
              : "Sign in to access your account"}
          </motion.p>
        </div>

        <motion.div 
          className="bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-900/30"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <form onSubmit={onSubmitHandler} className="space-y-5">
            <AnimatedFormFields state={state} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            
            <motion.button 
              type="submit"
              className={`w-full py-3.5 px-4 rounded-xl text-white font-medium text-base relative overflow-hidden ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} shadow-lg shadow-pink-600/20`}
              whileHover={!isLoading ? { scale: 1.02, boxShadow: "0 15px 25px -5px rgba(236, 72, 153, 0.4)" } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              disabled={isLoading}
              style={{
                background: "linear-gradient(to right, #ec4899, #a855f7)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear",
                }}
                style={{ display: isLoading ? 'block' : 'none' }}
              />
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <motion.div 
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />
                  <span className="ml-2">Processing...</span>
                </div>
              ) : (
                state === 'Sign Up' ? "Create Account" : "Login"
              )}
            </motion.button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900/60 text-gray-400">or</span>
              </div>
            </div>

            <div className="mt-6">
              {state === "Sign Up" ? (
                <motion.p 
                  className="text-center text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Already have an account?{" "}
                  <motion.span 
                    onClick={() => { setState('Login'); navigate('/login'); }}
                    className="text-pink-400 font-medium cursor-pointer hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    Login here
                  </motion.span>
                </motion.p>
              ) : (
                <motion.p 
                  className="text-center text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Don't have an account?{" "}
                  <motion.span 
                    onClick={() => setState('Sign Up')}
                    className="text-pink-400 font-medium cursor-pointer hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sign up
                  </motion.span>
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-center mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          By continuing, you agree to KickOff's Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  )
}

// Animated form fields component
const AnimatedFormFields = ({ state, name, setName, email, setEmail, password, setPassword }) => {
  return (
    <>
      {state === 'Sign Up' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-2"
        >
          <label className="block text-gray-300 text-sm font-medium">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 focus:outline-none text-white transition-colors"
            placeholder="Enter your name"
          />
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: state === 'Sign Up' ? 0.1 : 0 }}
        className="space-y-2"
      >
        <label className="block text-gray-300 text-sm font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 focus:outline-none text-white transition-colors"
          placeholder="Enter your email"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: state === 'Sign Up' ? 0.2 : 0.1 }}
        className="space-y-2"
      >
        <div className="flex justify-between">
          <label className="block text-gray-300 text-sm font-medium">Password</label>
          {state === 'Login' && (
            <a href="#" className="text-xs text-pink-400 hover:text-pink-300">
              Forgot password?
            </a>
          )}
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500/50 focus:outline-none text-white transition-colors"
          placeholder="Enter your password"
        />
      </motion.div>
    </>
  )
}

export default Login