import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaBasketballBall, FaFootballBall, FaVolleyballBall, FaTableTennis } from 'react-icons/fa'
import { GiTennisRacket, GiSoccerBall, GiBowlingPin, GiHockey } from 'react-icons/gi'
import { MdSportsCricket, MdSportsBaseball, MdSportsHandball } from 'react-icons/md'

const About = () => {
  const navigate = useNavigate();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sportsIcons = [
    { icon: "🏐", position: "top-1/3 right-10", size: "text-3xl", animation: { duration: 9, delay: 0.5 } },
    { icon: "⚾", position: "bottom-40 right-1/4", size: "text-2xl", animation: { duration: 8, delay: 1.5 } },
    { icon: "🏈", position: "top-1/2 left-16", size: "text-4xl", animation: { duration: 10, delay: 3 } },
  ];

  const features = [
    {
      title: "Efficiency",
      description: "Streamlined court booking that fits seamlessly into your busy lifestyle",
      icon: "⚡",
      color: "from-pink-600 to-purple-700"
    },
    {
      title: "Convenience",
      description: "Access to a premium network of quality sports courts in your local area",
      icon: "🌟",
      color: "from-purple-600 to-indigo-700"
    },
    {
      title: "Personalization",
      description: "Tailored recommendations and smart reminders to help you plan your games",
      icon: "🎯",
      color: "from-fuchsia-600 to-pink-700"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      position: "Founder & CEO",
      bio: "Former professional athlete with a passion for making sports accessible to everyone.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      bio: "Sports management expert with 10+ years experience in facility operations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Michael Chen",
      position: "Technical Lead",
      bio: "Tech innovator focused on creating seamless digital experiences for sports enthusiasts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Jason K.",
      text: "KickOff has completely transformed how our basketball team schedules practice sessions. No more back-and-forth texts trying to find available courts!",
      avatar: "/api/placeholder/50/50"
    },
    {
      name: "Priya M.",
      text: "As a tennis coach, I need reliable court access. KickOff has made my scheduling a breeze, and my students love the reminders!",
      avatar: "/api/placeholder/50/50"
    }
  ];

  return (
    <div className="py-8 text-white bg-black pt-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sportsIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} ${item.size} opacity-10 text-pink-400`}
            animate={{
              y: [0, -15, 0, 15, 0],
              x: [0, 10, 0, -10, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: item.animation.duration,
              delay: item.animation.delay,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </motion.div>
        ))}
        
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-800/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        <motion.div
          className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-transparent via-purple-900/5 to-transparent skew-y-12"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-96 bg-gradient-to-r from-transparent via-pink-800/5 to-transparent -skew-y-12"
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 4
          }}
        ></motion.div>
      </div>

      <motion.div 
        className="relative overflow-hidden rounded-2xl mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542144582-1ba00456b5e3')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-20 py-20 px-6 md:px-12 text-white max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About <span className="text-pink-400">KickOff</span>
          </motion.h1>
          <motion.div 
            className="h-1 w-24 bg-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We're revolutionizing how sports enthusiasts find and book courts, making it easier than ever to play the games you love.
          </motion.p>
        </div>
      </motion.div>

      <motion.div 
        className="my-20 flex flex-col md:flex-row gap-16 items-center md:items-start px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-full md:w-2/5 relative"
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-pink-600/20 rounded-lg transform rotate-3"></div>
          <img 
            className="w-full rounded-lg shadow-xl relative z-10 transform transition-transform duration-500 hover:scale-105" 
            src={assets.about_image} 
            alt="Our team" 
          />
          <div className="absolute -bottom-4 -right-4 bg-gray-900 px-6 py-3 rounded-lg shadow-lg z-20 border border-purple-800/30">
            <p className="text-pink-400 font-bold">Since 2015</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col justify-center gap-6 md:w-3/5 text-gray-300"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white">Our Story</h2>
          <p className="text-lg">
            KickOff started with a simple idea: make it easier for people to find and book sports courts. 
            Our founders were tired of the hassle involved in organizing games with friends and believed 
            there had to be a better way.
          </p>
          <p className="text-lg">
            What began as a small project has now grown into a platform trusted by thousands of sports 
            enthusiasts across the country. We're proud of our journey and excited about the future of sports accessibility.
          </p>
          
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-lg">
              We envision a world where anyone can access quality sports facilities with just a few clicks. 
              By removing barriers to play, we're helping create healthier communities and more connected neighborhoods.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-8">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-400 font-bold text-xl border border-purple-800/30">
                50+
              </div>
              <p className="text-base font-medium">Cities Covered</p>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-400 font-bold text-xl border border-purple-800/30">
                200+
              </div>
              <p className="text-base font-medium">Partner Courts</p>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-purple-900/30 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-400 font-bold text-xl border border-purple-800/30">
                10K+
              </div>
              <p className="text-base font-medium">Happy Players</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="py-16 px-6 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-md border border-purple-800/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="py-20 bg-gradient-to-b from-gray-900 to-black rounded-2xl px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-pink-400">KickOff</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We're committed to making your sports experience as seamless as possible with these key advantages
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-800/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-8">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Accessibility', desc: 'Making sports available to everyone, regardless of skill level' },
            { name: 'Community', desc: 'Building connections through shared passion for sports' },
            { name: 'Innovation', desc: 'Constantly improving our platform with cutting-edge solutions' },
            { name: 'Excellence', desc: 'Delivering the highest quality experience for every user' }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-purple-900/20 to-transparent p-8 rounded-xl text-center border border-purple-800/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-3">{value.name}</h3>
              <div className="w-12 h-1 bg-pink-500 mx-auto mb-4"></div>
              <p className="text-gray-300">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="py-20 bg-gradient-to-b from-gray-900 to-black rounded-2xl px-6 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-pink-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            The passionate individuals behind KickOff who work every day to improve your sports booking experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-purple-800/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-pink-400 font-medium mb-3">{member.position}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        className="bg-gradient-to-r from-purple-900 to-pink-800 rounded-2xl p-16 text-white text-center mb-16 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="absolute top-0 -right-40 w-80 h-[600px] bg-white/10 blur-3xl -rotate-45 origin-top"
          animate={{ 
            opacity: [0, 0.15, 0],
            x: [-200, 300]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to find your perfect court?</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg relative z-10">
          Join thousands of satisfied users who have transformed their sports booking experience with KickOff
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <motion.button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-colors text-lg"
            onClick={() => navigate('/courts')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(219, 39, 119, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default About